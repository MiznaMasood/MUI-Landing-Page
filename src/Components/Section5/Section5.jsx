import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import img1 from '../../assets/std1.jpg';
import img2 from '../../assets/std 2.jpg';
import img3 from '../../assets/std 3.jpg';
import img4 from '../../assets/std 4.jpg';
import img5 from '../../assets/std 5.jpg';
import img6 from '../../assets/std 6.jpg';
import style from './Section5.module.css'


const CardComponent = ({ title, description, image, height }) => {
  return (
    <Card sx={{ height: height }}>
      <CardMedia
        component="img"
        height="100%"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const CardRow = () => {
  const cards = [
    { image: img1, height: 500, title: 'Title 1', description: 'Description 1' },
    { image: img2, height: 300, title: 'Title 2', description: 'Description 2' },
    { image: img3, height: 500, title: 'Title 3', description: 'Description 3' },
    { image: img4, height: 300, title: 'Title 4', description: 'Description 4' },
    { image: img5, height: 300, title: 'Title 5', description: 'Description 5' },
    { image: img6, height: 300, title: 'Title 6', description: 'Description 6' },
  ];

  return (
    <div className={style.container}>
    <Box mt={5}>
      <Typography className={style.heading} variant="h4" color="#006838" textAlign="center" my={5} fontWeight="bold">
        Glimpses of sessions conducted by Jawan Pakistan
      </Typography>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={index % 3 === 0 ? 12 : 6} md={index % 3 === 0 ? 6 : 3} key={index}>
              <CardComponent
                title={card.title}
                description={card.description}
                image={card.image}
                height={card.height}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    </div>
  );
};

export default CardRow;

