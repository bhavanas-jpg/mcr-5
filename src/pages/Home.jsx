import React from 'react'
import { useData } from '../context/DataContext';

const Home = () => {

  const {name}= useData();
  console.log(name);
  return (
    <div>Home</div>
  )
}

export default Home