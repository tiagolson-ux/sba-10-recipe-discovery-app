
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

const sampleRecipes = [
	{ id: 1, name: "Pancakes" },
	{ id: 2, name: "Omelette" },
	{ id: 3, name: "Smoothie" }
];

const Favorites = () => {
	const { favorites } = useFavorites();
	const favoriteRecipes = sampleRecipes.filter(r => favorites.includes(r.id));
	return (
		<div>
			<h1>Favorites</h1>
			{favoriteRecipes.length === 0 ? (
				<p>No favorite recipes yet.</p>
			) : (
				<ul>
					{favoriteRecipes.map(recipe => (
						<li key={recipe.id}>
							<Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Favorites;
