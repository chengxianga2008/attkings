$(document).ready( function() {

  $('.form__counter-subtract').on('touch click', function(e){

    e.preventDefault();

    var thisInput = $(this).parent().find('.form__counter');
    var thisInputVal = thisInput.val();

    if(thisInputVal >= 1) {
      thisInput.val(thisInputVal - 1);
    }


  });


  $('.form__counter-add').on('touch click', function(e){

    e.preventDefault();

    var thisInput = $(this).parent().find('.form__counter');
    var thisInputValPlusOne = thisInput.val();

    thisInput.val(++thisInputValPlusOne);



  });

  // bootstrap generic carousel
  // https://getbootstrap.com/docs/3.3/javascript/#carousel
  $('.carousel').each(function(){

    // console.log($(this));

    $(this).carousel({
      interval: 100000
    });

  });

  $('.header__top-link--user').on('click touch', function(e) {
    e.preventDefault();
    toggleTopUser();
    console.log('working');
  });

  function toggleTopUser(){
    var ddHeight = $('.header__top-dropdown--manage').height();
    $('.header').toggleClass('menu-visible-false menu-visible-true');
    $('.global-mobile').toggleClass('login-form-visible-true login-form-visible-false');
    if( ddHeight != 0 ){
      $('.header__top-dropdown--manage').height(0);
    }
  }

  function toggleTopManage(){
    var ddListHeight = $('.header__top-dropdown--manage .sub-menu__list').height();
    ddHeight = $('.header__top-dropdown--manage').height();

    if(ddHeight === 0){
      $('.header__top-dropdown--manage').height(ddListHeight);
      if($('.header').hasClass('menu-visible-true')){
        $('.header').removeClass('menu-visible-true').addClass('menu-visible-false');
        $('.global-mobile').removeClass('login-form-visible-true').addClass('login-form-visible-false');
      }
    }else {
      $('.header__top-dropdown--manage').height(0);
    }

  }

  $('.menu-toggle').on('click touch', function (e) {
    e.preventDefault();

    $('.header').toggleClass('menu-visible-false menu-visible-true').removeClass('search-visible-true').addClass('search-visible-false');

  });

  $('.global-mobile__login--toggle').on('click touch', function (e) {
    e.preventDefault();

    $('.global-mobile').toggleClass('login-form-visible-true login-form-visible-false');
  });

  $('.search-toggle').on('click touch', function (e) {
    e.preventDefault();

    $('.header').toggleClass('search-visible-false search-visible-true').removeClass('menu-visible-true').addClass('menu-visible-false');
  });

  var searchData = [
    {
      id : 1,
      text : 'Great Barrier Reef & Queensland',
    },
    {
      id : 2,
      text : 'Melbourne & Victoria',
    },
    {
      id : 3,
      text : 'The Top End, Northem Territory',
    },
    {
      id : 4,
      text : 'Sydney & New South Wales',
    },
    {
      id : 5,
      text : 'Perth & Western Australia',
    },
    {
      id : 6,
      text : 'The Red Centre, Northern Territory',
    },
    {
      id : 7,
      text : 'Adelaide & South Australia',
    },
    {
      id : 8,
      text : 'Hobart & Tasmania',
    },
    {
      id : 9,
      text : 'New Zealand',
    }
  ];

  $('.global-search__input').select2({
    data: searchData,
    width: '100%',
    placeholder: '<i class="fa fa-map-marker" aria-hidden="true"></i> Where to?',
    escapeMarkup : function(markup) {
        return markup;
    }
  });

  $('.global-search__date-picker').datepicker({
    toggleActive: true,
    multidate: true
  });

  $('.global-search__date-picker').on('change', function() {
    $('.global-search__date-input').datepicker('getFormattedDate');
  });

  $('.header__top-link--manage').on('click touch',function(){
    toggleTopManage();
  });

});
