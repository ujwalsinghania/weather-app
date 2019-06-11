import React,{Component} from 'react'
import {Container} from "react-bootstrap";

class City extends Component{

    state= {
       cities : ''
    };

    handleChange= (e) =>{
        this.setState({
            cities: e.target.value
        })
    };

    sendCity = (e) => {
        e.preventDefault();
        let inputCity = this.state.cities;
        this.props.city(inputCity);
    };

    render() {
       return (
           <Container>
               <form onSubmit={this.sendCity}>
                   <input type={"text"} name={"city"} onChange={this.handleChange}/>
                   <input type="submit" />
               </form>
           </Container>
       )
   }
}

export default City