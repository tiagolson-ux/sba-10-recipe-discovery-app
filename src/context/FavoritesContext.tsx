
import React, { createContext, useState, useContext } from "react";

type FavoritesContextType = {
	favorites: number[];
	addFavorite: (id: number) => void;
	removeFavorite: (id: number) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [favorites, setFavorites] = useState<number[]>([]);

	const addFavorite = (id: number) => setFavorites((prev) => [...new Set([...prev, id])]);
	const removeFavorite = (id: number) => setFavorites((prev) => prev.filter(fav => fav !== id));

	return (
		<FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
};

export const useFavorites = () => {
	const context = useContext(FavoritesContext);
	if (!context) throw new Error("useFavorites must be used within a FavoritesProvider");
	return context;
};

export default FavoritesContext;
