import React, { useState, useEffect} from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";
import SearchBar from "../components/SeachBar";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const configUsers = users => {
      return users.map(user => createImgSrc(user));
    };

    const createImgSrc = (user) => {
      user.imgSrc = `https://robohash.org/${user.id}.png`;
      user.imgAlt = user.name;
      return user;
    };

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setRobots(configUsers(users));
      });
  }, []);

  const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(search.toLowerCase()));

  return robots.length ? (
    <div className="App">
      <header className="App-header">
        <h1>Robofriends</h1>
        <SearchBar setSearch={setSearch} />
      </header>
      <ErrorBoundary>
        <Scroll>
          <CardList cards={filteredRobots}/>
        </Scroll>
      </ErrorBoundary>
    </div>
  ) : (
    <h1 className="absolute-center">Loading...</h1>
  );
}

export default App;
