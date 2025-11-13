import React from 'react';
import './App.css'; // optional; keep from Vite or remove
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <main style={{ maxWidth: 720, margin: '32px auto', padding: 16 }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </main>
  );
}

export default App;
