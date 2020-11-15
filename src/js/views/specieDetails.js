import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const SpeciesView = props => {
	const { store, actions } = useContext(Context);
	let theid = useParams();
	let specieIndex = -1;
	for (let index = 0; index < store.species.length; index++) {
		if (theid.theid == store.species[index].name) {
			specieIndex = index;
		}
	}
	let specieInfo = (
		<div className="info">
			<h1>{store.species[specieIndex].name}</h1>
			<h2>Classification: {store.species[specieIndex].classification}</h2>
			<h2> Language: {store.species[specieIndex].language}</h2>
			<div className="more-info">
				<p>Height average: {store.species[specieIndex].average_height} cm</p>
				<p>Lifespan average: {store.species[specieIndex].average_lifespan} years</p>
				<p>Hair colors: {store.species[specieIndex].hair_colors}</p>
				<p>Eye colors: {store.species[specieIndex].eye_colors}</p>
			</div>
		</div>
	);
	return specieInfo;
};
