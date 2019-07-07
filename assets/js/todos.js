// Check off specific todos by clicking
$('li').click(function(){
  $(this).toggleClass('completed');
});

// Click on X to delete Todo
$('span').click(function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  // jQuery Method to stop Event Bubbling
  e.stopPropagation();
});