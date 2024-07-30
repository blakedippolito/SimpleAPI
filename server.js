const express = require('express')
const app = express()

let dogs = {
    'Blue': {
        'breed': ['German Shepherd', 'Husky'],
        'age': 6
    },
    'Bowser': {
        'breed': ['Chihuahua', 'Rat Terrier'],
        'age': 11
    },
    'Gino': {
        'breed': 'Cat',
        'age': 10
    }
}
app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=> {
    const name = request.params.name
    console.log(name)
    if (dogs[name]) {
        response.json(dogs[name])
    } else {
        response.json(dogs['Gino'])
    }
})

app.listen(3003, ()=> {
    console.log('Server Running')
})