window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'); // Ajoute une balise <form> si nécessaire
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
  
    form.addEventListener('submit', function (e) {
      const email = emailInput.value.trim();
      const password = passwordInput.value;
  
      // Vérifie si l'e-mail a au moins 6 caractères
      if (email.length < 6) {
        alert("L'adresse e-mail doit avoir au moins 6 caractères.");
        e.preventDefault();
        return;
      }
  
      // Vérifie la force du mot de passe
      const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  
      if (!strongPasswordRegex.test(password)) {
        alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.");
        e.preventDefault();
      }
    });
  });
  