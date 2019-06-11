import React from 'react';
import {Container} from "react-bootstrap";
import './weather.css'
import {Table} from "react-bootstrap";


export function Hourly(props) {
    return(
        <Container className={"mt-2"}>
            <Table className={'table-borderless'}>
                <tbody>
                <tr className={"m-0 p-0"}>
                    <th>Now</th>
                    <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>{}</th>
                </tr>
                <tr>
                    <th>9:00 a.m</th>
                    <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>65</th>
                </tr>
                <tr>
                    <th>10:00 a.m</th>
                    <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>65</th>
                </tr>
                <tr>
                    <th>11:00 a.m</th>
                    <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>65</th>
                </tr>
                <tr>
                    <th>12:00 p.m</th>
                    <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>65</th>
                </tr>
                <tr>
                    <th>1:00 p.m</th>
                    <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>65</th>
                </tr>
                </tbody>
            </Table>
        </Container>
    )
}