const btnOpen = document.querySelector('#btn-open-modal');
const modal = document.querySelector('dialog');
const buttonClose = document.querySelector('dialog button');


function growUpModal(){
    modal.classList.add('height60vh');
}


btnOpen.onclick = function(){
    modal.showModal();
    setInterval(growUpModal, 1000);
}

buttonClose.onclick = function(){
    modal.close();
    console.log('Click no fechar!');
}

const fruits = ['Apple', 'Orange', 'Avocado', 'Banana', 'Lemon', 'Cherry', 'Mango']
//console.table(fruits);

function createList(){
    const res = document.querySelector('#res');
    const ul = document.createElement('ul');
    res.appendChild(ul);

    fruits.forEach(currentItem => {
        const li = document.createElement('li');
        ul.appendChild(li).innerHTML = `<i class="ph ph-arrow-right"></i>  ${currentItem}`;
        console.log(currentItem);
    });

    //os clicks borbulham nos elementos filhos
    ul.addEventListener('click', e => {
        console.log(e.target);
        const clickedElement =  e.target;
        if(clickedElement.tagName === 'LI'){
            if(clickedElement.classList == 'active'){
                clickedElement.classList.remove('active');
            }
            else{
                clickedElement.classList.add('active');
            }
            //clickedElement.remove();
        }
    })

    buttonSimple.removeEventListener('click', createList);
}

const buttonSimple = document.querySelector('.btn-simple');
buttonSimple.addEventListener('click', createList);






// for(let i=0; i < arr.length; i++){
//     console.log('Array Uni:', arr[i]);
//     modal.innerHTML += `${arr[i]} <br>`;
// }


