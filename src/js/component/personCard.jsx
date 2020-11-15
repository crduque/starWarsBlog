import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const PersonCard = props => {
	const { store, actions } = useContext(Context);
	let personName = props.name;
	return (
		<div className="card">
			<img
				src="https://media.timeout.com/images/105214873/320/210/image.jpg"
				className="card-img-top"
				alt="Star Wars some species"
			/>
			<div className="card-body">
				<h5 className="card-title">{personName}</h5>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Date of birth: {props.personBirth}</li>
				</ul>
				<div className="d-flex justify-content-between mt-2">
					<Link to={"/people/" + personName}>
						<button className="btn btn-outline-info">Show more</button>
					</Link>
					<button
						className="btn btn-outline-danger"
						onClick={() => {
							actions.setFavorites(personName);
						}}>
						Fav
					</button>
				</div>
			</div>
		</div>
	);
};

PersonCard.propTypes = {
	name: PropTypes.string,
	personSpecie: PropTypes.string,
	personBirth: PropTypes.string
};
