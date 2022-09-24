import React, { useState } from 'react';
import movies from '../Service/mockData.json';
import { Link,useLocation, useNavigate } from 'react-router-dom';

const Movie = () => {
  const [state, setState] = useState(movies);
  const navigate = useNavigate();
  console.log(movies, '55');
  
  const handleView = (item) => {
    navigate('/view',{state:[item]});
  };
  return (
    <>
      <h1 className="alert alert-primary">movies</h1>
      <div className="row">
        {state.movies.map((items, index) => {
          return (
            <>
              <div className="col-sm-3">
                <div className="card " style={{ width: '18rem' }}>
                  <img src={items.Poster} alt="Image Not Found" />
                  <div className="card-body">
                    <h5 className="card-title">{items.Title}</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>

                    <button
                      class="btn btn-primary"
                      onClick={() => handleView(items)}
                    >
                      View Image full
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Movie;
