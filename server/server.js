// Holding the info from users and cast.


const express = require('express')
const app = express()
const serverPort = 8080
let { registerHandler, loginHandler } = require('./controllers/users');
let { getCampaigns, getCharacters, getCampaigns } = require('./controllers/cast');

app.use(express.json())
app.use(cors())

app.post('/api/register', registerHandler);

app.post('/api/login', loginHandler);

app.get('/api/initiative', getCampaigns);

app.listen(8080, () => console.log('Server is running on 8080'))

