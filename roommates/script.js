const button = document.querySelector('#btn');
const input = document.querySelectorAll('input:not(#people)');

button.addEventListener('click', calculateAmount);

function calculateAmount(e) {
    
    const electricity = parseInt(document.querySelector('#bill1').value);
    const internet = parseInt(document.querySelector('#bill2').value);
    const water = parseInt(document.querySelector('#bill3').value);
    const people = document.querySelector('#people').value;
    

    let sum = internet+electricity+water;
    let sumDevided = sum/people;

    sum = sum.toFixed(2);
    sumDevided = sumDevided.toFixed(2);

    document.querySelector('#totalBill').textContent = sum;
    document.querySelector('#billPerPerson').textContent = sumDevided;

    if (electricity === "" || isNaN(electricity) ||
    internet === "" || isNaN(internet) ||
    water === "" || isNaN(water) ||
    people === "" || isNaN(people)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter your information! Use whole numbers only. Enter 0 to skip.',
    })

}

}

// animation

gsap.from('#container', {duration: 2, ease: "sine.in", y: -500, opacity: 0})

gsap.from('form', {duration: 2, ease: "back.in(1.7)", x: -200, opacity: 0, delay:.3})

gsap.from('#btn', {duration: 2, ease: "sine.in", y: -500, opacity: 0, delay: .4})
