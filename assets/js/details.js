const stars = document.querySelectorAll('input[name="rating"] + svg');

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s) =>
      s.classList.replace("text-yellow-400", "text-gray-300")
    );

    for (let i = 0; i <= index; i++) {
      stars[i].classList.replace("text-gray-300", "text-yellow-400");
    }
  });
});
// Quantity Drop Down
const selectElement = document.getElementById("quantity");
const maxQuantity = 30;
for (let i = 1; i <= maxQuantity; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  option.classList.add("quantity-option");
  selectElement.appendChild(option);
}

selectElement.addEventListener("change", (event) => {
  console.log(`Quantity selected: ${event.target.value}`);
});
