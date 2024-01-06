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
    const profileSelect = document.querySelector('.img-select');

    profileImage.addEventListener('click', function () {
        profileSelect.click();
    });
    const client_message = document.querySelector(".send-button");

    function sendMessage() {

        var messageInput = document.getElementById("textInput");
        var message = messageInput.value;

        alert("Message sent: " + message);

        messageInput.value = "";

    }

    client_message.addEventListener("click", sendMessage);
});




