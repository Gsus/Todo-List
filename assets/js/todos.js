// Check off specific todos by clicking
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

// Click on X to delete Todo
$('ul').on('click', 'span', function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  // jQuery Method to stop Event Bubbling
  e.stopPropagation();
});

// Add Todos
$("input[type='text']").on('keypress', function(e){
  if (e.which === 13) {    
    // Grab text
    let todoText = $(this).val();
    // Reset input
    $(this).val("");
    // Add to ul
    $('ul').append(`<li><span><i class="fas fa-trash"></i></span>${todoText}</li>`);
  }
});

$(".fa-plus").on('click', function(){
  // Fade in and out, and in case of fading in, focus as well.
  $("input[type='text']").fadeToggle(function(){
    $("input[type='text']").focus();
  });
});