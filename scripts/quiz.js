       
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
                        <button class="back-btn" onclick="handleBack()">Назад</button>
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

    // Инициализируем второй слайдер
    initSlider('slider2', 'sliderContainer2', 'sliderNav2', 'slideTexts2', landingContent.slides2);

    // Инициализируем FAQ
    initFAQ();
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
    
    sliderContainer.innerHTML = '';
    sliderNav.innerHTML = '';
    slideTexts.innerHTML = '';
    
    slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide';
        slideDiv.innerHTML = `
            <img src="${slide.img}" alt="Слайд ${index + 1}" loading="lazy">
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

    // Touch events
    sliderContainer.addEventListener('touchstart', e => touchStart(e, sliderId));
    sliderContainer.addEventListener('touchmove', e => touchMove(e, sliderId));
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
    
    const currentPosition = getPositionX(event);
    const diff = currentPosition - startPos;
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    
    const sliderWidth = slider.offsetWidth;
    const slides = sliderId === 'slider' ? landingContent.slides : landingContent.slides2;
    
    currentTranslate = prevTranslate + diff;
    
    if (currentTranslate > 0) {
        currentTranslate = currentTranslate / 3;
    } else if (currentTranslate < -(slides.length - 1) * sliderWidth) {
        const overScroll = currentTranslate + (slides.length - 1) * sliderWidth;
        currentTranslate = -(slides.length - 1) * sliderWidth + overScroll / 3;
    }
    
    setSliderPosition(currentTranslate, sliderId);
}

function setSliderPosition(position, sliderId) {
    const sliderContainer = sliderId === 'slider' ? 
        document.getElementById(`${sliderId}Container`) : 
        document.getElementById('sliderContainer2');
    
    if (!sliderContainer) return;
    
    sliderContainer.style.transform = `translateX(${position}px)`;
}

function touchEnd(event, sliderId) {
    isDragging = false;
    const slider = document.getElementById(sliderId);
    const sliderWidth = slider.offsetWidth;
    const movedBy = currentTranslate - prevTranslate;
    const slides = sliderId === 'slider' ? landingContent.slides : landingContent.slides2;
    const currentIndex = sliderId === 'slider' ? currentSlideIndex1 : currentSlideIndex2;
    
    if (Math.abs(movedBy) > sliderWidth / 3) {
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
    
    goToSlide(sliderId === 'slider' ? currentSlideIndex1 : currentSlideIndex2, sliderId);
    startAutoSlide(sliderId);
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function startAutoSlide(sliderId) {
    if (sliderId === 'slider') {
        if (autoSlideInterval1) {
            clearInterval(autoSlideInterval1);
        }
        autoSlideInterval1 = setInterval(() => {
            nextSlide(sliderId);
        }, 10000);
    } else {
        if (autoSlideInterval2) {
            clearInterval(autoSlideInterval2);
        }
        autoSlideInterval2 = setInterval(() => {
            nextSlide(sliderId);
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
    if (sliderId === 'slider') {
        currentSlideIndex1 = (index + slides.length) % slides.length;
    } else {
        currentSlideIndex2 = (index + slides.length) % slides.length;
    }
    updateSlider(sliderId);
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

    // Проверяем существование элементов
    if (!slider || !sliderContainer || !slideTexts.length) {
        console.error(`Slider elements not found for ${sliderId}`);
        console.log('Elements:', {slider, sliderContainer, slideTexts});
        return;
    }

    const sliderWidth = slider.offsetWidth;
    
    currentTranslate = -currentIndex * sliderWidth;
    prevTranslate = currentTranslate;
    
    sliderContainer.style.transition = 'transform 0.5s ease-in-out';
    sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    
    slideTexts.forEach((text, index) => {
        text.style.display = index === currentIndex ? 'block' : 'none';
    });
}

        // Инициализация страницы
        document.addEventListener('DOMContentLoaded', function() {
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

function initDoctorComment() {
    document.getElementById('doctorQuote').textContent = landingContent.doctorComment.quote;
    document.getElementById('doctorName').textContent = landingContent.doctorComment.name;
    document.getElementById('doctorTitle').textContent = landingContent.doctorComment.title;
}
