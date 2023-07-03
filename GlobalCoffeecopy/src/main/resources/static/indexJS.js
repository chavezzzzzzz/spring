// alert("Hello");

// window.addEventListener('scroll', function() {
    // var element = document.getElementById('wow1');
    // var scrollPosition = window.scrollX; // Get the current horizontal scroll position
//   
    // if (scrollPosition >= 30 && scrollPosition <= 60) {
    //   If the scroll position is between 30 and 60, set the opacity to 0
    //   element.style.opacity = 0;
    // } else {
    //   Otherwise, set the opacity back to 1
    //   element.style.opacity = 1;
    // }
//   });
// const scrollable = document.querySelector("#divH2");
// 
// scrollable.addEventListener("wheel", function(e) {
//   if (e.wheelDelta > 0) {
    // this.scrollLeft -= 50;
//   } else {
    // this.scrollLeft += 50;
//   }
// }, { passive: true });


// var item = document.getElementById("divH2");

//   window.addEventListener("wheel", function (e) {
    // if (e.deltaY > 0) item.scrollLeft += 1;
    // else item.scrollLeft -= 1;
//   });


// const container = document.getElementById("divH2");
// where "container" is the id of the container
//   container.addEventListener("wheel", function (e) {
    // if (e.deltaY > 0) {
    //   container.scrollLeft += 1;
    //   e.preventDefault();
// prevenDefault() will help avoid worrisome 
// inclusion of vertical scroll 
    // }
    // else {
    //   container.scrollLeft -= 1;
    //   e.preventDefault();
    // }
//   });
// That will work perfectly

window.addEventListener('scroll', function() {
    var scrollY = window.scrollY || window.pageYOffset;
    var divH4 = document.getElementById('divH4');
    var divH5 = document.getElementById('divH5');
    var divH6 = document.getElementById('divH6');
    var divH7 = document.getElementById('divH7');

    if (scrollY > 220) {
        divH4.style.transition = 'transform .8s, opacity .8s';
        divH4.style.transform = 'translateY(0%)';
        divH4.style.opacity = '1';
    }
    if (scrollY > 720) {
        divH5.style.transition = 'transform .8s, opacity .8s';
        divH5.style.transform = 'translateY(0%)';
        divH5.style.opacity = '1';
    }
    if (scrollY > 1270) {
        divH6.style.transition = 'transform .8s, opacity .8s';
        divH6.style.transform = 'translateY(0%)';
        divH6.style.opacity = '1';
    }
    if (scrollY > 1780) {
        divH7.style.transition = 'transform .8s, opacity .8s';
        divH7.style.transform = 'translateY(0%)';
        divH7.style.opacity = '1';
    }
});