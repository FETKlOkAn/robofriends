import React, { Component, useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import Errorboundry from '../components/Errorboundry';


function App () {
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ robots: users})});
  // }

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setRobots(users)});
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value )
  }

  
  
  const filteredRobots = robots.filter(robot =>{
  return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <Errorboundry>
              <CardList robots={filteredRobots} />
            </Errorboundry>
          </Scroll>
        </div>
      );
  }


export default App;