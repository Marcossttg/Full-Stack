import styled from 'styled-components';

export const Button = styled.button`
width: 342px;
height: 68px;
background: ${props => props.bgBlack ? '#21212f' : '#D93856'};
font-style: normal;
font-weight:bold;
line-height: 28px;
border: none;
cursor: pointer;
margin-top: 50px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 100px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

P { 
    margin-left: 0;
}
`;