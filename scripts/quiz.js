// Используем существующие глобальные переменные из языковых файлов
// (не объявляем повторно)

// Функции для управления квизом
        function startQuiz() {
            document.getElementById('screen1').classList.remove('active');
            document.getElementById('screen2').classList.add('active');
            currentQuestionIndex = 0;
            showQuestion(currentQuestionIndex);
            updateProgressBar();
        }

        function showQuestion(index) {
            const questionContainer = document.getElementById('questionContainer');
            questionContainer.innerHTML = `
                <div class="question active">
                    <h2>${questions[index].question}</h2>
                    <div class="answers">
                        ${questions[index].answers.map(answer => 
                            `<button class="answer-btn" onclick="handleAnswer()">${answer}</button>`
                        ).join('')}
                    </div>
                    ${index > 0 ? `
                    <div class="navigation-buttons">
                        <button class="back-btn" onclick="handleBack()"> ↫ Back </button>
                    </div>
                    ` : ''}
                </div>
            `;
        }

        function handleAnswer() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(currentQuestionIndex);
                updateProgressBar();
            } else {
                showResults();
            }
        }

        function handleBack() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                showQuestion(currentQuestionIndex);
                updateProgressBar();
            }
        }

        function updateProgressBar() {
            const progressBar = document.getElementById('progressBar');
            const progress = (currentQuestionIndex / questions.length) * 100;
            progressBar.style.width = `${progress}%`;
        }

// Функции для слайдера
function showResults() {
    document.getElementById('screen2').classList.remove('active');
    
    // Отмечаем, что квиз пройден
    localStorage.setItem('quizCompleted', 'true');
    
    // Показываем прелоадер перед отображением результатов
    showMedicalPreloader();
    
    // Добавляем задержку для показа результатов после прелоадера
    setTimeout(() => {
        const screen3 = document.getElementById('screen3');
        screen3.classList.add('active');
        
        // Заполняем основной результат
        document.getElementById('resultMainHeading').textContent = results.headings[0];
        document.getElementById('resultMainText').textContent = results.mainText;
        
        // Заполняем блок "Почему это серьезно"
        document.getElementById('seriousHeading').textContent = results.headings[1];
        const seriousReasons = document.getElementById('seriousReasonsList').children;
        results.seriousReasons.forEach((reason, index) => {
            if (seriousReasons[index]) {
                seriousReasons[index].textContent = reason;
            }
        });
        
        // Заполняем блок опасности
        document.getElementById('dangerHeading').textContent = results.dangerHeading;
        document.getElementById('timelineTime1').textContent = results.dangerText.stage1.time;
        document.getElementById('timelineText1').textContent = results.dangerText.stage1.text;
        document.getElementById('timelineTime2').textContent = results.dangerText.stage2.time;
        document.getElementById('timelineText2').textContent = results.dangerText.stage2.text;
        document.getElementById('timelineTime3').textContent = results.dangerText.stage3.time;
        document.getElementById('timelineText3').textContent = results.dangerText.stage3.text;
        
        // Заполняем блок "Что делать"
        document.getElementById('whatToDoHeading').textContent = results.headings[2];
        document.getElementById('whatToDoText1').textContent = results.whatToDoText[0];
        document.getElementById('whatToDoText2').textContent = results.whatToDoText[1];
        document.getElementById('whatToDoText3').textContent = results.whatToDoText[2];
        
        // Заполняем форму заказа
        document.getElementById('nameInput').placeholder = results.orderForm.namePlaceholder;
        document.getElementById('phoneInput').placeholder = results.orderForm.phonePlaceholder;
        document.querySelector('#form button').textContent = results.orderForm.buttonText;

        document.getElementById('bottomOrderButton').textContent = results.bottomOrderButton;
        
        // Устанавливаем текст для кнопки orderButton
        const orderButton = document.getElementById('orderButton');
        if (orderButton && results.orderButtonText) {
            orderButton.textContent = results.orderButtonText;
        }
        
        // Заполняем блок доказательств
        document.getElementById('proofsHeading').textContent = results.headings[4];
        const proofItems = document.querySelectorAll('.proof-item');
        
        results.proofs.sections.forEach((section, index) => {
            if (proofItems[index]) {
                const item = proofItems[index];
                const title = item.querySelector('.proof-title');
                const ingredients = item.querySelectorAll('.ingredients-list p');
                
                title.textContent = `${index + 1}. ${section.title}`;
                
                section.points.forEach((point, pointIndex) => {
                    if (ingredients[pointIndex]) {
                        ingredients[pointIndex].innerHTML = point;
                    }
                });
            }
        });

        // Заполняем заключение
        const proofConclusion = document.querySelector('.proof-conclusion p');
        if (proofConclusion) {
            proofConclusion.textContent = results.proofs.summary;
        }

        // Инициализируем блок с комментарием доктора
        initDoctorComment();

        // Проверяем существование элементов для второго слайдера перед его инициализацией
        const slider2 = document.getElementById('slider2');
        const sliderContainer2 = document.getElementById('sliderContainer2');
        const sliderNav2 = document.getElementById('sliderNav2');
        const slideTexts2 = document.getElementById('slideTexts2');
        
        if (slider2 && sliderContainer2 && sliderNav2 && slideTexts2 && 
            landingContent.slides2 && landingContent.slides2.length > 0) {
            // Инициализируем второй слайдер только при наличии всех необходимых элементов
            initSlider('slider2', 'sliderContainer2', 'sliderNav2', 'slideTexts2', landingContent.slides2);
        } else {
            console.log('Пропущена инициализация второго слайдера: не все элементы доступны');
        }

        // Инициализируем FAQ
        initFAQ();
    }, 3500); // Задержка должна быть немного больше, чем время скрытия прелоадера из medical-preloader.js
}

