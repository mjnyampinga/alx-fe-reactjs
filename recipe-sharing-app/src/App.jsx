import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <main style={{ maxWidth: 720, margin: '32px auto', padding: 16 }}>
      <header><Link to="/">Home</Link></header>
      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </main>
  );
}
export default App;
