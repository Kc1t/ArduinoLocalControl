const ligarBtn = document.querySelector("#ligar");
const desligarBtn = document.querySelector("#desligar");

ligarBtn.addEventListener("click", function() {
  fetch("/ligar", {
    method: "POST",
    body: "1",
  });
});

desligarBtn.addEventListener("click", function() {
  fetch("/desligar", {
    method: "POST",
    body: "0",
  });
});
