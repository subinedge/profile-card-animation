(function() {
  $('.btn').click(function() {
    $(this).toggleClass('active');

// active class is for animating hamuburger icon on click and transforming it to left arrow
    return $('.box').toggleClass('open')
  });
}).call(this);