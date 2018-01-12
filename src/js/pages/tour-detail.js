jQuery(document).ready(function($){

  if($(window).width() >= 992) {

    $('.booking-form__date-picker').datepicker({
      toggleActive: false,
      multidate: true
    });

    $('.booking-form__add-guest').on('click touch', function(e){
      e.preventDefault();
      $('.booking-form__guest--1').removeClass('hidden');
      $(this).parent().addClass('hidden');
    });

  }

  function optionalExtras() {

    var rightColMarkUp = '';

    $('.tour-detail__opt-ext:checked').each(function(){

      var thisLabel = $(this).data('opt-label');
      var thisPrice = $(this).data('opt-price');
      var thisName = $(this).attr('name');

      rightColMarkUp += '<li class="booking-form__optional-extra-item">';
      rightColMarkUp += '<input type="hidden" class="hidden" name="optional-extra" value="' + thisLabel + '" />';
      rightColMarkUp += thisLabel + ' <strong>$' + thisPrice + '</strong>';
      rightColMarkUp += '<a href="#" data-close-target="'+ thisName +'"  class="booking-form__opt-close-btn">x</a>';
      rightColMarkUp += '</li>';

    });

    if(rightColMarkUp!='') {
      $('.booking-form__optional-extras').removeClass('hidden');
      $('.booking-form__optional-extra-list').html(rightColMarkUp);
      setCloseButtons();
    }else {
      $('.booking-form__optional-extras').addClass('hidden');
      $('.booking-form__optional-extra-list').html('');
    }
  }

  function setCloseButtons() {
    $('.booking-form__opt-close-btn').on('touch click', function(e){
      e.preventDefault();

      var thisTarget = $(this).data('close-target');

      $('.tour-detail__opt-ext:checked').each(function(){

        $thisName = $(this).attr('name');
        if($thisName === thisTarget) {
          $(this).prop('checked', false);
        }

        optionalExtras();

      });

    });
  }

  $('.tour-detail__opt-ext').on( 'click touch', optionalExtras );

  $('.information__btn').on('touch click', function(){

    var $this = $(this);

    $('.information__btn').removeClass('active');
    $this.addClass('active');

  });

  $('.tour-detail__nav-tab-link').on('touch click', function(){

    $('.tour-detail__nav-tab').removeClass('active');
    $('.tour-detail__accordion .collapse').removeClass('in');
    $(this).parent().addClass('active');

  });

});
