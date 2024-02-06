// importing packages
const express = require('express');
const cors = require('cors');

// importing configs
const {connectDB} = require('./src/config/db')

// importing routes
const recipeRoutes = require('./src/routes/recipe.routes');


connectDB();

const app = express()

// using middlewares
app.use(cors())
app.use(express.json())

// using routes
app.use('/recipes', recipeRoutes);

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})