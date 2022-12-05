$(document).ready(function () {
  // scroll suave
  $(".header-menu a[href^='#']").click(function (e) {
    e.preventDefault(); //desabilita o direcionamento para link
    const id = $(this).attr("href"); //pega o href do item clicado
    const target = $(id).offset().top; //pega a distância do scroll até o topo do html do elemento selecionado

    $("html, body").animate(
      {
        scrollTop: target,
      },
      500
    );
  });

  // escolha do item da UEP
  $(".uep-item").click(function (e) {
    e.preventDefault();

    const textosItens = $(".uep-descricao"); //recupera todas as divs com descrição das ueps
    const itemId = $(this).attr("href"); // recupera apenas o item clicado

    $(textosItens).addClass("none"); //remove da tela todas os textos
    $(itemId).removeClass("none"); //coloca na tela apenas o texto do item clicado
  });

  // menu mobile
  $(".mobile-menu-icon").click(function () {
    $(".mobile-menu").toggle("none"); //adicion/remove a classe none do menu mobile
  });
});
