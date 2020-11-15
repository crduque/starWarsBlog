import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PersonView = props => {
	const { store, actions } = useContext(Context);
	let theid = useParams();
	let peopleIndex = -1;
	for (let index = 0; index < store.people.length; index++) {
		if (theid.theid == store.people[index].name) {
			peopleIndex = index;
		}
	}
	let specieInfo = (
		<div className="info">
			<h1>{store.people[peopleIndex].name}</h1>
			<h2>Year of birth: {store.people[peopleIndex].birth_year}</h2>
			<div className="more-info">
				<p>Height: {store.people[peopleIndex].height} cm</p>
				<p>Mass: {store.people[peopleIndex].mass} kg</p>
				<p>Hair color: {store.people[peopleIndex].hair_color}</p>
				<p>Eye color: {store.people[peopleIndex].eye_color}</p>
				<p>Gender: {store.people[peopleIndex].gender}</p>
			</div>
		</div>
	);
	return specieInfo;
};
