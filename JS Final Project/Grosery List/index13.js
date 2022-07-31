const inputField = document.querySelector ('.inputField');
const btn = document.querySelector ('.btn');
const toBuyContainer = document.querySelector ('.toBuyContainer');


btn.addEventListener ('click', () => {
    const item = document.createElement ('li');
    item.innerText = inputField.value;
    if (inputField.value.length === 0){
        return false;
    };
    item.classList.add('toBuyAdded');
    toBuyContainer.appendChild (item);
    inputField.value = " ";
    item.addEventListener ('click', () => {

        item.classList.add ('toBuyCompleted')
    })
    
    item.addEventListener ('dblclick', () => {
        toBuyContainer.removeChild(item);
    })
})



