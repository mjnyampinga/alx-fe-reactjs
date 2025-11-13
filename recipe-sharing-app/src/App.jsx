import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <main style={{ maxWidth: 720, margin: '32px auto', padding: 16 }}>
      <header style={{ display:'flex', gap:12, alignItems:'center', marginBottom:16 }}>
        <h1 style={{ margin:0 }}>Recipe Sharing App</h1>
        <Link to="/">Home</Link>
      </header>

      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </main>
  );
}

export default App;
