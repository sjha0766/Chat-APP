document.addEventListener('DOMContentLoaded', function () {
     let name;
     let userName=document.querySelector('.profile_name');
    do {
        name=prompt('please enter your name:')
    } while (!name){
        userName.textContent=`${name}`;
        userName.style.display='block';
    };
    const profileImage = document.querySelector('.profile');
    const profileSelect=document.querySelector('.img-select');
    
    profileImage.addEventListener('click', function () {
    profileSelect.click();
    });
});