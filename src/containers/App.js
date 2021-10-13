import React, { useState, useEffect, Suspense} from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import SearchBar from "../components/SeachBar";
import Scroll from "../components/Scroll";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from 'react-redux';
import {fetchRobots} from '../features/robots/robotsSlice';

const CardList = React.lazy(() => import("../components/CardList"));

const App = () => {
  const robots = useSelector((state) => state.robots.robots);
  const loading = useSelector((state) => state.robots.loading);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchRobots())
  }, [dispatch]);

  const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(search.toLowerCase()));

  return <div className="App">
    <header className="App-header">
      <h1>Robofriends</h1>
      <Counter />
      <SearchBar setSearch={setSearch} />
    </header>
    <ErrorBoundary>
      <Scroll>
        <Suspense fallback={<div></div>}>
          {loading ? <h1>Loading...</h1> : <CardList cards={filteredRobots}/>}
        </Suspense>
      </Scroll>
    </ErrorBoundary>
  </div>
}

export default App;
