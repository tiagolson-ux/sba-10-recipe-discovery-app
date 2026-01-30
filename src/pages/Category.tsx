
import { useParams, Link } from "react-router-dom";

const sampleRecipes = [
	{ id: 1, name: "Pancakes" },
	{ id: 2, name: "Omelette" },
	{ id: 3, name: "Smoothie" }
];


const Category = () => {
	const { categoryName } = useParams();
	return (
		<div>
			<h1>Category: {categoryName}</h1>
			<ul>
				{sampleRecipes.map((recipe) => (
					<li key={recipe.id}>
						<Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Category;
