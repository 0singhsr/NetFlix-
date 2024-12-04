import React, { useRef } from 'react';
import './Row.css'; // Assuming you have this file for styling

const Row = ({ title, movies }) => {
  const rowRef = useRef(null);

  // Scroll left function
  const scrollLeft = () => {
    rowRef.current.scrollLeft -= 200; // Adjust the value for desired scroll distance
  };

  // Scroll right function
  const scrollRight = () => {
    rowRef.current.scrollLeft += 200; // Adjust the value for desired scroll distance
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__buttons">
        <button className="scroll__button left" onClick={scrollLeft}>
          &lt;
        </button>
        <button className="scroll__button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
      <div className="row__posters" ref={rowRef}>
        {movies.map((movie, index) => (
          <img
            key={index}
            className="row__poster row__posterLarge"
            src={movie.image}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;



// import React from "react";
// import "./Row.css";  // Styles for Row

// const Row = ({ title, movies }) => {
//   return (
//     <div className="row">
//       <h2>{title}</h2>
//       <div className="row__posters">
//         {movies.map((movie, index) => (
//           <div key={index} className="row__poster">
//             <img src={movie.image} alt={movie.title} />
//             <div>{movie.title}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Row;
