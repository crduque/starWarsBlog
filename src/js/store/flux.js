const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			species: [],
			people: [],
			favorites: []
		},
		actions: {
			getSpecies: () => {
				fetch("https://swapi.dev/api/species/")
					.then(response => {
						if (!response.ok) {
							throw new Error("I can't load Species!");
						}
						return response.json();
					})
					.then(jsonSpecies => {
						setStore({ species: jsonSpecies.results });
					})
					.catch();
			},
			getPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => {
						if (!response.ok) {
							throw new Error("I can't load People!");
						}
						return response.json();
					})
					.then(jsonPeople => {
						setStore({ people: jsonPeople.results });
					})
					.catch();
			},
			setFavorites: eachFavorite => {
				if (!getStore().favorites.includes(eachFavorite)) {
					setStore({ favorites: [...getStore().favorites, eachFavorite] });
				}
			}
		}
	};
};

export default getState;
