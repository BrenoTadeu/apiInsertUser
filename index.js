require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/routes')

app.use(express.json())
app.use('/api', routes)

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em ${PORT}`);
})