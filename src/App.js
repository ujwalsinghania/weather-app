import React,{Component} from 'react';
import './App.css';
import Weather from './Weather'
import City from './City'
import axios from 'axios';
import Unsplash from 'unsplash-js';


class  App extends Component {

    state = {
        currentData: {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            time: undefined,
            icon: undefined
        }

};

    handleCity = (userInput) => {
        axios.get(
            `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_WEATHER_API_KEY}&query=${userInput}`
        ).then((res) =>{
            console.log(res);
            this.setState({
                currentData: {
                    temperature: res.data.current.temp_c,
                    city: res.data.location.name,
                    country: res.data.location.country,
                    icon: res.data.current.condition.icon,
                    time: res.data.location.localtime,
                    description: res.data.current.condition.text
                }
            })
        });

        axios.get(
                `https://api.unsplash.com/search/photos/?page=1&per_page=5&query=${userInput}-city&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
            )
            .then(data => {
                data.data.results.map( data => {
                    console.log(data.links.html);
                })
            });
    };

    render() {
        return (
                <div className="App">
                    <Weather currentData={this.state.currentData} />
                    <City city={this.handleCity}/>
                </div>
            );
        }
    }


export default App;
