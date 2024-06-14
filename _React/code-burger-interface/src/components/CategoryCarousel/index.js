import React, { useEffect } from "react";

import Categoty from "../../assets/category.png"
import { Container, CategoryImg } from "./styles";
import api from "../../services/api"

function CategoryCarousel() {
	useEffect(() => {
		async function loadCategories() {
			const response = await api.get("categories")

			console.log(response)
		}

		loadCategories()
	}, [])
	return (
		<Container>
			<CategoryImg src={Categoty} alt="imagem de texto" />
		</Container>
	)
}

export default CategoryCarousel