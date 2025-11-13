import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generateRecommendations = useRecipeStore((s) => s.generateRecommendations);
  const favorites = useRecipeStore((s) => s.favorites);

  // Refresh recommendations whenever favorites change
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  return (
    <section>
      <h2>Recommended for you</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map((r) => (
          <div key={r.id}>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        ))
      )}
    </section>
  );
};

export default RecommendationsList;
