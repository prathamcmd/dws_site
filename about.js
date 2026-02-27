const filterBtns = document.querySelectorAll(".filter-btn");
const toggleBtns = document.querySelectorAll(".toggle-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

let currentFilter = "all";
let currentType = "photo";

function filterGallery() {
  galleryItems.forEach(item => {
    const matchesFilter =
      currentFilter === "all" || item.classList.contains(currentFilter);

    const matchesType = item.classList.contains(currentType);

    if (matchesFilter && matchesType) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    filterGallery();
  });
});

toggleBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    toggleBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentType = btn.dataset.type;
    filterGallery();
  });
});

filterGallery();