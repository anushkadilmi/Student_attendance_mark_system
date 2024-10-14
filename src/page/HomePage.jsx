import React from 'react';
import '../styles/HomePage.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"  
    >
      
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/image1.jpg" className="d-block w-100" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>1. Track Attendance Seamlessly</h5>
            <p>Stay on top of student attendance with real-time updates.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/image2.jpg" className="d-block w-100" alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>2. Monitor Student Performance</h5>
            <p>Assess students' progress based on attendance and performance.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/image3.png" className="d-block w-100" alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>3. Efficient Grading</h5>
            <p>Streamline the process of assigning and recording grades with ease.</p>
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

     
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;