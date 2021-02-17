import logo from './logo.svg';
import styled from 'styled-components';
import React, {useEffect, useState } from 'react';
import './App.css';
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

  };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getRecipes();
  });
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
`;

const SearchBar = styled.input`
`;

const SearchButton = styled.button`
`;

const MyApp = styled.div`
`;

