document.addEventListener("DOMContentLoaded", () => {
  const runaOverlay = document.querySelector(".runa-overlay");
  const runas = [
    "ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ",
    "ᛃ", "ᛇ", "ᛈ", "ᛉ", "ᛋ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛟ", "ᛞ"
  ];

  const runasElements = [];

  for (let i = 0; i < 400; i++) {
    const span = document.createElement("span");
    span.classList.add("runa");
    span.innerText = runas[Math.floor(Math.random() * runas.length)];
    span.style.left = `${Math.random() * 100}%`;
    span.style.top = `${Math.random() * 300}%`;
    span.style.animationDelay = `${Math.random() * 5}s`;
    runaOverlay.appendChild(span);
    runasElements.push(span);
  }

  // Movimiento suave de runas cada 10 segundos
  setInterval(() => {
    runasElements.forEach(span => {
      const newLeft = `${Math.random() * 100}%`;
      const newTop = `${Math.random() * 300}%`;
      span.style.left = newLeft;
      span.style.top = newTop;
    });
  }, 10000);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { root: null, threshold: 0.05 }
  );

  runasElements.forEach(r => observer.observe(r));
});
