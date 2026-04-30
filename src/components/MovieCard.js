import React from 'react';

const MovieCard = ({movie}) => {
  return (
    <div className="movie-container"> 
      
      <div className="background-overlay"></div>
      
      <div className="content-wrapper">
        
        <div className="info-section">
             <a href="https://www.freelogovectors.net/encanto-logo-01/">
             <img className='disney-logo' src="https://www.freelogovectors.net/wp-content/uploads/2023/04/encantologo-freelogovectors.net_.png" 
             alt="Encanto Logo [01]"/></a>
             
          <div className="meta-data">
            <span>2021</span>
            <span className="separator">|</span>
            <span className="age-rating">7+</span>
            <span className="separator">|</span>
            <span>1h 42m</span>
            <span className="separator">|</span>
            <span>Language : English - Spanish</span>
          </div>

          <div className="main-details">
            <img 
              src="https://fr.web.img6.acsta.net/pictures/21/09/29/10/15/0378531.jpg" 
              alt="Encanto Poster" 
              className="mini-poster"
            />
            <div className="description">
              <p className="director">Directed by : <strong>Byron Howard, Jared Bush</strong></p>
              <p className="summary">
                A Colombian teenage girl has to face the frustration of being the only 
                member of her family without magical powers.
              </p>
              <div className="genre-tags">
                <span>Fantasy</span>
                <span>Family</span>
                <span>Music</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rating-section">
          <div className="rating-circle">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path className="circle-bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path className="circle"
                strokeDasharray="85, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="21.5" className="percentage">8.5</text>
            </svg>
          </div>
          <span className="brand-watermark">dear<b>rev_</b></span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;