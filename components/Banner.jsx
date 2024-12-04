import React from "react";

const Banner = () => {
  return (
    <div className="banner">  
      <img
        src="https://storage.googleapis.com/kaggle-datasets-images/2386660/4027809/a91d3c271ab420776f16d06c52109edd/dataset-cover.jpg?t=2022-08-04-09-13-14" // Background image
        alt="Netflix Banner"
        className="banner-image"
      />
      <div className="banner-text">
      <h1
  className="main-heading"
  style={{
    fontSize: '4.5em', // Increases the font size
    fontWeight: '900', // Applies maximum boldness
  }}
>
  Ulimited movies, TV shows, and more.
</h1>

        <p className="sub-heading">Starts at Rs.149. Cancel at any time.</p>
        <p className="ready-text">Ready to watch? Enter your email to create or restart your membership.</p>
        <input type="email" placeholder="Enter your email" className="email-input" />
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;

// https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg