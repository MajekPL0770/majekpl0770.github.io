var title = new MovingTitle("Majuś lubi placki | ", 300, 15);
title.init();

var audio = document.getElementById("waliza");
$("#clickme").click(function () {
  audio.play();
  $("#dc").show();
  document.getElementById("clickme").classList.toggle("hide");
  setTimeout(function () {
    document.getElementById("blur").classList.remove("hide");
  }, 2700);
});
$("#dc-name").click(function () {
  navigator.clipboard.writeText("! Majek_PL#1337");
  document.getElementById("copied").classList.toggle("hide");
  setTimeout(function () {
    document.getElementById("copied").classList.add("hide");
  }, 1500);
});

// PARTICLE.JS

//https://github.com/VincentGarreau/particles.js/

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
count_particles = document.querySelector(".js-count-particles");
update = function () {
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

// moving title

function MovingTitle(writeText, interval, visibleLetters) {
  var _instance = {};

  var _currId = 0;
  var _numberOfLetters = writeText.length;

  function updateTitle() {
    _currId += 1;
    if (_currId > _numberOfLetters - 1) {
      _currId = 0;
    }

    var startId = _currId;
    var endId = startId + visibleLetters;
    var finalText;
    if (endId < _numberOfLetters - 1) {
      finalText = writeText.substring(startId, endId);
    } else {
      var cappedEndId = _numberOfLetters;
      endId = endId - cappedEndId;

      finalText =
        writeText.substring(startId, cappedEndId) +
        writeText.substring(0, endId);
    }

    document.title = finalText;
  }

  _instance.init = function () {
    setTimeout(updateTitle, interval);
  };

  return _instance;
}
