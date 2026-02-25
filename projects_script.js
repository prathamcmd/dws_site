const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    // active button style
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach(card => {

      if(filter === "all"){
        card.classList.remove("hide");
      }
      else if(card.classList.contains(filter)){
        card.classList.remove("hide");
      }
      else{
        card.classList.add("hide");
      }

    });

  });

});

const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    // active button style
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {

      if(filter === "all"){
        card.style.display = "block";
      }
      else if(card.classList.contains(filter)){
        card.style.display = "block";
      }
      else{
        card.style.display = "none";
      }

    });

  });

});