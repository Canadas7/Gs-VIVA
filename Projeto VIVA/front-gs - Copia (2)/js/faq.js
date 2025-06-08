document.addEventListener("DOMContentLoaded", function () {
    const perguntas = document.querySelectorAll(".faq-pergunta");

    perguntas.forEach(function (pergunta) {
      pergunta.addEventListener("click", function () {
        const resposta = this.nextElementSibling;

      
        document.querySelectorAll(".faq-resposta").forEach(function (res) {
          if (res !== resposta) {
            res.style.display = "none";
            res.previousElementSibling.classList.remove("ativo");
          }
        });
        const estaAberta = resposta.style.display === "block";
        resposta.style.display = estaAberta ? "none" : "block";
        this.classList.toggle("ativo", !estaAberta);
      });
    });
  });


  