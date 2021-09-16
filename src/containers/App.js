import React, { useState, useEffect, Suspense} from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import SearchBar from "../components/SeachBar";
import Scroll from "../components/Scroll";
import { useSelector, useDispatch } from 'react-redux';
import {fetchRobots} from '../features/robots/robotsSlice';

//import CardList from "../components/CardList";
const CardList = React.lazy(() => import("../components/CardList"));

const App = () => {
  // const [robots, setRobots] = useState([]);
  const robots = useSelector((state) => state.robots.robots);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  // dispatch(fetchRobots());

  useEffect(() => {
    // const configUsers = users => {
    //   return users.map(user => createImgSrc(user));
    // };

    // const createImgSrc = (user) => {
    //   user.imgSrc = `https://robohash.org/${user.id}.png`;
    //   user.imgAlt = user.name;
    //   return user;
    // };

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => {
    //     //setRobots(configUsers(users));
    //     dispatch(success(configUsers(users)));
    //   })
    //   .catch(error => dispatch(failed(error)));
    dispatch(fetchRobots())
  }, [dispatch]);

  const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(search.toLowerCase()));

  return robots.length ? (
    <div className="App">
      <header className="App-header">
        <h1>Robofriends</h1>
        <SearchBar setSearch={setSearch} />
      </header>
      <ErrorBoundary>
        <Scroll>
          <Suspense fallback={<div></div>}>
            <CardList cards={filteredRobots}/>
          </Suspense>
        </Scroll>
      </ErrorBoundary>
    </div>
  ) : (
    <h1 className="absolute-center">Loading...</h1>
  );
}

export default App;
