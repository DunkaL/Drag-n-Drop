
// var ball = document.getElementById('ball');

// ball.onmousedown = function(e) {

//   var coords = getCoords(ball);
// //   var shiftX = e.pageX - coords.left;
//   var shiftY = e.pageY - coords.top;

//   ball.style.position = 'fixed';
//   document.body.appendChild(ball);
//   moveAt(e);

//   ball.style.zIndex = 1000; // над другими элементами

//   function moveAt(e) {
//     // if (e.pageX > 0) {
//     //     ball.style.left = e.pageX - shiftX + 'px';    
//     // }

//     if (e.pageY > 0) {
//         ball.style.top = e.pageY - shiftY + 'px';
//         if(e.pageY > 500) {
//             ball.style.top = 500 + 'px';
//         }

//         if(e.pageY < 363 ){
//             ball.style.top = 363 + 'px';
//         }
//     }else if(e.pageY < 0 ){
//         ball.style.top = 0;
//     }

//   }

//   document.onmousemove = function(e) {
//     moveAt(e);
//   };

//   ball.onmouseup = function() {
//     document.onmousemove = null;
//     ball.onmouseup = null;
//   };

// }

// ball.ondragstart = function() {
//   return false;
// };

// function getCoords(elem) {   // кроме IE8-
//   var box = elem.getBoundingClientRect();
//   return {
//     top: box.top + pageYOffset,
//     left: 0
//     // left: box.left + pageXOffset
//   };
// }


// var elem = document.querySelector('.draggable');
// var draggie = new Draggabilly( elem, {
//     // containment: '.container',
//     axis: 'y',
//     handle: '.handle'
// });

// // or pass in selector string as first argument
// var draggie = new Draggabilly( '.draggable', {
//     // containment: '.container',
//     axis: 'y',
//     handle: '.handle'
// });

// // if you have multiple .draggable elements
// // get all draggie elements
// var draggableElems = document.querySelectorAll('.draggable');
// // array of Draggabillies
// var draggies = []
// // init Draggabillies
// for ( var i=0; i < draggableElems.length; i++ ) {
//   var draggableElem = draggableElems[i];
//   var draggie = new Draggabilly( draggableElem, {
//     // containment: '.container',
//     axis: 'y',
//     handle: '.handle'
//   });

//   draggies.push( draggie );
// }


// var $draggable = $('.draggable').draggabilly({
//     axis: 'y',
//     handle: '.handle'
// });
// $draggable.on( 'dragStart', function() {
//     $('.draggable').toggleClass('open');
// });


var elem = document.querySelector('.draggable');
var draggie = new Draggabilly( elem, {
    axis: 'y',
    handle: '.handle'
});

draggie.on( 'dragStart', function() {
    $('.draggable').toggleClass('open');
});


// $('.handle').on("mousemove", function () {
//     $('.draggable').toggleClass('bottom-0');
// });


