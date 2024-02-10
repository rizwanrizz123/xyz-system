import React from 'react'
import Header from '../components/Header'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image1 from '../assets/membership.jpg'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import image2 from '../assets/img1.jpg';
import image3 from '../assets/img2.jpg';
import image4 from '../assets/img3.jpg';
import './Home.css';
/* import ExampleCarouselImage from 'components/ExampleCarouselImage'; */

function Home() {
  return (
    <div>
        <Header/>
        <div className='content-wrapper'>
        <div className='navigation-outer'>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Dashboard</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">Transactions</Nav.Link>
            <Nav.Link href="#link">Journal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
        </div>
        <div className='content-wrapper'>
            <div className='profile-icon'><i className="header-icon fa-solid fa-user-tie fa-2x"></i></div>
        </div>
        <div className='content-wrapper'>
        <div className="module-sec-wrap">
        <div className="module-sec-wrapper-1">
            <h2>New Arrival</h2>
            <h6>JOIN TODAY</h6>
            <div className='module-sec-img-wrap'>
            <img width={'200px'} height={'auto'} src={image1} alt="no image" />
            <Button className='mt-3 button-join-now' variant="secondary">JOIN NOW</Button>
            </div>
            
        </div>
        <div className="module-sec-wrapper-2">
            <div className='d-flex align-items-center justify-content-center mt-4'>
                <h2 className='carousel-head'>Unlock Premium Features Now</h2>
            </div>
            <div className="container carousel-outer">
            <Carousel interval={null} >
      <Carousel.Item>
      <Card className='carousel-tile'>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title className='text-center text-success'><h2>Lower</h2></Card.Title>
        <Card.Text className='text-center text-success'>
          <h4>Interest Rates</h4>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='carousel-tile'>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title className='text-center text-success'><h2>Interest</h2></Card.Title>
        <Card.Text className='text-center text-success'>
          <h4>Free Payments</h4>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='carousel-tile'>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title className='text-center text-success'><h2>Discount on</h2></Card.Title>
        <Card.Text className='text-center text-success'>
          <h4>Materials</h4>
        </Card.Text>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card className='carousel-tile'>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title className='text-center text-success'><h2>Lower</h2></Card.Title>
        <Card.Text className='text-center text-success'>
          <h4>Interest Rates</h4>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='carousel-tile'>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title className='text-center text-success'><h2>Interest</h2></Card.Title>
        <Card.Text className='text-center text-success'>
          <h4>Free Payments</h4>
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className='carousel-tile'>
      <Card.Img variant="top" src={image3} />
      <Card.Body>
        <Card.Title className='text-center text-success'><h2>Discount on</h2></Card.Title>
        <Card.Text className='text-center text-success'>
          <h4>Materials</h4>
        </Card.Text>
      </Card.Body>
    </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card className='carousel-tile'>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title className='text-center text-success'><h2>Lower</h2></Card.Title>
        <Card.Text className='text-center text-success'>
          <h4>Interest Rates</h4>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='carousel-tile'>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title className='text-center text-success'><h2>Interest</h2></Card.Title>
        <Card.Text className='text-center text-success'>
          <h4>Free Payments</h4>
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className='carousel-tile'>
      <Card.Img variant="top" src={image4} />
      <Card.Body>
        <Card.Title className='text-center text-success'><h2>Discount on</h2> </Card.Title>
        <Card.Text className='text-center text-success'>
          <h4>Materials</h4>
        </Card.Text>
      </Card.Body>
    </Card>
      </Carousel.Item>
    </Carousel>
    <div className='d-flex justify-content-center align-items-center flex-column mt-3'>
        <Button className='mt-3 carousel-buttons' variant="success">Unlock Now</Button>
        <Button className='mt-3 carousel-buttons' variant="success">Details</Button>
    </div>

            </div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default Home