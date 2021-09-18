import React, { useState, useEffect, Suspense} from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import SearchBar from "../components/SeachBar";
import Scroll from "../components/Scroll";
import { useSelector, useDispatch } from 'react-redux';
import {fetchRobots} from '../features/robots/robotsSlice';
import {increment} from "../features/counter/counterSlice";

const CardList = React.lazy(() => import("../components/CardList"));

const App = () => {
  const robots = useSelector((state) => state.robots.robots);
  const loading = useSelector((state) => state.robots.loading);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchRobots())
  }, [dispatch]);

  const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(search.toLowerCase()));
  const incrementCount = () => {
    dispatch(increment());
  };

  return <div className="App">
    <header className="App-header">
      <h1>Robofriends</h1>
      <button className="btn" onClick={incrementCount}>{`I've been clicked ${count} times`}</button>
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
