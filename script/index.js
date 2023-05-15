const github = document.querySelector(".fa-github");
const instagram = document.querySelector(".fa-square-instagram");
const twitter = document.querySelector(".fa-twitter");

github.addEventListener("click", () => {
  let a = document.createElement("a");
  a.href = "https://github.com/rizkiismail9a";
  a.click();
});
instagram.addEventListener("click", () => {
  let a = document.createElement("a");
  a.href = "https://instagram.com/senimentari_";
  a.click();
});
twitter.addEventListener("click", () => {
  let a = document.createElement("a");
  a.href = "https://twitter.com/senimentari_";
  a.click();
});
