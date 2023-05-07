function clicou() {
    console.log("Clicou");
}

let botao = document.querySelector(".btn");

botao.addEventListener("click", () => {
    clicou();
});
