

window.addEventListener("wheel", (e) =>{
    if (e.deltaY >0){
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

})


