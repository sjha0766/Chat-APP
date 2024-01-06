document.addEventListener('DOMContentLoaded', function () {
 
    const profileImage = document.querySelector('.profile');
    const profileSelect=document.querySelector('.img-select');
    
    profileImage.addEventListener('click', function () {
    profileSelect.click();
    });
});