function initFAQ() {
    document.getElementById('faqTitle').textContent = landingContent.faq.title;
    
    const faqItems = document.querySelectorAll('.faq-item');
    landingContent.faq.items.forEach((item, index) => {
        if (faqItems[index]) {
            const question = faqItems[index].querySelector('.faq-question');
            const answer = faqItems[index].querySelector('.faq-answer');
            
            if (question) {
                question.textContent = item.question;
            }
            
            if (answer) {
                const intro = answer.querySelector('.answer-intro');
                const subtitle = answer.querySelector('.answer-subtitle');
                const list = answer.querySelector('.answer-list');
                const conclusion = answer.querySelector('.answer-conclusion');
                
                if (intro) {
                    intro.textContent = item.answer.intro;
                }
                
                if (subtitle && item.answer.subtitle) {
                    subtitle.textContent = item.answer.subtitle;
                }
                
                if (list && item.answer.list) {
                    item.answer.list.forEach(text => {
                        const li = document.createElement('li');
                        li.textContent = text;
                        list.appendChild(li);
                    });
                }
                
                if (conclusion) {
                    conclusion.textContent = item.answer.conclusion;
                }
            }
        }
    });
}

// Инициализация первого слайдера 
function initSliders() { 
    const slider1 = document.getElementById('slider');
    if (slider1) {
        initSlider('slider', 'sliderContainer', 'sliderNav', 'slideTexts', landingContent.slides);
    }
}

