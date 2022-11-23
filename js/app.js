// scroll suave
$(".header-menu a[href^='#']").click(function (e) {
  e.preventDefault(); //desabilita o direcionamento para link
  const id = $(this).attr("href"); //pega o href do item clicado
  const target = $(id).offset().top; //pega a distância do scroll até o topo do html do elemento selecionado

  console.log(target);

  $("html, body").animate(
    {
      scrollTop: target,
    },
    500
  );
});
