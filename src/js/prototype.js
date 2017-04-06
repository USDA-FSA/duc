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
  var $component = $self.closest('.pcp-popover');
  $component.removeClass('pcp-popover--visible');
})

$('body').on('click', '[data-behavior~="toggle-popover"]', function(event) {

  var $self = $(this);
  var $component = $self.closest('.fsa-field');
  var $target = $('#' + $self.attr('data-target'));
  var $targetPeers = $('.pcp-popover');

  if ($target.hasClass('pcp-popover--visible')) {
    $targetPeers.removeClass('pcp-popover--visible');
    $target.removeClass('pcp-popover--visible');
  } else {
    $targetPeers.removeClass('pcp-popover--visible');
    $target.addClass('pcp-popover--visible');
  }

})
