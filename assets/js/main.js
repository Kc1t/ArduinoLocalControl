const ligarBtn = document.querySelector("#ligar"), 
desligarBtn = document.querySelector("#desligar"),
statusBtn = document.querySelector("#circle");

ligarBtn.addEventListener("click", function() {

  setTimeout(function() {

  fetch("/ligar", {
    method: "POST",
    body: "1",
  });
  
  statusBtn.style.background = "#F32C38";
  statusBtn.style.boxShadow = "0px 0px 10px #F32C38";

  }, 900);

});

desligarBtn.addEventListener("click", function() {
  fetch("/desligar", {
    method: "POST",
    body: "0",
  });

  statusBtn.style.background = "#26313F";
  statusBtn.style.boxShadow = "0px 0px 10px #26313F";
});
