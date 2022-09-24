import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Count from './Count';
import PageNotFound from './PageNotFound';
import Employee from './Employee';
import CountRedux from './CountRedux';
import Movie from './Movie';
import ViewImage from './ViewImage';
import WatchMovie from './WatchMovie'
const NavBar = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/home">
            {' '}
            <span>Home</span>{' '}
          </Link>
          <Link to={'/count'}>
            <span>Count</span>{' '}
          </Link>
          <Link to={'/employee'}>
            <span>Employee</span>{' '}
          </Link>

          <Link to={'/movie'}>
            <span>Movies</span>{' '}
          </Link>
          <Link to={'/countredux'}>
            <span>Count Redux</span>{' '}
          </Link>
        </div>
        <div>
          <Routes>
            <Route path="/movie" element={<Movie />} />
            <Route path="/home" element={<Home />} />
            <Route path="/count" element={<Count />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/countredux" element={<CountRedux />} />
            <Route path="/view" element={<ViewImage />} />
            <Route path="/watchMovie" element={<WatchMovie />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default NavBar;
