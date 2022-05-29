(function(){
    
    const sliders = [...document.querySelectorAll('.areas__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentAreas = document.querySelector('.areas__body--show').dataset.id;
        value = Number(currentAreas);
        value+= add;


        sliders[Number(currentAreas)-1].classList.remove('areas__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('areas__body--show');

    }

})();