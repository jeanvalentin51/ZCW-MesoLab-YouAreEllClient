export default class MessageService{

    getAllMessages() {
        const request = new XMLHttpRequest();

        return new Promise (function (resolve, reject) {
            //setup our listener to process comleted requests
            request.onload = function(){    
                if (request.status >= 200 && request.status < 300){
                    //console.log(JSON.parse(request.responseText));
                    const threads = JSON.parse(request.responseText);
                    //this data is passed to the success callback
                    resolve(threads);
                } else {
                    //console.log('Error: ' + request.status);
                    // this data is passed to the failure callback
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }
            };

            request.open("GET","http://zipcode.rocks:8085/messages");
            request.send();

        })
    }


    createNewMessage(message) {
        const request = new XMLHttpRequest();
        return new Promise (function (resolve, reject) {
            request.onload = function () {
                if (request.status >= 200 && request.status < 300){
                    //console.log(JSON.parse(request.responseText));
                    const threads = JSON.parse(request.responseText);
                    //this data is passed to the success callback
                    resolve(threads);
                } else {
                    //console.log('Error: ' + request.status);
                    // this data is passed to the failure callback
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }
            }

            request.open("POST",`http://zipcode.rocks:8085/ids/${message.fromId}/messages`);

            request.send(JSON.stringify(message));
        })
    }
}