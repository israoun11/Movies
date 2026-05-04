import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '20px', cursor: 'pointer' }}>
        Back to Home
      </button>

      
      <div className="video-section">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jWM0ct-OLsM?si=uyQRm_FHnmiYv0cM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      
      <h2>Movie Description</h2>
      <p>Zootopie est une ville cosmopolite où ne vivent que des mammifères et où chaque espèce cohabite avec les autres.</p>
    </div>
  );
};

export default MovieDetails;