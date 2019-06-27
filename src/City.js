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
               <form onSubmit={this.sendCity} className={"input-group"}>
                   <input type="text" className="form-control" placeholder="Search" onChange={this.handleChange} />
                   <div className="input-group-append">
                       <button className="btn btn-secondary" type="submit">Submit City</button>
                   </div>
               </form>
           </Container>
       )
   }
}

export default City