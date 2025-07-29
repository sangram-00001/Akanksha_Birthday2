// Basic fireworks using canvas
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function startFireworks(e) {
  const x = e.clientX;
  const y = e.clientY;
  for (let i = 0; i < 50; i++) {
    particles.push({
      x, y,
      dx: (Math.random() - 0.5) * 8,
      dy: (Math.random() - 0.5) * 8,
      life: 100,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
  }
}

function animate() {
  ctx.fillStyle = "rgba(10, 26, 47, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.dx;
    p.y += p.dy;
    p.life--;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    if (p.life <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}
animate();