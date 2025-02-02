document.addEventListener('DOMContentLoaded', function() {
    const fadeInText = document.querySelector('.fade-in-text');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fadeInText.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    observer.observe(fadeInText);

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');


    if (quizForm) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const selectedOption = document.querySelector('input[name="quiz"]:checked');

            if (selectedOption) {
                const answer = selectedOption.value;
                let message = '';
                if (answer === 'pollution') {
                    message = 'Верно! Загрязнение пластиком - одна из самых больших угроз для океана.';
                } else if (answer === 'overfishing') {
                    message = 'Чрезмерный вылов рыбы также является серьезной проблемой для океана.';
                } else if (answer === 'climate') {
                    message = 'Изменения климата серьезно влияют на океаны и экосистему.';
                }
                 resultDiv.textContent = message;
             } else {
                resultDiv.textContent = 'Пожалуйста, выберите вариант ответа.';
            }
        });
    }
});

function handleVideoError(video) {
    const errorDiv = video.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('video-error')) {
        errorDiv.style.display = 'block';
        video.style.display = 'none';
    }
}