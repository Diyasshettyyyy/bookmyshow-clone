import React, { useState } from 'react';
import './Banner.css';

const Banner = () => {
 
  const images = [
    'https://i.ytimg.com/vi/7lYk5gInBy0/maxresdefault.jpg',
    'https://i.ebayimg.com/images/g/GtEAAOSw1W9eN1cY/s-l1200.webp',
    'https://th.bing.com/th/id/R.a5157ffb857ec7541eb8ce8937b90a0d?rik=jDi3J1vngyRIhw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2f1080p-Movie-Wallpapers-For-Desktop.jpg&ehk=4lRlVWJO41a7Abn1vpPl6%2b0Ty9lUri4ZHud1rpvj2SM%3d&risl=&pid=ImgRaw&r=0',
    'https://images-geeknative-com.exactdn.com/wp-content/uploads/2020/10/09231518/horror-movie-villians.jpg?strip=all&lossy=1&ssl=1',
    'https://th.bing.com/th/id/R.87c4632fe21265c748a36d55625e68db?rik=BobzwEPqdPVs9w&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f12800000%2fInception-Banner-inception-2010-12831726-2000-919.jpg&ehk=vbT3fLpSwhlbe%2f5LQTiUVQOC%2bQdWLlogknzYzOXw8BE%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.8ec89a6654b8b35dafadc0d6d47b8380?rik=WmyYTrhwfHtZKQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fRCVFSiJ.jpg&ehk=BNAA9pzYYJYVHkwXGE1pfwfA%2fdbU%2fMAvaiFB7Ip3uGA%3d&risl=&pid=ImgRaw&r=0'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="banner-container">
      <button className="arrow-btn left" onClick={prevSlide}>❮</button>
      <div
        className="banner-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`banner-${index}`} />
        ))}
      </div>
      <button className="arrow-btn right" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Banner;

