
import { useState } from "react";
import { Link } from "react-router-dom";

const sampleRecipes = [
	{ id: 1, name: "Pancakes" },
	{ id: 2, name: "Omelette" },
	{ id: 3, name: "Smoothie" }
];

const SearchResults = () => {
	const [query, setQuery] = useState("");
	const results = sampleRecipes.filter(r =>
		r.name.toLowerCase().includes(query.toLowerCase())
	);
	return (
		<div>
			<h1>Search Recipes</h1>
			<input
				type="text"
				placeholder="Search for a recipe..."
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			<ul>
				{results.map(recipe => (
					<li key={recipe.id}>
						<Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
					</li>
				))}
			</ul>
			{query && results.length === 0 && <p>No recipes found.</p>}
		</div>
	);
};

export default SearchResults;
