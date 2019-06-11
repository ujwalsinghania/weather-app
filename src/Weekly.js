import React from 'react';
import {Container} from "react-bootstrap";
import './weather.css'
import {Table} from "react-bootstrap";


export function Weekly(props) {
    return(
        <Container className={"mt-2"}>
                <Table className={'table-borderless'}>
                    <tbody>
                    <tr>
                        <th>Monday</th>
                        <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>65</th>
                        <hr />
                    </tr>
                    <tr>
                        <th>Tuesday</th>
                        <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>65</th>
                    </tr>
                    <tr>
                        <th>Wednesday</th>
                        <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>65</th>
                    </tr>
                    <tr>
                        <th>Thursday</th>
                        <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>65</th>
                    </tr>
                    <tr>
                        <th>Friday</th>
                        <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>65</th>
                    </tr>
                    <tr>
                        <th>Saturday</th>
                        <th><img src={"weather-icons/179.png"} style={{height: '40px'}}/>65</th>
                    </tr>
                    </tbody>
                </Table>
        </Container>
    )
}