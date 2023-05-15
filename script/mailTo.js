const btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const topics = document.getElementById("topics").value;
  const message = document.getElementById("message").value;
  if (name == "") {
    alert("Please, fill all the blank(s)");
  } else if (topics == "") {
    alert("Please, fill all the blank(s)");
  } else if (message == "") {
    alert("Please, fill all the blank(s)");
  } else {
    const email = "muhamadrizkiismail9a@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto:${email}?cc=laksmimentari@gmail.com&subject=${topics}&body=${message}.`;
    a.click();
  }
});
