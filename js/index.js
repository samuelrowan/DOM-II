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

introH2.addEventListener('mousedown', function(){
    console.log(`CL`);
});

introH2.addEventListener('mouseup', function(){
    console.log(`ICK`);
});

introH2.addEventListener('mousemove', function(){
    console.log(`weeeeeeeeeee`);
});

introH2.addEventListener('mouseenter', function(){
    console.log(`Im here`);
});

introH2.addEventListener('mouseleave', function(){
    console.log(`see ya later`);
});
