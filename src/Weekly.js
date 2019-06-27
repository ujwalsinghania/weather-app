import React from 'react';
import {Container} from "react-bootstrap";
import './weather.css'
import {Table} from "react-bootstrap";


export function Weekly(props) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const data = props.forecast.map((day)=> {
        return(
        <tr>
            <th>{days[new Date(day.date).getDay()]}</th>
            <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>{<span>&ensp;{day.day.avgtemp_c}<sup>o</sup></span>}</th>
            <hr />
        </tr>
        )
    });

    return(
        <Container className={"mt-2"}>
                <Table className={'table-borderless'}>
                    <tbody>
                    {data}
                    </tbody>
                </Table>
        </Container>
    )
}