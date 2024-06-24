var btn = document.getElementById('openModal')
var modal = document.getElementById('modalContact')
var closeModal = document.getElementById('closeModal')


btn.onclick = function(){
    modal.style.display = "block";
}

closeModal.onclick = function(){
    modal.style.display = "none"
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

