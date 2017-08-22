"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
  function Slider(options) {
    _classCallCheck(this, Slider);

    var slider = document.querySelector(".slider--js");
    this.slider = slider;
    this.currentSlide = "1";
    this.slideTime = options.slideTime || 3000;
    this.slideCount = options.slideCount;
    this.intervalLoop;
    this.navDots = [];
    this.createdNavButtons();
    this.start();
  }

  _createClass(Slider, [{
    key: "start",
    value: function start() {
      //fix scope issues
      var _this = this;
      this.intervalLoop = setInterval(function () {

        //remove current slide
        _this.slider.classList.remove("section-hero-" + _this.currentSlide);
        //make navdot linked to this slide not active
        _this.navDots[_this.currentSlide - 1].classList.remove('active');

        //reset back to 1 since we only have a certain amount of slides
        if (_this.currentSlide >= _this.slideCount) {
          _this.currentSlide = "0";
        }
        //iterate once
        _this.currentSlide++;
        //add the next slide
        _this.slider.classList.add("section-hero-" + _this.currentSlide);
        //make navdot linked to this new slide active
        _this.navDots[_this.currentSlide - 1].classList.add('active');

        //fade in
        fadeIn(_this.slider);
        // _this.slider.classList.add("loading");
      }, _this.slideTime);
    }
  }, {
    key: "createdNavButtons",
    value: function createdNavButtons() {
      var _this2 = this;

      var navButtonDiv = document.querySelector('.slider-buttons');
      //one dot for each slide

      var _loop = function _loop(i) {
        //create li
        var li = document.createElement('li');
        //add slidecount data attribute
        li.dataset.slideCount = i + 1;
        //make first one active
        li.className = i === 0 ? 'nav-dot active' : 'nav-dot';
        //append to main div
        navButtonDiv.appendChild(li);
        //add to dot array
        _this2.navDots.push(li);
        //event listener for buttons
        li.addEventListener('click', function () {
          return _this2.goTo(li.dataset.slideCount);
        });
      };

      for (var i = 0; i < this.slideCount; i++) {
        _loop(i);
      }
    }
  }, {
    key: "goTo",
    value: function goTo(requestedSlide) {
      //stop current interval loop
      clearInterval(this.intervalLoop);

      //remove current slide and change navdot
      this.navDots[this.currentSlide - 1].classList.remove('active');
      this.slider.classList.remove("section-hero-" + this.currentSlide);

      //add requested slide and change navdot
      this.navDots[requestedSlide - 1].classList.add('active');
      this.slider.classList.add("section-hero-" + requestedSlide);

      //change current slide so start() knows
      this.currentSlide = requestedSlide;

      //fadein
      fadeIn(this.slider);
      //recall start
      this.start();
    }
  }]);

  return Slider;
}();

//helper for fadeIn


function fadeIn(el) {
  el.style.opacity = 0;

  var tick = function tick() {
    el.style.opacity = +el.style.opacity + 0.03;

    if (+el.style.opacity < 1) {
      window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
    }
  };

  tick();
}

// TODO: make fade in speed a thing
slider = new Slider({
  slideCount: 3,
  slideTime: 5000
});
