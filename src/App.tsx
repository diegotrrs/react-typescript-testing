import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocalStorageComponent from './hooks/1/LocalStorageComponent'
import CountryComponent from './other/countries_example/CountryComponent'
import CountComponent from './context/1/CountComponent'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import MoviesComponent from './other/countries_example/MoviesComponent';


function Appx() {
  return (
    <BrowserRouter>
      <div className="App">
        <CountryComponent/>
      </div>
    </BrowserRouter>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Basic Example</h1>

        {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route  path="country" element={<CountryComponent />} />
            <Route path="movies" element={<MoviesComponent />} /> 

            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/country">Country</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App;
