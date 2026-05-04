import React, {useState} from 'react';
import { Star, Play } from 'lucide-react';
import './MovieVault.css'; 
import AddMovie from './AddMovie';
import Filter from './Filter';
import { Link } from 'react-router-dom';



const MovieVault = () => {

  const Films = [
    {
      id: 1,
      title: "Zootopia",
      info: "PG / 1h 42m / Fantasy",
      desc: "Zootopie est une ville cosmopolite où ne vivent que des mammifères et où chaque espèce cohabite avec les autres.",
      stars: 5,
      img: "https://tse4.mm.bing.net/th/id/OIP.NbAAy2PHtTD6wNwk1bkcJAHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 2,
      title: "Frozen II",
      info: "PG / 1h 43m / Adventure",
      desc: "Elsa cherche à découvrir la vérité sur ses pouvoirs magiques dans une forêt enchantée.",
      stars: 3,
      img: "https://tse4.mm.bing.net/th/id/OIP.azNOvc0XjMxgRlgLwzWxGQHaLH?w=736&h=1104&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 3,
      title: "Moana",
      info: "PG / 1h 47m / Adventure",
      desc: "Moana navigue sur l'océan pour sauver son île et rendre son cœur à Te Fiti.",
      stars: 5,
      img: "https://image.tmdb.org/t/p/original/9tzN8sPbyod2dsa0lwuvrwBDWra.jpg"
    },
    {
      id: 4,
      title: "The Lion King",
      info: "PG / 1h 58m / Drama",
      desc: "Simba doit reprendre sa place en tant que roi légitime de la Terre des Lions.",
      stars: 4,
      img: "https://tse2.mm.bing.net/th/id/OIP.lrd7hUat9EF2pFGkBFa96wHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 5,
      title: "Ratatouille",
      info: "G / 1h 51m / Comedy",
      desc: "Un rat talentueux en cuisine aide un jeune homme à devenir un grand chef à Paris.",
      stars: 2,
      img: "https://tse1.mm.bing.net/th/id/OIP.NDxgFFBrwvjINfMV1vBIhgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 6,
      title: "Tangled",
      info: "PG / 1h 40m / Musical",
      desc: "Raiponce part à la découverte des lanternes volantes avec le voleur Flynn Rider.",
      stars: 5,
      img: "https://tse4.mm.bing.net/th/id/OIP.p5kJnrWdIhaLNkILlFdpfADKEs?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];
    const [ films, setFilms] = React.useState(Films);
    const [searchTerm, setSearchTerm] = useState("") ;
    const [filterRating, setFilterRating] = useState(0);

    const filteredFilms = films.filter(film => {
      return (
        film.title.toLowerCase(). startsWith(searchTerm.toLowerCase()) &&
        (filterRating === 0 || film.stars === filterRating)
      );
    });
    
    
    const handleAdd = (data) => {
        const movieWithId = { ...data, id: Date.now() };
        setFilms((prevFilms) =>[...prevFilms, movieWithId]);
        console.log("", movieWithId);
    };
    const handleStarClick = (filmId, starIndex) => {
    const updatedFilms =films.map(film =>{
        if (film.id === filmId) {
            const newRating = starIndex + 1;
            return {...film, stars: film.stars === newRating ? 0 : newRating};
        }
        return film;
    });
    setFilms(updatedFilms);
  }

  return (
    <div className="movie-vault-display">
      <Filter
       searchTerm={searchTerm}
       setSearchTerm={setSearchTerm}
       filterRating={filterRating}
       setFilterRating={setFilterRating}
      />

      <div className="cards-grid-system">
        
        {filteredFilms.map((film) => (
          <div key={film.id} className="film-card-wrapper">
            <div className="image-layer">
              <img src={film.img} alt={film.title} />
            </div>
            
            <div className="content-overlay-layer">
              <h2 className="film-main-title">{film.title}</h2>
              <p className="film-meta-tags">{film.info}</p>
              
              <div className="summary-section">
                <h4 className="film-summary-label">SUMMARY</h4>
                <p className="film-summary-paragraph">{film.desc}</p>
              </div>
              
              <div className="rating-stars-container">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className="star-icon"
                    style={{ cursor: 'pointer'}}
                    fill={i < film.stars ? "#FFD700" : "none"} 
                    color={i < film.stars ? "#FFD700" : "#4b5563"} 
                    onClick={() => handleStarClick(film.id, i)}
                  />
                ))}
                
              </div>
              
              <Link to={'/movie/${film.id}'} className='trailer-action-button' style={{textDecoration: 'none'}}>
                <Play size={16} fill='currentColor'/>
                WATCH TRAILER
              
              </Link>
            </div>
          </div>
        ))}
        <AddMovie onAdd={handleAdd}/>
      </div>
    </div>
  );
};

export default MovieVault;