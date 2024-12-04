import React from "react";
import "./MainContent.css"; // Styles for MainContent

const MainContent = () => {
  return (
    <div className="mainContent">
      <header className="mainContent__banner">
        <h1 className="mainContent__title">
          Unlimited Movies, <br /> TV Shows and <br /> More
        </h1 >
        
                <h3 className="cancel">Starts at Rs.149 Cancel at any time.</h3>
        
      </header>
      <div className="ready">
        Ready to Watch? Enter your email to create or restart your membership.
         
      </div><div><input
          type="email"
          id="email"
          placeholder="Email address"
        />
        <button className="join-now">
          Join Now &gt;
        </button></div>
    </div>
  );
};
export default MainContent;  

