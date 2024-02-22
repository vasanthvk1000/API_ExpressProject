const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 3000

/*
* Route to DEMO the API call to a REST API Endpoint 
* REST URL : https://jsonplaceholder.typicode.com/todos/1
*/
app.get('/getAPIResponse', (req, res) => {
    api_helper.make_API_call('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))


//normal way

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

// app.listen(port, () => console.log(`App listening on port ${port}!`))