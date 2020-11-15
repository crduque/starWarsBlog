import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [listElement, setListElement] = useState(null);
	const deleteFav = indexFav => {
		store.favorites.splice(indexFav, 1);
	};

	useEffect(() => {
		if (store.favorites.length == 0) {
			setListElement("Empty");
		} else {
			setListElement(
				store.favorites.map((eachFavorite, index) => {
					return (
						<li key={index} className="dropdown-item">
							{eachFavorite}
							<button
								className="btn btn-danger"
								onClick={() => {
									deleteFav(index);
								}}>
								Del
							</button>
						</li>
					);
				})
			);
		}
	});

	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<img
					src="https://tendencybook.com/wp-content/uploads/2019/08/star-wars-.png"
					className="navbar-brand mb-0"
				/>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-outline-warning dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites {store.favorites.length}
				</button>
				<ul className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="dropdownMenuButton">
					{listElement}
				</ul>
			</div>
		</nav>
	);
};
