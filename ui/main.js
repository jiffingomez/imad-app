console.log('Loaded!');
var element = document.getElementById('text');
element.innerHTML = 'Helloooooo';
var img = document.getElementById('myimage');
img.onClick = function(){
    var interval = setInterval(moveLeft, 100);
    img.style.marginleft = '100px';

};