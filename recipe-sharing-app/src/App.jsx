// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <main style={{ maxWidth: 720, margin: '32px auto', padding: 16 }}>
        <header style={{ marginBottom: 16 }}>
          <Link to="/">Home</Link>
        </header>

        <Routes>
          <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
