import logo from './logo.svg';
import styled from 'styled-components';
import React, {useEffect, useState } from 'react';
import Recipe from './Recipe'

function App() {

    //Authentication
  const APP_ID = '';
  const APP_KEY = '';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
    const data = await response.json();
    
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getRecipes();
  }, [query]);
  return (
    <MyApp>
      <SearchForm onSubmit={getSearch}>
        <SearchBar type = "text" value={search} onChange={updateSearch}/>
        <SearchButton>
          Search
        </SearchButton>
      </SearchForm>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title ={recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients ={recipe.recipe.ingredients}
        />
      ))
      };
    </MyApp>
  );
}

export default App;

const H1 = styled.h1 `
`;

const SearchForm = styled.form`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.input`
  width: 50%;
  border: none;
  padding: 10px;
`;

const SearchButton = styled.button`
`;

const MyApp = styled.div`
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
`;

