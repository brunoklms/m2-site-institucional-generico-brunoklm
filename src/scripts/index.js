function openModal() {
    const btnModal = document.querySelectorAll('.btnModal');
    const modalContainer = document.querySelector('#modalController');

    btnModal.forEach((element) => {
        element.addEventListener('click', ()=>{
            modalContainer.showModal();
    
            closeModal();
        })
    })
}

function closeModal() {
    const button = document.querySelector('#closeModal');
    const modalContainer = document.querySelector('#modalController');

    button.addEventListener('click', () => {
        modalContainer.close();
    })
}

openModal();