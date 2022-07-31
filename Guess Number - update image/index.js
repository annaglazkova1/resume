const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', function(e){
    if (e.keyCode === 13)
    play();
})

button.addEventListener('click', play);

function play() {
    const userNumber = document.querySelector('#guess').value;
    if (userNumber<1 || userNumber>20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your number must be between 1 and 20',
          })
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please, provide a digit',
          })
    }

    else {
        if (userNumber<answer) {
            Swal.fire('Try higher number')
        }
        else if (userNumber>answer) {
            Swal.fire('Try lower number')
        }
        else {
            Swal.fire({
                title: 'Congratulations!',
                imageUrl: 'congrats.jpg',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Congratulations!',
              }) 
        }
    }

}

// animation

gsap.from('#container', {
    duration: 2.5, ease: "bounce.out", y: -500, delay: .3, opacity: 0,
})