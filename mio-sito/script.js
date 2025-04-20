document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("prenotazione");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const data = document.getElementById("data").value;
      const ora = document.getElementById("ora").value;
      const persone = document.getElementById("persone").value;

      const conferma = document.getElementById("conferma");

      // Messaggio personalizzato
      conferma.textContent = `Grazie ${nome}, la tua prenotazione per ${persone} persone il ${data} alle ${ora} è stata ricevuta!`;

      // Resetta il modulo
      form.reset();
    });
  }
});

