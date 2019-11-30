import MessageService from "./message-service.js";

let userId = "John";
const messageService = new MessageService();

window.addEventListener("load", function () {

    document.getElementById("greeting").innerHTML = `Welcome ${userId}!`;
    messageService.getAllMessages()
        .then(successCallback, errorCallback);

    function successCallback(response) {
        //console.log(response);
        populateMessages(response);
    }    

    function errorCallback(response) {
        console.log(response);
    }

});

function populateMessages (messages) {
    messages.forEach(message => {
        const messageListItem = document.createElement("LI");
        const userIdHeading = document.createElement("h3");
        const messageParagraph = document.createElement("p");
    });
}

function populateThread(messages) {
    messages.forEach(message => {
        addMessageToThread(message);
    })
}

function creaeteFormListner() {
    const form = document.getElementById("new-message-form");

    form.onsubmit = function (event) {
        // stop the regular form submission
        event.preventDefault();

        const data = {
            fromId: userId,
            message: form.message.value
        }

        messageService.createNewMessage (data)
            .then (successCallback, errorCallback);

        function successCallback (response) {
            //console.log(response);
            addMessageToThread(response);
        }    

        function errorCallback (response) {
            console.log(response);
        }
    }
}

function addMessageToThread (response) {
    const messageListItem = document.createElement("LI");
    const userIdHeading = document.createElement("h3");
    const messageParagraph = document.createElement("p");

    const messageContent = document.createTextNode(message.message);
    const userIdContent = document.createTextNode(message.fromId);

    userIdHeading.appendChild(userIdContent);
    messageParagraph.appendChild(messageContent);
    messageListItem
        .appendChild(userIdHeading)
        .appendChild(messageParagraph);
    
    document.getElementById("message-list").appendChild(messageListItem); 
}