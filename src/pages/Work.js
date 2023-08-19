import React from 'react';
import "../style.css";

const imagesData = [
  {
    name: 'Home-Based Fitness Workout',
    description: 'The user-friendly smartphone app "home-based fitness workout" was created to offer people simple, efficient training routines they can perform in the comfort of their own homes. Our software provides a huge selection of fully personalized workout schedules catered to various fitness levels, objectives, and interests.',
    imageUrl: 'https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.15752-9/366793800_693331505941866_2138834049532102568_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHTMuHsuFRCRrE5h-J8lJH8VKNOqCZTfYlUo06oJlN9iXGuK9n77OOPvDZHpFzKAqu0znbeyQCghC15Gn3dAFui&_nc_ohc=dyZZ8m7PpxMAX-CMf67&_nc_ht=scontent.fmnl8-1.fna&oh=03_AdQ988eLJHzUn52B12LXcIRoKvdIQKNjVjWkUBoa11dXRg&oe=6506D36D',
  },
  {
    name: 'Naspi Food',
    description: 'Welcome to NaspiFood, a delicious culinary website where flavors come to life! We are your go-to source for culinary inspiration, providing a delectable selection of recipes, cooking advice, and culinary adventures. Find inventive methods to improve your dining experience, learn cooking tricks, and experience the delight of discovering new cuisines. Enjoy the flavors, celebrate your passion of food, and start your culinary journey now! Bon appetite!',
    imageUrl: 'https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.15752-9/366363558_677204504281228_6003677543616318604_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE0UJa-H_b7DtMi86IU4ryhd4nHuUYCQ953ice5RgJD3ulPhJLQtmxU4w_tdk_OnPemGydvKx1QgVaUjLq-K7ZU&_nc_ohc=GiI0DeU8UMgAX8q8FNQ&_nc_ht=scontent.fmnl25-1.fna&oh=03_AdQGELNM1MpxKQf4Tn7DaWKuPViv2KNrrDhKS4DzNJxDIQ&oe=6506DFDA',
  },
  {
    name: 'Personal Profile',
    description: 'Welcome to my simple personal profile website, where you can discover the essence of who I am. Here, simplicity meets substance, allowing you to explore my background, skills, and passions with ease. Whether youre a potential employer, collaborator, or just a curious visitor, I hope this simple profile gives you a clear understanding of my personality and what drives me.',
    imageUrl: 'https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.15752-9/366360521_1370323663547237_8246706208200325062_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEoM45bomwXNVZgETZtVRK16oYb2K6QgzrqhhvYrpCDOrxWHLZg5i0pnGA9MNJTyoQq5fTc2aI8F8v1xMq9v4Yy&_nc_ohc=tv1fCVY_psQAX_-JL6I&_nc_ht=scontent.fmnl8-3.fna&oh=03_AdQk0VQy45NPWL91NiR9-UZVNT-VaqIp6mm8TfnNGYXZGw&oe=6506C076',
  },
];

function App() {
  return (
    <div className="App">
      <h1>3 Website/Mobile App i develop</h1>
      <div className="image-container">
        {imagesData.map((image, index) => (
          <div className="image-card" key={index}>
            <img src={image.imageUrl} alt={image.name} />
            <h2>{image.name}</h2>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}






export default App;