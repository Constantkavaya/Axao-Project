(function(){
 
    $("#cart").on("click", function() {
      $(".shopping-cart").fadeToggle( "fast");
    });
    
  })();

  const btn = document.querySelector(".btn-toggle");

  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
  });
  

  $('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
 });

 
 $('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
 });

 $('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value &amp,amp,gt , 1) {
        value = value - 1;
    } 
    else {
        value = 0;
    }
 
  $input.val(value);
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value &amp,amp,lt, 100) {
        value = value + 1;
    }
    else {
        value =100;
    }

    $input.val(value);
})



let preorders_btn = document.getElementById("button")
let container34 = document.querySelector("#container34")
let closeBtn = document.querySelector(".button")
preorders_btn.onclick = function(){
  container34.style.display = "block"
}
closeBtn.onclick = function(){
  container34.style.display = "none"
}
window.onclick = function(e){
  if(e.target == container34){
    container34.style.display = "none"
  }
}

















  