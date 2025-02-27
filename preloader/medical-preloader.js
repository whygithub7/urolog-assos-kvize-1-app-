// Функция для показа прелоадера
function showMedicalPreloader() {
    const preloader = document.getElementById('medical-preloader');
    preloader.classList.remove('hidden');
    
    const stages = preloader.querySelectorAll('.stage');
    
    // Первая стадия
    stages[0].classList.add('active');
    
    // Вторая стадия
    setTimeout(() => {
        stages[0].classList.remove('active');
        stages[0].classList.add('completed');
        stages[1].classList.add('active');
    }, 1000);
    
    // Третья стадия
    setTimeout(() => {
        stages[1].classList.remove('active');
        stages[1].classList.add('completed');
        stages[2].classList.add('active');
    }, 2000);
    
    // Завершение
    setTimeout(() => {
        stages[2].classList.remove('active');
        stages[2].classList.add('completed');
    }, 3000);
    
    // Скрываем прелоадер
    setTimeout(() => {
        hideMedicalPreloader();
    }, 4000);
}

// Функция для скрытия прелоадера
function hideMedicalPreloader() {
    const preloader = document.getElementById('medical-preloader');
    preloader.classList.add('hidden');
}

// Убрано автоматическое включение прелоадера при загрузке страницы
// Теперь прелоадер будет вызываться только между экранами 2 и 3

