const express = require('express');
const {
    getAllRecipes,
    createRecipe,
    getRecipeById,
    updateRecipe,
    deleteRecipe
} = require('../controllers/recipe.controllers');

const router = express.Router();

// Define routes
router.get('/recipes', getAllRecipes);
router.post('/recipes', createRecipe);
router.get('/recipes/:recipeId', getRecipeById);
router.put('/recipes/:recipeId', updateRecipe);
router.delete('/recipes/:recipeId', deleteRecipe);

module.exports = router;