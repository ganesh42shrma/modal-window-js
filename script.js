'use strict';
// selects modal class
const modal = document.querySelector('.modal');
// selects the overlay class
const overlay = document.querySelector('.overlay');
// selects the close button in the modal
const btnCloseModal = document.querySelector('.close-modal');
//selects all the three buttons in the modal using the querySelectorAll() method
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);


// function to close the modal
const closemodal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


// function to open the modal
const openmodal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//adding the opening/closing functionality to all three modal buttons using the variable btnsOpenModal that we have declared earlier
for (let i=0;i<btnsOpenModal.length;i++)
btnsOpenModal[i].addEventListener('click', openmodal);



btnCloseModal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);
//using keyboard event we create an event listener for the keydown event. The even listeners takes object e as an argument and prints the key property of the object
document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key==="Escape"&&!modal.classList.contains('hidden')) {
            closemodal();
        }
    }
)