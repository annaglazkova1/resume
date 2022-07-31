function christmasCountdown () {
    const christmasDate = new Date ('December 25, 2022 00:00');
    const now = new Date();
    const diff = christmasDate - now;
    
    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector ('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector ('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector ('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor ((diff%msInMinute)/msInSecond);
    document.querySelector ('.seconds').textContent = displaySecond;

    

    if (diff<=0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        
        clearInterval(timerID);
        merryChristmas();
    }

}

let timerID =  setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector('h1');
    heading.textContent = 'MERRY CHRISTMAS! HO-HO-HO';
    heading.classList.add('red');
}


const buttonStart = document.querySelector('#myButtonStart');
const buttonStop = document.querySelector('#myButtonStop');

const audio = document.querySelector('#myAudio');

buttonStart.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
})

buttonStop.addEventListener('click', function () {
  if (audio.play) {
      audio.pause();
  }
  else {
      audio.play();
  }
})




//particles/snow

particlesJS("particles-js", {
    particles:  {
      number: {
        value: 800,
        density: {
          enable: true,
          value_area: 631.3280775270874
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: false,
          speed: 3,
          opacity_min: 0.8,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: true
        }
      },
      line_linked: {
        enable: false,
        distance: 600,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
        detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.2
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
