// import React from 'react';

// const Banner = () => {
//   return (
//     <div className="banner">
//       <h1>Welcome to BookMyShow 2.0</h1>
//       <p>Experience movies like never before!</p>
//     </div>
//   );
// };

// export default Banner;

// // import React from 'react';
// // import './Banner.css';

// // const Banner = () => {
// //   const images = [
// //     'https://th.bing.com/th/id/OIP.J-3IbFTgq97KOfeKXwqbkQHaEe?rs=1&pid=ImgDetMain',
// //     'https://th.bing.com/th/id/R.a5157ffb857ec7541eb8ce8937b90a0d?rik=jDi3J1vngyRIhw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2f1080p-Movie-Wallpapers-For-Desktop.jpg&ehk=4lRlVWJO41a7Abn1vpPl6%2b0Ty9lUri4ZHud1rpvj2SM%3d&risl=&pid=ImgRaw&r=0',
// //     'https://cdn.vectorstock.com/i/preview-1x/52/61/movie-cinema-poster-flying-popcorn-tape-vector-27045261.jpg',
  
// //   ];

// //   return (
// //     <div className="banner-container">
// //       <div className="banner-track">
// //         {images.concat(images).map((img, index) => (
// //           <img key={index} src={img} alt={`banner-${index}`} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };
// // export default Banner;





// import React from 'react';
// import './Banner.css';

// const Banner = () => {
  // const images = [
  //   'https://th.bing.com/th/id/R.a5157ffb857ec7541eb8ce8937b90a0d?rik=jDi3J1vngyRIhw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2f1080p-Movie-Wallpapers-For-Desktop.jpg&ehk=4lRlVWJO41a7Abn1vpPl6%2b0Ty9lUri4ZHud1rpvj2SM%3d&risl=&pid=ImgRaw&r=0',
  //   'https://th.bing.com/th/id/OIP.1TDxlW4gnL97TFrzHtu-EwHaEK?rs=1&pid=ImgDetMain',
  //   'https://images-geeknative-com.exactdn.com/wp-content/uploads/2020/10/09231518/horror-movie-villians.jpg?strip=all&lossy=1&ssl=1',
  //   'https://th.bing.com/th/id/OIF.eZzr9uW4uVwLLIuoBszjXA?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  //   'https://th.bing.com/th/id/OIP.BPtj8-d0EfO0Ym9PcBeAsQHaEo?w=290&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  
  // ];
// 
//   return (
//     <div className="banner-container">
//       <div className="banner-images">
//         {images.map((img, index) => (
//           <img key={index} src={img} alt={`banner-${index}`} />
//         ))}
//         {images.map((img, index) => (
//           <img key={`dup-${index}`} src={img} alt={`banner-dup-${index}`} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;


import React, { useState } from 'react';
import './Banner.css';

const Banner = () => {
 
  const images = [
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

