// Toggle video section
function toggleVideos() {
  const section = document.getElementById("videoSection");
  if (section.style.display === "flex") {
    section.style.display = "none";
  } else {
    section.style.display = "flex";
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Generate floating hearts
function createHearts() {
  const container = document.querySelector('.hearts-container');
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.background = `hsl(${Math.random() * 360}, 100%, 80%)`;
    container.appendChild(heart);
  }
}

window.onload = createHearts;