function initSlider(sliderId, containerId, navId, textsId, slides) {
    const sliderContainer = document.getElementById(containerId);
    const sliderNav = document.getElementById(navId);
    const slideTexts = document.getElementById(textsId);
    
    if (!sliderContainer || !sliderNav || !slideTexts) {
        console.error(`Не найдены необходимые элементы для слайдера ${sliderId}`);
        return;
    }
    
    sliderContainer.innerHTML = '';
    sliderNav.innerHTML = '';
    slideTexts.innerHTML = '';
    
    // Получаем ширину контейнера слайдера
    const slider = document.getElementById(sliderId);
    const sliderWidth = slider ? slider.offsetWidth : 0;
    
    // Базовые стили для контейнера
    sliderContainer.style.display = 'flex';
    sliderContainer.style.willChange = 'transform'; // Оптимизация для GPU
    
    slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide';
        // Устанавливаем явную ширину для слайда
        slideDiv.style.width = `${sliderWidth}px`;
        
        slideDiv.innerHTML = `
            <img src="${slide.img}" loading="lazy">
        `;
        sliderContainer.appendChild(slideDiv);

        const textDiv = document.createElement('div');
        textDiv.className = 'slide-text';
        textDiv.style.display = index === 0 ? 'block' : 'none';
        textDiv.textContent = slide.text;
        slideTexts.appendChild(textDiv);

        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index, sliderId));
        sliderNav.appendChild(dot);
    });

    // Touch events с простыми параметрами
    sliderContainer.addEventListener('touchstart', e => touchStart(e, sliderId), { passive: false });
    sliderContainer.addEventListener('touchmove', e => touchMove(e, sliderId), { passive: false });
    sliderContainer.addEventListener('touchend', e => touchEnd(e, sliderId));

    // Mouse events
    sliderContainer.addEventListener('mousedown', e => touchStart(e, sliderId));
    sliderContainer.addEventListener('mousemove', e => touchMove(e, sliderId));
    sliderContainer.addEventListener('mouseup', e => touchEnd(e, sliderId));
    sliderContainer.addEventListener('mouseleave', e => touchEnd(e, sliderId));

    updateSlider(sliderId);
    startAutoSlide(sliderId);
}

// Функции управления слайдером
function touchStart(event, sliderId) {
    isDragging = true;
    startPos = getPositionX(event);
    const sliderContainer = sliderId === 'slider' ? 
        document.getElementById(`${sliderId}Container`) : 
        document.getElementById('sliderContainer2');
    
    if (!sliderContainer) return;
    
    sliderContainer.style.transition = 'none';
    if (sliderId === 'slider') {
        clearInterval(autoSlideInterval1);
    } else {
        clearInterval(autoSlideInterval2);
    }
}

function touchMove(event, sliderId) {
    if (!isDragging) return;
    
    // Предотвращаем стандартное поведение, чтобы избежать прокрутки страницы
    event.preventDefault();
    
    const currentPosition = getPositionX(event);
    const diff = currentPosition - startPos;
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    
    // Получаем контейнер слайдера
    const sliderContainer = sliderId === 'slider' ? 
        document.getElementById(`${sliderId}Container`) : 
        document.getElementById('sliderContainer2');
        
    if (!sliderContainer) return;
        
    // Используем более точное измерение ширины
    const sliderWidth = slider.getBoundingClientRect().width;
    const slides = sliderId === 'slider' ? landingContent.slides : landingContent.slides2;
    
    // Добавляем коэффициент сопротивления при достижении границ
    let resistance = 1;
    
    // Расчет с добавлением сопротивления на краях
    if (prevTranslate + diff > 0) {
        resistance = 0.3; // Сильное сопротивление при попытке перетащить влево от первого слайда
    } else if (prevTranslate + diff < -(slides.length - 1) * sliderWidth) {
        resistance = 0.3; // Сильное сопротивление при попытке перетащить вправо от последнего слайда
    }
    
    // Применяем сопротивление для более естественного перетаскивания
    currentTranslate = prevTranslate + (diff * resistance);
    
    // Используем requestAnimationFrame для плавности анимации
    requestAnimationFrame(() => {
        setSliderPosition(currentTranslate, sliderId);
    });
}

function setSliderPosition(position, sliderId) {
    const sliderContainer = sliderId === 'slider' ? 
        document.getElementById(`${sliderId}Container`) : 
        document.getElementById('sliderContainer2');
    
    if (!sliderContainer) return;
    
    // Используем transform с translate3d вместо translateX для аппаратного ускорения
    sliderContainer.style.transform = `translate3d(${position}px, 0, 0)`;
}

