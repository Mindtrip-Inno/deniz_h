document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card-asd");
    if (card) {
      card.style.opacity = "0";
      card.style.transform = "translateY(100px)";
      card.style.transition = "all 0.5s ease-out";
  
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100); 
    }
  });
  