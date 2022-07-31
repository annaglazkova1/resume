const items = document.querySelectorAll('.item');

items.forEach (item => { //item is a part of forEach function
    item.addEventListener('mouseover', () =>{

        removeFocus(); //removing class before applying it
        item.classList.add('selected');
        
    })

removeFocus = () => { //removeFocus function details
    items.forEach(item => { //forEach mthod again, item is from there
        item.classList.remove('selected'); //'remove' to remove class
    })
}
})
 