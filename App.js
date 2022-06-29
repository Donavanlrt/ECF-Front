import axios from 'axios';
import './App.css';
import React from 'react';
import Menu from './Menu';
import meals from './meals';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMeal: null,
            newName: '',
            newDescription: '',
            newPrice: 0,
            newImage: '',

        componentDidMount() {
            this.loadBurgers();
            }

        }
    }
}

export default App;
