// cards

//1
const card1 = document.querySelector('.card1');
function clickRotate1() {
  card1.classList.toggle('rotated1');
}
card1.addEventListener('click', clickRotate1);

//2
const card2 = document.querySelector('.card2');
function clickRotate2() {
  card2.classList.toggle('rotated2');
}
card2.addEventListener('click', clickRotate2);

//3
const card3 = document.querySelector('.card3');
function clickRotate3() {
  card3.classList.toggle('rotated3');
}
card3.addEventListener('click', clickRotate3);

//4
const card4 = document.querySelector('.card4');
function clickRotate4() {
  card4.classList.toggle('rotated4');
}
card4.addEventListener('click', clickRotate4);

//5
const card5 = document.querySelector('.card5');
function clickRotate5() {
  card5.classList.toggle('rotated5');
}
card5.addEventListener('click', clickRotate5);

//6
const card6 = document.querySelector('.card6');
function clickRotate6() {
  card6.classList.toggle('rotated6');
}
card6.addEventListener('click', clickRotate6);

//7
const card7 = document.querySelector('.card7');
function clickRotate7() {
  card7.classList.toggle('rotated7');
}
card7.addEventListener('click', clickRotate7);

//8
const card8 = document.querySelector('.card8');
function clickRotate8() {
  card8.classList.toggle('rotated8');
}
card8.addEventListener('click', clickRotate8);

//9
const card9 = document.querySelector('.card9');
function clickRotate9() {
  card9.classList.toggle('rotated9');
}
card9.addEventListener('click', clickRotate9);

//10
const card10 = document.querySelector('.card10');
function clickRotate10() {
  card10.classList.toggle('rotated10');
}
card10.addEventListener('click', clickRotate10);

//11
const card11 = document.querySelector('.card11');
function clickRotate11() {
  card11.classList.toggle('rotated11');
}
card11.addEventListener('click', clickRotate11);

//12
const card12 = document.querySelector('.card12');
function clickRotate12() {
  card12.classList.toggle('rotated12');
}
card12.addEventListener('click', clickRotate12);

// clear form
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }


//   particles
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 1000,
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  


$(document).ready(function(){

	var elm_class = '#myBtn'; // Adjust this accordingly. 

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) { // 300px from top
			$(elm_class).fadeIn();
		} else {
			$(elm_class).fadeOut();
		}
	});
	
	//Click event to scroll to top
	$(elm_class).click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});


// par
let text = 'Front-end Web Developer';
let i=0;
let speed = 40;

function type() {
    if (i<text.length) {
        document.querySelector('.webTop').textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
        
    }
}
type();

// animation
gsap.to(".webTop", {
    duration: 1.5,
    y: -30,
    repeat: -1,
    yoyo: true,
    delay: 3,
    scrollTrigger: {
        trigger: ".webTop",
        start: "top bottom",
        toggleActions: "play pause play pause"
    }

});


// gsap.from ('.cards-wrapper', {
//     duration: 2, ease: "power1.inOut", x: -50, opacity: 0, stagger: .2, 
//     scrollTrigger:{
//         trigger: ".cards-wrapper",
//         toggleActions: 'restart none none pause'}
    
// })

gsap.from ('.containerText', {
    duration: 2, ease: "power1.inOut", y: -80, opacity: 0, 
    scrollTrigger:{
        trigger: ".containerText",
        toggleActions: 'restart none none none'}
})


gsap.from ('.containerContact', {
    duration: 1.5, ease: "power1.inOut", y: -80, opacity: 0, 
    scrollTrigger:{
        trigger: "#contactMe",
        toggleActions: 'restart none none none'}
})

gsap.from ('.skillsEach', {
    duration: 3, rotate: 360, y: -80, opacity: 0, stagger: .3,
    scrollTrigger:{
        trigger: ".skillsEach",
        toggleActions: 'restart none none none'}
})

gsap.from ('h1', {
    duration: 3, ease: "power1.inOut", x: -80, opacity: 0, delay: .5,
    // scrollTrigger:{
    //     trigger: ".navbar",
    //     toggleActions: 'restart none none none'}
})
