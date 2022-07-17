const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const clients = [];

wsServer.on("connection", (newClient)=> {
    clients.push(newClient);
    // console.log("New frontend connection");
    setTimeout(() => {
        newClient.send("Welcome to server")
    }, 3000);

    clients.forEach(client => {
        if(client !== newClient) {
            client.send("New member connect")
        }
    })
})