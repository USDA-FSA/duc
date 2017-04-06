// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality.
// None of this is production-quality. Sorry, not sorry.

$('body').on('click', '[data-behavior~="popover-dismiss"]', function(event) {
  var $self = $(this);
  var $component = $self.closest('.dut-popover');
  $component.removeClass('dut-popover--visible');
})

$('body').on('click', '[data-behavior~="toggle-popover"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.fsa-field');
  var $target = $('#' + $self.attr('data-target'));
  var $targetPeers = $('.dut-popover');

  if ($target.hasClass('dut-popover--visible')) {
    $targetPeers.removeClass('dut-popover--visible');
    $target.removeClass('dut-popover--visible');
  } else {
    $targetPeers.removeClass('dut-popover--visible');
    $target.addClass('dut-popover--visible');
  }

})
