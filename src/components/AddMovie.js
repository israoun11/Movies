import React, { useState } from 'react';
import './AddMovie.css';

const AddMovie = (props) => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({ title: '', info: '', desc: '', stars: 5, img: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.onAdd){
            props.onAdd(formData);
        } else {
            console.error ('')
        }
        setShow(false);
        setFormData({ title: '', info: '', desc: '', stars: 5, img: '' });
    };

    return (
        <div className="add-movie-section">
            <button className="plus-btn" onClick={() => setShow(true)}>+</button>
            
            {show && (
                <div className="modal-overlay">
                    <form className="add-form" onSubmit={handleSubmit}>
                        <h3>Add New Movie</h3>
                        
                        <input 
                          type="text" 
                          placeholder="Title" 
                          value={formData.title} 
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
                        />


                        <input 
                          type="text" 
                          placeholder="Image URL" 
                          value={formData.img} 
                          onChange={(e) => setFormData({ ...formData, img: e.target.value })} 
                        />


                        <textarea 
                          placeholder="Description" 
                          value={formData.desc} 
                          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                          ></textarea>

                      
                        <div className="form-btns">
                            <button type="button" onClick={() => setShow(false)}>Cancel</button>
                            <button type="submit" className="submit-btn">Add Now</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddMovie;