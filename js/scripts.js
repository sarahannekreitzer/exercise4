console.log('scripts loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('close-btn');
var content = document.getElementById('content');
var moreInfoText = document.getElementById('more-info');
var toolTip = document.getElementById('tooltip')

burger.addEventListener('click', function (){
  console.log('button clicked'); // THIS IS SO IMPORTANT so at least you can see it's working
  mobileNav.style.width = '50%';
  mobileNav.style.transition = '0.5s ease';

});

closeBtn.addEventListener('click', function (){
  console.log('button clicked'); // THIS IS SO IMPORTANT so at least you can see it's working
  mobileNav.style.width = '0%';
  mobileNav.style.transition = '0.5s ease';

});

moreInfoText.addEventListener('mouseenter', function(){
  tooltip.style.opacity = '1';
  var x = event.pageX;     // Get the horizontal coordinate
  var y = event.pageY;     // Get the vertical coordinate
  console.log(y);
  tooltip.style.top = y + 'px';
  tooltip.style.right = x + 'px';
});
