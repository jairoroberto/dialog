const btnOpen = document.querySelector('#btn-open-modal');
const modal = document.querySelector('dialog');
const buttonClose = document.querySelector('dialog button');


function growUpModal(tempo){
    modal.classList.add('height60vh');
    //console.log(tempo);
    clearInterval(tempo);
}


btnOpen.onclick = function(){
    modal.showModal();
    var tempo = setInterval(growUpModal, 1000);
}

buttonClose.onclick = function(){
    modal.close();
    console.log('Click no fechar!');
}

const fruits = ['Apple', 'Orange', 'Avocado', 'Banana', 'Lemon', 'Cherry', 'Mango']
//console.table(fruits);

const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'


window.addEventListener ('load', async () => {
    const request = await fetch(urlUF);
    const response = await request.json();

    formLista(response);
});

function formLista(response){
    const est = document.querySelector('#estados');
    const ulEstados = document.createElement('ul');
    est.appendChild(ulEstados);

    let contador = 0;
    response.forEach(function(uf){
        // const option = document.createElement('option');
        // const select = document.querySelector('#uf');
        // select.appendChild(option).innerHTML = `${uf.nome} - ${uf.sigla}`;

        const liEstados = document.createElement('li');
        contador += 1;
        ulEstados.appendChild(liEstados).innerHTML = `
            <i class="ph ph-arrow-right"></i> 
            ${uf.sigla} - 
            ${uf.nome} - 
            ${uf.id} - 
            <span class='badge'>${uf.regiao.sigla}</span>
        `;       
    });
    //console.log(contador)

    const boxContador =  document.querySelector('#contador');
    boxContador.innerHTML = `Total de estados: ${contador}`;
}


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


