function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if(startTime == null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}

var home = document.querySelector('#home');
var about = document.querySelector('#about');
var events = document.querySelector('#events');
var team = document.querySelector('#team');

home.addEventListener('click', function() {
    var target = document.querySelector('.home');
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;

    if (startPosition == targetPosition) {
        return 0;
    }
    else {
        smoothScroll('.home', 2000);
    }
});

about.addEventListener('click', function() {
    smoothScroll('.about', 2000);
});

events.addEventListener('click', function() {
    smoothScroll('.events', 2000);
});

team.addEventListener('click', function() {
    smoothScroll('.team', 2000);
});



