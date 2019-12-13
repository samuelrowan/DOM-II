// Your code goes here
// mouseover
// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick
const introH2 = document.querySelector('.intro h2')
const keyPress = document.querySelector('html')
const keyUp = document.querySelector('.intro')
const busInSand = document.querySelector('#busInSand');
const doubleClick = document.querySelector('.intro h2')
const mouseDown = document.querySelector('.intro h2')
const mouseUp = document.querySelector('.intro h2')
const mouseMove = document.querySelector('.intro h2')
const mouseEnter = document.querySelector('.intro h2')
const mouseLeave = document.querySelector('.intro h2')

console.log(busInSand)

introH2.addEventListener('mouseover', function(){
    introH2.style.color = 'purple';
});

keyPress.addEventListener('keydown', function(event){
    console.log(`${event}`)
})

keyUp.addEventListener('keyup', function(event){
    console.log(`${event} again`);
});

busInSand.addEventListener('click', function(){
    console.log(`clickety clackety`);
})

doubleClick.addEventListener('dblclick', function(){
    console.log(`clickety clickety clackety`);
});

mouseDown.addEventListener('mousedown', function(){
    console.log(`CL`);
});

mouseUp.addEventListener('mouseup', function(){
    console.log(`ICK`);
});

mouseMove.addEventListener('mousemove', function(){
    console.log(`weeeeeeeeeee`);
});

mouseEnter.addEventListener('mouseenter', function(){
    console.log(`Im here`);
});

mouseLeave.addEventListener('mouseleave', function(){
    console.log(`see ya later`);
});
