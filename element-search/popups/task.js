function modal() {
    let modalMain = document.querySelectorAll('#modal_main')[0];
    let modalSuccess = document.querySelectorAll('#modal_success')[0];
    let modalMainClose = document.querySelectorAll('#modal_main .modal__close')[0];
    let modalCloseLink = document.querySelectorAll('.show-success')[0];
    let modalSuccessClose = document.querySelectorAll('#modal_success .modal__close')[0];
    
    modalMain.classList.toggle('modal_active');
    modalMainClose.onclick = function() {
     modalMain.classList.toggle('modal_active');
    }
    modalCloseLink.onclick = function() {
     modalMain.classList.toggle('modal_active');
     modalSuccess.classList.toggle('modal_active');
    }
    modalSuccessClose.onclick = function() {
     modalSuccess.classList.toggle('modal_active');
    }
   }
   
   modal();