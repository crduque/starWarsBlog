import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { PersonCard } from "./personCard.jsx";

export const People = props => {
	const { store, actions } = useContext(Context);
	const cards = store.people.map((person, index) => (
		<PersonCard key={index} name={person.name} personBirth={person.birth_year} />
	));
	return cards;
};
