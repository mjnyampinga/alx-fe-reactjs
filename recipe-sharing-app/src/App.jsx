// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

// Use EXACT expected names/paths
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <main style={{ maxWidth: 720, margin: '32px auto', padding: 16 }}>
        <header style={{ marginBottom: 16 }}>
          <Link to="/">Home</Link>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
                {/* NEW sections */}
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
