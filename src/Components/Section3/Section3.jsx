import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import style from './Section3.module.css';
import { FaQuoteRight } from "react-icons/fa";

const Section3 = () => {
  return (
    <Box className={style.container}>
      <Avatar
        alt="Sir"
        src="/src/assets/Sir img.jpg"
        className={style.img3}
      />
      <Stack alignItems="center" spacing={2} className={style.stack}>
        <Typography variant="h4" color="#006838" fontWeight="bold" textAlign="center">
          MUHAMMAD ALI MUGHAL
        </Typography>
        <Typography variant="subtitle1" color="grey" textAlign="center">
          Founder of Jawan Pakistan
        </Typography>
        <Typography variant="h3" color="grey" textAlign="center" sx={{ maxWidth: '600px', marginTop: '16px' }}>
          <FaQuoteRight />
        </Typography>
        <Typography color="grey" textAlign="center" sx={{ maxWidth: '600px', marginTop: '16px' }}>
          We aim to be the most efficient provider of business process outsourcing services by setting the industry standards for cost and quality of services. Our long-term success will be driven by our relentless focus on recruiting and developing the most talented pool of human capital in our industry.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Section3;





