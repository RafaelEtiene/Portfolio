document.addEventListener('DOMContentLoaded', function() {
  var currentPage = window.location.pathname; // Obtém o caminho da página atual
  var links = document.querySelectorAll('#nav-items a');

  // Itera sobre os links
  links.forEach(function(link) {
    // Verifica se a URL da página atual termina com o atributo href do link
    if (currentPage.endsWith(link.getAttribute('href'))) {
      link.classList.add('active'); // Adiciona a classe 'active' ao link correspondente
    }
  });
});