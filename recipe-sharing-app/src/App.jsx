// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

// NEW: favourites & recommendations
import FavouritesList from './components/FavouritesList';
import RecommendationList from './components/RecommendationList';

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
                <FavouritesList />
                <RecommendationList />
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