function touchEnd(event, sliderId) {
    if (!isDragging) return;
    
    isDragging = false;
    const slider = document.getElementById(sliderId);
    
    if (!slider) return;
    
    // Используем более точное измерение ширины
    const sliderWidth = slider.getBoundingClientRect().width;
    const movedBy = currentTranslate - prevTranslate;
    const slides = sliderId === 'slider' ? landingContent.slides : landingContent.slides2;
    const currentIndex = sliderId === 'slider' ? currentSlideIndex1 : currentSlideIndex2;
    
    // Получаем слайдер-контейнер
    const sliderContainer = sliderId === 'slider' ? 
        document.getElementById(`${sliderId}Container`) : 
        document.getElementById('sliderContainer2');
    
    // Добавляем более плавный переход с кубической функцией
    if (sliderContainer) {
        sliderContainer.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
    }
    
    // Снижаем порог переключения для более отзывчивого опыта
    if (Math.abs(movedBy) > sliderWidth / 4) {
        if (movedBy < 0) {
            if (sliderId === 'slider') {
                currentSlideIndex1 = Math.min(currentIndex + 1, slides.length - 1);
            } else {
                currentSlideIndex2 = Math.min(currentIndex + 1, slides.length - 1);
            }
        } else {
            if (sliderId === 'slider') {
                currentSlideIndex1 = Math.max(currentIndex - 1, 0);
            } else {
                currentSlideIndex2 = Math.max(currentIndex - 1, 0);
            }
        }
    }
    
    // Используем requestAnimationFrame для более плавной анимации
    requestAnimationFrame(() => {
        goToSlide(sliderId === 'slider' ? currentSlideIndex1 : currentSlideIndex2, sliderId);
    });
    
    startAutoSlide(sliderId);
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function startAutoSlide(sliderId) {
    // Очищаем предыдущие интервалы
    if (sliderId === 'slider') {
        if (autoSlideInterval1) {
            clearInterval(autoSlideInterval1);
            autoSlideInterval1 = null;
        }
        
        // Устанавливаем новый интервал только если есть больше одного слайда
        const slides = landingContent.slides;
        if (!slides || slides.length <= 1) return;
        
        autoSlideInterval1 = setInterval(() => {
            // Проверяем существование слайдера перед переключением и что не выполняется перетаскивание
            const slider = document.getElementById(sliderId);
            if (slider && !isDragging) {
                const nextIndex = (currentSlideIndex1 + 1) % slides.length;
                goToSlide(nextIndex, sliderId);
            }
        }, 10000);
    } else if (sliderId === 'slider2') {
        if (autoSlideInterval2) {
            clearInterval(autoSlideInterval2);
            autoSlideInterval2 = null;
        }
        
        // Устанавливаем новый интервал только если есть больше одного слайда
        const slides = landingContent.slides2;
        if (!slides || slides.length <= 1) return;
        
        autoSlideInterval2 = setInterval(() => {
            // Проверяем существование слайдера перед переключением и что не выполняется перетаскивание
            const slider = document.getElementById(sliderId);
            if (slider && !isDragging) {
                const nextIndex = (currentSlideIndex2 + 1) % slides.length;
                goToSlide(nextIndex, sliderId);
            }
        }, 5000);
    }
}

function nextSlide(sliderId) {
    const currentIndex = sliderId === 'slider' ? currentSlideIndex1 : currentSlideIndex2;
    goToSlide(currentIndex + 1, sliderId);
}

function prevSlide(sliderId) {
    const currentIndex = sliderId === 'slider' ? currentSlideIndex1 : currentSlideIndex2;
    goToSlide(currentIndex - 1, sliderId);
}

function goToSlide(index, sliderId) {
    const slides = sliderId === 'slider' ? landingContent.slides : landingContent.slides2;
    
    // Проверка на существование слайдов
    if (!slides || !slides.length) {
        console.error('Нет слайдов для отображения');
        return;
    }
    
    // Обрабатываем случаи выхода за пределы массива слайдов
    let newIndex = (index + slides.length) % slides.length;
    
    // Обновляем текущий индекс в зависимости от типа слайдера
    if (sliderId === 'slider') {
        currentSlideIndex1 = newIndex;
    } else {
        currentSlideIndex2 = newIndex;
    }
    
    // Получаем контейнер слайдера
    const sliderContainer = sliderId === 'slider' ? 
        document.getElementById('sliderContainer') : 
        document.getElementById('sliderContainer2');
        
    const slider = document.getElementById(sliderId);
    
    if (!slider || !sliderContainer) {
        console.error('Не найдены элементы слайдера');
        return;
    }
    
    // Получаем ширину слайдера
    const sliderWidth = slider.getBoundingClientRect().width;
    
    // Устанавливаем переход для плавного скольжения
    sliderContainer.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
    
    // Устанавливаем позицию слайдера с использованием translate3d для аппаратного ускорения
    const position = -newIndex * sliderWidth;
    currentTranslate = position;
    prevTranslate = position;
    
    // Используем requestAnimationFrame для более плавной анимации
    requestAnimationFrame(() => {
        sliderContainer.style.transform = `translate3d(${position}px, 0, 0)`;
    });
    
    // Обновляем слайдер
    updateSlider(sliderId);
    
    // Добавляем обработчик события transitionend для сброса transition после завершения анимации
    sliderContainer.addEventListener('transitionend', function resetTransition() {
        sliderContainer.style.transition = '';
        sliderContainer.removeEventListener('transitionend', resetTransition);
    });
}

function updateSlider(sliderId) {
    const currentIndex = sliderId === 'slider' ? currentSlideIndex1 : currentSlideIndex2;
    
    // Получаем элементы в зависимости от типа слайдера
    const sliderContainer = sliderId === 'slider' ? 
        document.getElementById('sliderContainer') : 
        document.getElementById('sliderContainer2');
        
    const dots = sliderId === 'slider' ? 
        document.querySelectorAll('#sliderNav .slider-dot') : 
        document.querySelectorAll('#sliderNav2 .slider-dot');
        
    const slideTexts = sliderId === 'slider' ? 
        document.querySelectorAll('#slideTexts .slide-text') : 
        document.querySelectorAll('#slideTexts2 .slide-text');
        
    const slider = document.getElementById(sliderId);

    // Проверяем существование основных элементов
    if (!slider || !sliderContainer) {
        console.error(`Slider elements not found for ${sliderId}`);
        console.log('Elements:', {slider, sliderContainer, slideTexts});
        return;
    }

    // Проверяем, что слайдер не в процессе перетаскивания
    if (isDragging) return;
    
    // Получаем точную ширину слайдера (убираем дробные значения)
    const sliderWidth = Math.floor(slider.offsetWidth);
    
    // Вычисляем точную позицию (избегаем дробных чисел)
    const exactPosition = Math.floor(-currentIndex * sliderWidth);
    currentTranslate = exactPosition;
    prevTranslate = exactPosition;
    
    // Устанавливаем позицию слайдера
    sliderContainer.style.transform = `translateX(${exactPosition}px)`;
    
    // Обновляем активные точки навигации, если они существуют
    if (dots && dots.length) {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Отображаем текст активного слайда, если он существует
    if (slideTexts && slideTexts.length) {
        slideTexts.forEach((text, index) => {
            text.style.display = index === currentIndex ? 'block' : 'none';
        });
    }
}

// Добавляем обработчик изменения размера окна для корректного обновления слайдеров
window.addEventListener('resize', function() {
    // Обновляем оба слайдера при изменении размера окна
    if (typeof currentSlideIndex1 !== 'undefined') {
        updateSlider('slider');
    }
    if (typeof currentSlideIndex2 !== 'undefined') {
        updateSlider('slider2');
    }
});

      // Инициализация страницы
        document.addEventListener('DOMContentLoaded', function() {
            // Проверяем, проходил ли пользователь квиз ранее
            if (localStorage.getItem('quizCompleted') === 'true') {
                // Скрываем первый и второй экраны
                document.getElementById('screen1').classList.remove('active');
                document.getElementById('screen2').classList.remove('active');
                // Показываем третий экран с результатами
                document.getElementById('screen3').classList.add('active');
                
                // Заполняем данные на третьем экране
                showResults();
                
                // инициализация блока с комментарием доктора с задержкой
                setTimeout(() => {
                    initDoctorComment();
                }, 500);
                
                return; // Прекращаем выполнение остальной части функции
            }
            
            // Заполняем навигацию
            const navList = document.getElementById('navLinks');
            navLinks.forEach(link => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${link.href}">${link.text}</a>`;
                navList.appendChild(li);
            });

            // Заполняем кнопки хедера
            const headerButtonsContainer = document.getElementById('headerButtons');
            headerButtons.forEach(button => {
                const a = document.createElement('a');
                a.href = button.href;
                a.className = button.class;
                a.textContent = button.text;
                headerButtonsContainer.appendChild(a);
            });

            // Заполняем основной контент
            document.getElementById('mainTitle').textContent = landingContent.title;
            document.getElementById('mainSubtitle').textContent = landingContent.subtitle;
            document.getElementById('startButton').textContent = landingContent.startButtonText;
            document.getElementById('middleButton').textContent = landingContent.middleButtonText;
            document.getElementById('bottomButton').textContent = landingContent.bottomButtonText;

            const landingText = document.getElementById('landingText');
            landingContent.paragraphs.forEach(paragraph => {
                const p = document.createElement('p');
                p.textContent = paragraph;
                landingText.appendChild(p);
            });

            const socialProof = document.getElementById('socialProof');
            landingContent.socialProof.forEach(proof => {
                const li = document.createElement('li');
                li.textContent = proof;
                socialProof.appendChild(li);
            });

            // Заполняем футер
            const footerContentDiv = document.getElementById('footerContent');
            if (footerContentDiv && landingContent.footerText) {
                const footerTextDiv = footerContentDiv.querySelector('.footer-text');
                footerTextDiv.innerHTML = landingContent.footerText.join(' | ');
            }

            // Заполняем текст кнопки заказа
            const orderButton = document.getElementById('orderButton');
            if (orderButton && landingContent.orderButtonText) {
                orderButton.textContent = landingContent.orderButtonText;
            }

            initSliders()

             // Заполняем список преимуществ
            const benefitsList = document.getElementById('landingBenefits');
            benefitsList.querySelector('h3').textContent = landingContent.landingBenefits.title;
            
            const benefitsItems = benefitsList.querySelectorAll('li');
            landingContent.landingBenefits.items.forEach((item, index) => {
                benefitsItems[index].textContent = item;
            });

            initDoctorComment();
        });

        function scrollToForm() {
            const form = document.querySelector('.order-form');
            form.scrollIntoView({ behavior: 'smooth' });
        }

// Функция переключения состояния цитаты доктора
function initToggleQuote() {
    const doctorQuote = document.querySelector('.doctor-quote');
    
    if (doctorQuote) {
        doctorQuote.addEventListener('click', function() {
            // Только переключаем состояние, если цитата не развернута
            if (!this.classList.contains('expanded')) {
                this.classList.add('expanded');
            }
        });
    }
}

// Добавление вызова инициализации в существующую функцию initDoctorComment
function initDoctorComment() {
    try {
        const doctorQuoteElement = document.getElementById('doctorQuote');
        const doctorNameElement = document.getElementById('doctorName');
        const doctorTitleElement = document.getElementById('doctorTitle');
        
        if (!doctorQuoteElement || !doctorNameElement || !doctorTitleElement) {
            console.error('Элементы блока doctorComment не найдены');
            return;
        }
        
        if (!landingContent.doctorComment) {
            console.error('Данные doctorComment отсутствуют в landingContent');
            return;
        }
        
        doctorQuoteElement.textContent = landingContent.doctorComment.quote;
        doctorNameElement.textContent = landingContent.doctorComment.name;
        doctorTitleElement.textContent = landingContent.doctorComment.title;
        
        // Добавляем инициализацию функции переключения состояния
        setTimeout(initToggleQuote, 100);
        
    } catch (error) {
        console.error('Ошибка при инициализации блока doctorComment:', error);
    }
}
