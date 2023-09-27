document.addEventListener("DOMContentLoaded", function () {
  // SCROLL DO HEADER

  const heroSection = document.querySelector(".hero"); // Armazenando o hero à uma variável para posteriormente pegar sua altura
  const alturaHero = heroSection.clientHeight; // Pegando a altura do hero

  window.addEventListener("scroll", function () {
    // Identificando o scroll do usuário
    const posicaoAtual = window.scrollY; // Identificando a posição da barra de rolagem

    if (posicaoAtual < alturaHero) {
      ocultaHeader();
    } else {
      exibeHeader();
    }
  });

  function ocultaHeader() {
    const header = document.querySelector("header");
    header.classList.add("header--is-hidden");
  }

  function exibeHeader() {
    const header = document.querySelector("header");
    header.classList.remove("header--is-hidden");
  }

  // SEÇÃO DE ATRAÇÕES (ABAS)

  const buttons = document.querySelectorAll("[data-tab-button]"); // Pegando todos os botões que possuem a propriedade data-tab-button

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (btn) {
      const targetTab = btn.target.dataset.tabButton; // Acessando o valor da propriedade data-tab-button, a depender do botão que foi clicado (em_breve, populares e star_plus)
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`); // Pegando o elemento que tem o valor da propriedade data-tab-id igual ao valor pego acima, o qual foi obtido ao clicar em determinada aba

      hideAllTabs(); // Removendo a visibilidade dos itens da lista

      tab.classList.add("shows__list--is-active"); // Deixando visível somente a lista da aba que foi clicada

      removeActive();

      btn.target.classList.add("shows__tabs__button--is-active");
    });
  }

  function removeActive() {
    const buttons = document.querySelectorAll("[data-tab-button]");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("shows__tabs__button--is-active");
    }
  }

  function hideAllTabs() {
    const tabs = document.querySelectorAll("[data-tab-id]");

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("shows__list--is-active");
    }
  }

  // SEÇÃO DE PERGUNTAS FREQUENTES (ACCORDION)

  const questions = document.querySelectorAll("[data-faq-question]"); // Pegando todas as divs de pergunta que possuem a propriedade data-tab-button

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", abreOuFechaResposta); // Ao clicar na pergunta, a função de abrir ou fechar a resposta é chamada. A função tem como retorno a própria div de pergunta, mas precisamos encontrar o elemento pai (li), pois é nele que o modificador --is-open será aplicado
  }
});

function abreOuFechaResposta(elemento) {
  const classe = "faq__questions__item--is-open";
  const elementoPai = elemento.target.parentNode; // Ao clicar na pergunta, a função de abrir ou fechar a resposta é chamada. A função tem como retorno a própria div de pergunta, mas precisamos encontrar o elemento pai (li), pois é nele que o modificador --is-open será aplicado

  elementoPai.classList.toggle(classe);
}
