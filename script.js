const btn_start = document.getElementById('start-btn');
const btn_close = document.getElementById('close-btn');
let btn_s6 = document.querySelector('.btn-s6');

openCloseForm();

function openCloseForm(){
    btn_start.addEventListener('click', ()=> {
        const form = document.getElementById('form');
        form.classList.toggle('show');
    
        if(form.classList.length == 2){
            btn_s6.style.display = "none";
        } else {
            btn_s6.style.display = 'flex';
        }
    })
    btn_close.addEventListener('click', ()=> {
        form.classList.toggle('show');
        if(form.classList.length == 2){
            btn_s6.style.display = "none";
    
        } else {
            btn_s6.style.display = 'flex';
        }
        
    })   
}
