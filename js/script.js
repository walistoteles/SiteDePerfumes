$(document).ready(function() {
    // Configurações iniciais
    const config = {
      items: $('.bb-item'),
      current: 0,
      totalItems: $('.bb-item').length,
      isAnimating: false,
      animationSpeed: 400
    };
  
    // Mostra o primeiro item
    showItem(config.current);
  
    // Atualiza contador de páginas
    function updateCounter() {
      $('.page-counter').text(`${config.current + 1} / ${config.totalItems}`);
    }
  
    // Mostra um item específico
    function showItem(index) {
      if (config.isAnimating || index < 0 || index >= config.totalItems) return;
      
      config.isAnimating = true;
      
      // Fade out no item atual
      config.items.eq(config.current).fadeOut(config.animationSpeed, function() {
        // Fade in no novo item
        config.items.eq(index).fadeIn(config.animationSpeed, function() {
          config.current = index;
          config.isAnimating = false;
          updateCounter();
        });
      });
    }
  
    // Navegação
    $('#bb-nav-next').on('click', function() {
      if (config.current < config.totalItems - 1) {
        showItem(config.current + 1);
      }
    });
  
    $('#bb-nav-prev').on('click', function() {
      if (config.current > 0) {
        showItem(config.current - 1);
      }
    });
  
    // Navegação por teclado
    $(document).keydown(function(e) {
      if (e.keyCode === 37) { // Seta esquerda
        $('#bb-nav-prev').click();
      } else if (e.keyCode === 39) { // Seta direita
        $('#bb-nav-next').click();
      }
    });
  
    // Efeito hover nos botões
    $('button').hover(
      function() {
        $(this).css('transform', 'translateY(-2px)');
      },
      function() {
        $(this).css('transform', 'translateY(0)');
      }
    );
  });