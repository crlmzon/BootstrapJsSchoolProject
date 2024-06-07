document.addEventListener('DOMContentLoaded', function() {
    // Form Validation
    const quizForm = document.getElementById('quizForm');
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateContactForm();
        });
    }

    function validateContactForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Správa úspešne odoslaná!');
            // Zmena obsahu HTML
            document.getElementById('contactForm').innerHTML = '<p>Ďakujeme za vašu správu.</p>';
            document.getElementById('contactForm').style.backgroundColor = '#006400';
        } else {
            alert('Prosím vyplňte všetky polia.');
            document.getElementById('contactForm').style.backgroundColor = '#8B0000';
        }
    }
});
const correctAnswers = {
    question1: 'b',
    question2: "áno",
    question3: ['f']
};

function submitQuiz() {
    const feedback = document.getElementById('feedback');
    let correctCount = 0;
    let feedbackHtml = '';

    const form = document.getElementById('quizForm');
    const formData = new FormData(form);

    // Otázka 1
    const answer1 = formData.get('question1');
    if (answer1 === correctAnswers.question1) {
        correctCount++;
        feedbackHtml += '<p class="correct">1. správne</p>';
    } else {
        feedbackHtml += '<p class="incorrect">1. Nesprávne. Správna odpoveď je "Hlavný účel Bootstrap mriežky je responzívnosť stránky a rozdelenie stránky do menších kontajnerov.".</p>';
    }

    // Otázka 2
    const answer2 = formData.get('question2').trim().toLowerCase();
    if (answer2 === correctAnswers.question2) {
        correctCount++;
        feedbackHtml += '<p class="correct">2. správne</p>';
    } else {
        feedbackHtml += '<p class="incorrect">2. Nesprávne. Správna odpoveď je áno.</p>';
    }

    // Otázka 3
    const answer3 = formData.getAll('question3');
    if (JSON.stringify(answer3.sort()) === JSON.stringify(correctAnswers.question3.sort())) {
        correctCount++;
        feedbackHtml += '<p class="correct">3. správne</p>';
    } else {
        feedbackHtml += '<p class="incorrect">3. Nesprávne. Správna odpoveď je 6.</p>';
    }

    feedback.innerHTML = feedbackHtml;
    document.getElementById('quizForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}