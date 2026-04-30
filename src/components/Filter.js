import React from 'react';
import { Star } from 'lucide-react';

const Filter = ({ searchTerm, setSearchTerm, filterRating, setFilterRating }) => {
  return (
    <div className="filter-container" style={{ display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'center', padding: '20px', background: '#111', borderRadius: '15px' }}>
      
      <input 
        type="text" 
        placeholder="Search by title..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        style={{ background: '#000', color: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #333', width: '250px' }}
      />
      
     
      <div className="rating-filter" style={{ display: 'flex', gap: '5px' }}>
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={24}
            onClick={() => setFilterRating(i + 1 === filterRating ? 0 : i + 1)}
            fill={i < filterRating ? "#FFD700" : "none"}
            color={i < filterRating ? "#FFD700" : "#ccc"}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;