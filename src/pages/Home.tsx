
import { Link } from "react-router-dom";

const categories = [
	"Breakfast",
	"Lunch",
	"Dinner",
	"Dessert",
	"Drinks"
];

const Home = () => (
	<div>
		<h1>Home Page (Categories)</h1>
		<ul>
			{categories.map((cat) => (
				<li key={cat}>
					<Link to={`/category/${cat.toLowerCase()}`}>{cat}</Link>
				</li>
			))}
		</ul>
	</div>
);

export default Home;
