import React, { Fragment } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Species } from "../component/species.jsx";
import { People } from "../component/people.jsx";

export const Home = () => (
	<Fragment>
		<h1>Species: </h1>
		<div className="speciesRow">
			<Species />
		</div>
		<h1>People: </h1>
		<div className="speciesRow">
			<People />
		</div>
	</Fragment>
);
