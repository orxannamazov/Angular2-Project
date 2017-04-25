// Toggle Function
$('.toggle').click(function() {
  $('form').animate({
    height: 'toggle',
    opacity: "toggle"
  }, "slow");
});