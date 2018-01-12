jQuery(document).ready(function($){

  console.log('homepage');

  function init(){
    windowResized();
  }

  function mobileAccordion() {
    $('.mobile-accordion').on('touch click', function(){

      var $this = $(this);
      var $tourHeight = $(this).find('.featured-tour__day-tour').height();

      if($this.height() === 50) {
        $this.height($tourHeight);
        $this.addClass('mobile-accordion--show');
      }else if($this.height() > 50){
        $this.height(50);
        $this.removeClass('mobile-accordion--show');
      }

    });
  }

  function changeMapClass(className) {
    $('.explore-map__tab-content').attr('data-month', className);
  }

  function homeMap() {
    $('.explore-map__month-link').on('click touch', function (e){
      e.preventDefault();

      var $thisParent = $(this).parent();
      var thisParentId = $thisParent.attr('id');

      if( !$thisParent.hasClass('active') ) {
        $('.explore-map__month').removeClass('active');
        $thisParent.addClass('active');
        changeMapClass(thisParentId);
      }

    });
  }

  function windowResized(){

    if( $(window).width() <= 767) {
      mobileAccordion();
    }

    if( $(window).width() >= 768) {
      homeMap();
    }

  }

  $(window).resize(function(){
    windowResized()
  });

  init();

});
