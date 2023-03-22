import React from 'react'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

function Home(){
  return(
    <h2>Home</h2>
  )
}

function About(){
  return(
    <h2>About</h2>
  )
}

function NotFound(){
  return (
    <h2>Page Not Found :(</h2>
  )
}

export default App;
