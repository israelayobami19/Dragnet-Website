const navigation = document.querySelector('.header__ul');
const toggleBtn = document.querySelector('.dropdown__toggle');

toggleBtn.addEventListener('click', ()=> {
    if(navigation.classList.contains('about')){
        navigation.classList.remove('about')
    } else {
        navigation.classList.add('about')
    }
})