import { useState } from 'react';
import './App.css';
import Search from './Form';
import Recipe from './Recipe';

const api_id = "8b9be35b";
const api_key = "ae9c70dce41a364e86bee817fc434768";

function App() {
  const [recipes, setrecipes] = useState([]);
  async function getRecipe(e){
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const Url = `https://api.edamam.com/search?q=${recipeName}&app_id=${api_id}&app_key=${api_key}&from=0&to=10`;
    const api_call = await fetch(Url);
    const data = await api_call.json();
    setrecipes(data.hits);
  }
  return (
    <div className="container">
      <div className='row'>
        <div className='col-12 p-3 mb-2 bg-secondary text-white'>
        <h3 className="text-center m-4" >Welcome to recipe search</h3>
      </div>
      <div className="col-12 p-3 mb-2 bg-light text-dark">
        <Search recipe={getRecipe}/>
        </div>
        </div>
      <Recipe data={recipes} />
    </div>
  );
}

export default App;
