import React from 'react';
import { useQuery } from '@apollo/client';
import {Subhead, Link} from 'rebass'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'

import { QUERY_PROFILES } from '../utils/queries';

import journal  from  '../assets/images/journal.png';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <div style={{ padding: 70 }}>
    

    <div className="main-content-section">
      <Grid container spacing={24} className='root'>
        
        <Grid item xs={12} sm={6} md={4} className='headline'>
          <Typography align="center" className='heading'>
            My symptom journal
          </Typography>
          <Subhead align="center">
            <Link
              href="/symptoms"
            >
              <img src={journal} alt="health journal" />
            </Link>
          </Subhead>
        </Grid>

     

    

    

        
      </Grid>
    </div>
  </div>
  );
};

export default Home;
