import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_BIRDS } from '../graph-ql/Queries';

function GetBirds() {
  const { error, loading, data } = useQuery(LOAD_BIRDS);

  const [birds, setBirds] = useState([]);

  useEffect(() => {
    // runs once before variable loads and tthen when variable changes

    console.log('data', data);
    
    if (data) {
      setBirds(data.getAllBirds);
    }
  }, [data]);

  return (
    <div>
      {birds.map((bird) => (
        <h1>{bird.common_name}</h1>
      ))}
    </div>
  );
}

export default GetBirds;
