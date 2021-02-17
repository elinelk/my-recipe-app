import React from 'react';
import styled from 'styled-components';


const Recipe = ({title, calories, image}) => {
    return (
        <RecipeCard>
            <H2>{title}</H2>
            <P>{calories}</P>
            <RecipeImage src ={image} alt=""></RecipeImage>
        </RecipeCard>
    );
};

export default Recipe;

const RecipeCard = styled.div`
`;

const H2 = styled.h2`
`;

const P = styled.p`
`;

const RecipeImage = styled.img`
`;