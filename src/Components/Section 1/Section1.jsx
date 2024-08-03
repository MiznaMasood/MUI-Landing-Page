import { Grid,Box } from '@mui/material'
import React from 'react'
import style from './Section1.module.css'

const Section1 = () => {
  return (
    <Grid container sx={{ height: 500 }} spacing={2} className={style.container}>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box sx={{ width: "100%", height: "100%",  }}>
         <h1 className={style.heading}>Introduction To <br />
         Jawan Pakistan</h1>
           <br />
         <p className={style.text}>
         The foundation of every state is the education and skills set of its youth. Jawan Pakistan is  such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation and Sustainable Development Goal, which promotes inclusive and sustainable economic growth.
         </p>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box sx={{ width: "50", height: "100%",  }}>
         <img className={style.img1} src="/src/assets/img 1.png" alt="" />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Section1;
