const button = document.querySelector("button");
const moreText = document.getElementById("MoreText");
const cards = document.querySelectorAll(".card");
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
});
button.addEventListener("click", () => {
    if (moreText.style.display === "block") {
        moreText.style.display = "none";
        button.textContent = "Learn More";
    } else {
        moreText.style.display = "block";
        button.textContent = "Hide";
    }
});
AOS.init({
  duration: 800, // مدة الحركة
  once: true     // تظهر مرة واحدة فقط
});

