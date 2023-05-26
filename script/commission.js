const listComs = document.getElementById("artServices");
const dropDownMenu = document.getElementById("menuArt");
let nilaiMuncul = true;
dropDownMenu.addEventListener("click", () => {
  dropDownMenu.classList.toggle("menuArt");
  if (nilaiMuncul) {
    listComs.style.display = "block";

    nilaiMuncul = false;
  } else {
    listComs.style.display = "none";
    nilaiMuncul = true;
  }
});
