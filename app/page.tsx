'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState();

  const fetchApi = async () => {
    try {
      const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=1b3ca51f');
      setData(response?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className='min-h-screen text-blue-600'>
      {data?.Plot && <p>{data.Plot}</p>}
      {data?.Poster && <img src={data.Poster} alt='Movie Poster' />}
    </div>
  );
}
