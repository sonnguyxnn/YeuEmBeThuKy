function checkPassword() {
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  const correctPassword = 'yeuembethuky';

  if (password === correctPassword) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    initiateAnimations();
  } else {
    errorMessage.textContent = 'Incorrect password. Please try again.';
  }
}

function initiateAnimations() {
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll('.fade-in, .slide-up');
  elements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initiateAnimations();

  const passwordInput = document.getElementById('password');
  passwordInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      checkPassword();
    }
  });
});

function initiateAnimations1() {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll('.timeline-item, .slide-up');
  elements.forEach(el => observer.observe(el));
}

function triggerConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

let confettiTriggered = false;
window.addEventListener('scroll', () => {
  if (!confettiTriggered) {
    triggerConfetti();
    confettiTriggered = true;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  initiateAnimations1();
});

function submitQuiz() {
  const correctAnswers = {
    q1: 'Black',
    q2: 'Despicable Me 4',
    q3: 'Bun Bo Hue',
    q4: 'Tokyo',
    q5: '9Gaming'
  };

  const userAnswers = {
    q1: document.querySelector('input[name="q1"]:checked') ? document.querySelector('input[name="q1"]:checked').value : '',
    q2: document.querySelector('input[name="q2"]:checked') ? document.querySelector('input[name="q2"]:checked').value : '',
    q3: document.querySelector('input[name="q3"]:checked') ? document.querySelector('input[name="q3"]:checked').value : '',
    q4: document.querySelector('input[name="q4"]:checked') ? document.querySelector('input[name="q4"]:checked').value : '',
    q5: document.querySelector('input[name="q5"]:checked') ? document.querySelector('input[name="q5"]:checked').value : ''
  };

  let score = 0;
  for (const question in correctAnswers) {
    if (userAnswers[question] === correctAnswers[question]) {
      score++;
    }
  }

  const resultElement = document.getElementById( 'quiz-result' );
  
  if ( score === 5 ) {
    resultElement.textContent = `Babe, You got ${ score } out of 5 questions correct! 🎉 Turns out you understand me more than I'd think hehee`
  } else if ( score >= 3 ) {
    resultElement.textContent = `Babe, You got ${ score } out of 5 questions correct! 🎉 Not bad, you know me quite well ^^`
  } else {
    resultElement.textContent = `Babe, You got ${ score } out of 5 questions correct! 😅 It's okay, I still love you ==`
  } 
}

function updateCountdown(targetDate, countdownId) {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance >= 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(`days-${countdownId}`).textContent = days;
    document.getElementById(`hours-${countdownId}`).textContent = hours;
    document.getElementById(`minutes-${countdownId}`).textContent = minutes;
    document.getElementById(`seconds-${countdownId}`).textContent = seconds;
  } else {
    document.getElementById(`countdown-${countdownId}`).textContent = "The time has come!";
  }
}

const vietnamDate = new Date('December 15, 2024 00:00:00').getTime();
const birthdayDate = new Date('November 9, 2024 00:00:00').getTime();

setInterval(() => {
  updateCountdown(vietnamDate, 'vn');
  updateCountdown(birthdayDate, 'bd');
}, 1000);

document.getElementById('scroll-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.getElementById('trigger-confetti').addEventListener('click', function() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
});
