document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const productCards = document.querySelectorAll(".product-card");

  // Filter products based on search text and category
  function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    productCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const category = card.getAttribute("data-category");

      const matchesSearch = title.includes(searchValue);
      const matchesCategory = selectedCategory === "all" || category === selectedCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterProducts);
  categoryFilter.addEventListener("change", filterProducts);
});
