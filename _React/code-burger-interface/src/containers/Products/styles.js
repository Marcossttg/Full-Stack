import styled from "styled-components";

export const Container = styled.div``;

export const ProductsImg = styled.img`
	width: 100%;
	`
export const CategoriesMenu = styled.div`
	display:flex;
	justify-content: center;
	gap: 50px;
	margin-top: 25px;
`;

export const CategoryButton = styled.button`
	background: none;
	border: none;
	border-bottom: ${props => props.isActiveCategory && "2px solid #9758A6"};
	color: ${props => props.isActiveCategory ? "#9758A6" : "#9a9a9d"};
	cursor: pointer;
	font-size: 17px;
	line-height: 20px;
	padding-bottom: 5px;
`;