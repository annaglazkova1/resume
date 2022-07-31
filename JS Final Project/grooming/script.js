const button = document.querySelector('#btn');
button.addEventListener ('click', Calculate);

const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener('click', showTip);

function showTip(e) {
    e.preventDefault();
    tip.style.display = 'block';
}


function Calculate(e) {
    e.preventDefault();
    const grooming = parseInt(document.querySelector('#grooming').value);
    const bath = parseInt(document.querySelector('#bath').value);
    const nail = parseInt(document.querySelector('#nail').value);
    const teeth = parseInt(document.querySelector('#teeth').value);

    const tip = document.querySelector('#tip').value;


    let sum = grooming + bath + nail + teeth;
    let tipPerCustomer = sum * tip;
    let total = sum + tipPerCustomer;

    document.querySelector('#price').textContent = sum;
    document.querySelector('#tipPerCustomer').textContent = tipPerCustomer;
    document.querySelector('#priceAndTip').textContent = total

    if (grooming === '' || isNaN(grooming)
    || bath === '' || isNaN(bath) 
    || nail === '' || isNaN(nail)
    || teeth === '' || isNaN(teeth)) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your information! Use whole numbers only. Enter 0 to skip.',

        })

    }

    sum = sum.toFixed(2);
    tipPerCustomer = tipPerCustomer.toFixed(2);
    total = total.toFixed(2);
}

// animation
gsap.from('h1', { 
    duration: 1.3, ease: "power3.out", x: -200 });

gsap.from ('span', {
    duration: 2, ease: "power3.out", y: -200, delay:1, opacity: 0
})    

gsap.from ('.p1', {
    duration: 2, ease: "power3.out", x: -200, delay:1, opacity: 0
})

gsap.from ('#addTip', {
    duration: 2, ease: "power3.out", x: -200, delay:1, opacity: 0
})

gsap.from ('#tip', {
    duration: 2, ease: "power3.out", x: -200, delay:1, opacity: 0
})

gsap.from ('#btn', {
    duration: 2, ease: "power3.out", x: -200, delay:1, opacity: 0,
})


gsap.from ('#totalPrice', {
    duration: 2, ease: "bounce.out", y: -300, delay:1, opacity: 0
})


gsap.from ('#totalTip', {
    duration: 2, ease: "bounce.out", y: -300, delay:1.1, opacity: 0
})


gsap.from ('#totalAmount', {
    duration: 2, ease: "bounce.out", y: -300, delay:1.2, opacity: 0
})