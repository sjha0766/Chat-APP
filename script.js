document.addEventListener('DOMContentLoaded', function () {
    let name;
    let userName = document.querySelector('.profile_name');

    while (!name) {
        name = prompt('Please enter your name:');
    }

    userName.textContent = `${name}`;
    userName.style.display = 'block';

    const profileImage = document.querySelector('.profile');
    const profileSelect = document.querySelector('.img-select');

    profileImage.addEventListener('click', function () {
        profileSelect.click();
    });

    const client_message = document.querySelector(".send-button");

    function sendMessage() {
        var messageInput = document.getElementById("textInput");
        var message = messageInput.value;

        alert("Message sent: " + message + " by " + name);

        messageInput.value = "";
    }

    client_message.addEventListener("click", sendMessage);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
