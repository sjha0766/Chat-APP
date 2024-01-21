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


    function appendMessage(message, sender) {
        var ul = document.querySelector(".list-group");
        var li = document.createElement("li");
    
        li.className = "list-group-item list-group-item-" + (sender === "sender" ? "primary align-left" : "success align-right");
        console.log(li.className);
        li.appendChild(document.createTextNode(message));
        ul.appendChild(li);
    }
    const client_message = document.querySelector(".send-button");

    function sendMessage() {
        var messageInput = document.getElementById("textInput");
        var message = messageInput.value;

        
    
        appendMessage(message,"sender");

        messageInput.value = "";
    }

    client_message.addEventListener("click", sendMessage);
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
