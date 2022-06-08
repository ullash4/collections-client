import React from "react";
import { Link } from "react-router-dom";
import bg from '../../assetes/bg.png'

function Home() {
  return (
    <div class="hero min-h-screen" style={{ backgroundImage:`url(${bg})` }}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md text-white">
      <h1 class="mb-5 text-5xl font-bold">Hello There</h1>
      <p class="mb-5">You Need to Signup or Login to see Candidates</p>
      <Link to={'/candidateslist'} class="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
  );
}

export default Home;
