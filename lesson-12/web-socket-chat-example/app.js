const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const users = [];

wsServer.on("connection", (newUser) => {
    users.push(newUser);

    newUser.on("message", (data) => {
        const newData = JSON.parse(data);
        const message = JSON.stringify(newData)
        users.forEach(user =>{
            if(user !== newUser){
                user.send(message)
            }
        })
    })
})