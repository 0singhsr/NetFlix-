import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Row from './components/Row';
import MoreReasons from './components/MoreReasons';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  // Static data for trending now movies
  const trendingMovies = [
    { title: "", image: "https://th.bing.com/th/id/OIP.pY9D-93aggz7ZfSvx3xyRwHaLH?pid=ImgDet&w=204&h=306&c=7" },
    { title: "", image: "https://upload.wikimedia.org/wikipedia/en/f/f0/Devara_Part_1.jpg?20241001072553" },
    { title: "", image: "https://th.bing.com/th?id=OIP.Q_bHL-eFRhk86hai5AaZvAHaLk&w=200&h=312&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" },
    { title: "", image: "https://th.bing.com/th/id/OIP.Ey3DmDcvibzmgk3wrYRl3QAAAA?w=130&h=183&c=7&r=0&o=5&pid=1.7" },
    { title: "", image: "https://th.bing.com/th/id/OIP.d327N07-9kGIXyMni0kdIQHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7" },
    { title: "", image: "https://th.bing.com/th/id/OIP.fi7RTb-HwsJGSUStvnSGHgAAAA?w=115&h=180&c=7&r=0&o=5&pid=1.7" },
    { title: "", image: "https://th.bing.com/th/id/OIP.o-Y1L7_alVDGvhFm9y9-XgHaLG?w=115&h=180&c=7&r=0&o=5&pid=1.7" },
    { title: "", image: "https://th.bing.com/th/id/OIP.4sim7hBFWXxipKCIRpVa9wHaK-?w=116&h=180&c=7&r=0&o=5&pid=1.7" },
    { title: "", image: "https://th.bing.com/th/id/OIP.4sim7hBFWXxipKCIRpVa9wHaK-?w=116&h=180&c=7&r=0&o=5&pid=1.7" },
    { title: "", image: "https://th.bing.com/th/id/OIP.4sim7hBFWXxipKCIRpVa9wHaK-?w=116&h=180&c=7&r=0&o=5&pid=1.7" },

  ];

  return (
    <div className="app">
      <Header />
      <MainContent />
      <Row title="Trending Now" movies={trendingMovies} />
      <MoreReasons />
      <Faqs />
      <Footer />
    </div>
  );
};

export default App;
