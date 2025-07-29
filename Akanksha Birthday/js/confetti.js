document.addEventListener("DOMContentLoaded", function () {
  function createConfettiPiece() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }

  // Trigger confetti on scroll
  window.addEventListener("scroll", () => {
    for (let i = 0; i < 10; i++) {
      createConfettiPiece();
    }
  });
});