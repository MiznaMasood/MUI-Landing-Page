import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from './Section4.module.css';

function BasicExample() {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>IT Trainings Offering in Jawan Pakistan</h1>
      <div className={style.cardContainer}>
        <Card className={style.card}>
          <Card.Img variant="top" src="/src/assets/web dev.png" />
          <Card.Body>
           
            <Card.Text>Web and Mobile Application Development</Card.Text>
            
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Card.Img variant="top" src="/src/assets/flutter.jpeg" />
          <Card.Body>
        
            <Card.Text>Flutter Mobile Application Development</Card.Text>
            
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Card.Img variant="top" src="/src/assets/graphic.jpg" />
          <Card.Body>
      
            <Card.Text>Graphic Design And Video Editing</Card.Text>
            
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Card.Img variant="top" src="/src/assets/digital.png" />
          <Card.Body>
            
            <Card.Text>Digital And Social Media Marketing
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Card.Img variant="top" src="/src/assets/blockchain.jpg" />
          <Card.Body>
          
            <Card.Text>BlockChain Development</Card.Text>
            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;
