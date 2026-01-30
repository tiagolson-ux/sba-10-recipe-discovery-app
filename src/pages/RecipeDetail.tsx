
import { useParams } from "react-router-dom";

const sampleRecipes = [
	{ id: 1, name: "Pancakes", description: "Fluffy pancakes with syrup." },
	{ id: 2, name: "Omelette", description: "Egg omelette with cheese." },
	{ id: 3, name: "Smoothie", description: "Fruit smoothie with yogurt." }
];

const RecipeDetail = () => {
	const { recipeId } = useParams();
	const recipe = sampleRecipes.find(r => r.id === Number(recipeId));
	if (!recipe) return <h1>Recipe not found</h1>;
	return (
		<div>
			<h1>{recipe.name}</h1>
			<p>{recipe.description}</p>
		</div>
	);
};

export default RecipeDetail;
