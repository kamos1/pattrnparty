$('#nav').on('click', 'li > button', function() {
  if (!$(this).hasClass('active')) {
    $('#nav .is-open').removeClass('is-open').hide();
    $(this).next().toggleClass('is-open').toggle();
    $('#nav').find('.active').removeClass('active');
    $(this).addClass('active');
  } else {
    $('#nav .is-open').removeClass('is-open').hide();
    $(this).removeClass('active');
  }
});


$('.header-btn').on('click', () => {
  $('.nav-link').toggle();
  $('input').toggle();
})
