import React from 'react';
import { useQuery } from '@apollo/client';


import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
         <h1>Home Page</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
