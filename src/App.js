import React,{Component} from 'react';
import './App.css';
import Weather from './Weather'
import City from './City'
import axios from 'axios';
import Unsplash from 'unsplash-js';


class  App extends Component {

    state = {
        img_links : [],
        currentData: {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            time: undefined,
            icon: undefined
        },
        forecast: {

        }
};

    handleCity = (userInput) => {
        axios.get(
            `https://api.unsplash.com/search/photos/?page=1&per_page=5&query=${userInput}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
        )
            .then(data => {
                console.log(data);
                for(let i=0;i<data.data.results.length;i++){
                    this.setState({
                        img_links: [...this.state.img_links, data.data.results[i].urls.small]
                    });
                }

                let temp = this.state.img_links[Math.floor(Math.random() *5 )];
                this.setState({
                    currentData: {
                        ...this.state.currentData, image_link: temp
                    }
                })
            });

        axios.get(
            `http://api.apixu.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${userInput}`
        ).then((res) =>{
            console.log(res);
            this.setState({
                currentData: {
                    temperature: res.data.current.temp_c,
                    city: res.data.location.name,
                    country: res.data.location.country,
                    icon: res.data.current.condition.icon,
                    time: res.data.location.localtime,
                    description: res.data.current.condition.text,
                    image_link: ''
                }
            })
        });

        axios.get(`http://api.apixu.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${userInput}&days=7`
            ).then(forecastData=>{
                console.log(forecastData);
        })
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
