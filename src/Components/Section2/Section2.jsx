import { Grid,Box } from '@mui/material'
import React from 'react'
import style from './Section2.module.css'

const Section2 = () => {
  return (
    <Grid container sx={{ height: 500 }} spacing={2} className={style.container}>

         <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box sx={{ width: "50", height: "50%",  }}>
   <img className={style.img2} src="/src/assets/img2.png" alt="" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={6}>
        <Box sx={{ width: "100%", height: "100%",  }}>
         <h1 className={style.heading}> Mission And Vision <br />
         Behind Jawan Pakistan
         </h1>
           <br />
         <p>
         Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. minimizing frustration among the unemployed youth.
  <br />
  <br />
Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy.
         </p>
        </Box>
      </Grid>
     
    </Grid>
  )
}

export default Section2;