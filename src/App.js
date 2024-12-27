
import './App.css';
import Mediacard from './Components/Mediacard';

function App() {
  return (
    <div className="App">
      <div className='cards'>
        <Mediacard
          title="Honda Civic"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt mi tellus, nec feugiat dui aliquam vitae. Morbi vel scelerisque mauris. Duis aliquet erat nec risus luctus, quis interdum eros placerat. Mauris ultrices at augue sed consequat. Praesent placerat ex diam, sit amet ultricies quam vehicula ut. Aliquam erat volutpat. Sed at dapibus massa. Curabitur at dolor quis mauris elementum convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris pretium velit nec elit porttitor pellentesque."
          img="https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254"
        />
        <Mediacard
          title="Toyota Land Cruiser"
          img="https://cache1.pakwheels.com/system/car_generation_pictures/6008/medium/Land_Cruiser_300_-_PNG.png?1635484577"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt mi tellus, nec feugiat dui aliquam vitae. Morbi vel scelerisque mauris. Duis aliquet erat nec risus luctus, quis interdum eros placerat. Mauris ultrices at augue sed consequat. Praesent placerat ex diam, sit amet ultricies quam vehicula ut. Aliquam erat volutpat. Sed at dapibus massa. Curabitur at dolor quis mauris elementum convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris pretium velit nec elit porttitor pellentesque."
        />
        <Mediacard
          title="Audi Q2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt mi tellus, nec feugiat dui aliquam vitae. Morbi vel scelerisque mauris. Duis aliquet erat nec risus luctus, quis interdum eros placerat. Mauris ultrices at augue sed consequat. Praesent placerat ex diam, sit amet ultricies quam vehicula ut. Aliquam erat volutpat. Sed at dapibus massa. Curabitur at dolor quis mauris elementum convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris pretium velit nec elit porttitor pellentesque."
          img="https://cache4.pakwheels.com/system/car_generation_pictures/6398/original/Audi_Q2_Front.jpg?1650617857"
        />
        <Mediacard
          title="BMW X7"
          img="https://cache3.pakwheels.com/system/car_generation_pictures/5259/original/x7.jpg?1595597831"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt mi tellus, nec feugiat dui aliquam vitae. Morbi vel scelerisque mauris. Duis aliquet erat nec risus luctus, quis interdum eros placerat. Mauris ultrices at augue sed consequat. Praesent placerat ex diam, sit amet ultricies quam vehicula ut. Aliquam erat volutpat. Sed at dapibus massa. Curabitur at dolor quis mauris elementum convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris pretium velit nec elit porttitor pellentesque."
        />
      </div>
      <div className='footer'>
        <h3>Muhammad Yaseen</h3>
        <p>Roll No 263357</p>
      </div>
    </div>
  );
}

export default App;
