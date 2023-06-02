const btnOpen = document.querySelector('#btn-open-modal');
const modal = document.querySelector('dialog');
const buttonClose = document.querySelector('dialog button');




btnOpen.onclick = function(){
    modal.showModal();
}

buttonClose.onclick = function(){
    modal.close();
    console.log('Click no fechar!');
}

const arr = ['Apple', 'Orange', 'Avocato']
console.table(arr);



// for(let i=0; i < arr.length; i++){
//     console.log('Array Uni:', arr[i]);
//     modal.innerHTML += `${arr[i]} <br>`;
// }





