import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state; //obect destructuring es6
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <div>
          <h1>Monsters App</h1>
          <SearchBox
            placeholder="search monsters"
            handleChange={this.handleChange}
            //set state is an async function
            //and can have a callback function passed in as a second parameter.
          ></SearchBox>
          <CardList monsters={filteredMonsters} />
        </div>
      </div>
    );
  }
}

export default App;
