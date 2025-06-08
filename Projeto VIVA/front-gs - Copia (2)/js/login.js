window.onload = function () {
  document.getElementById("botaojs").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value.trim();
    
    if (email === "" || senha === "") {
      alert("Por favor, preencha todos os campos.");
    } else {
      window.location.href = "home.html";
    }
  });
};