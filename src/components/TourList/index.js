import React, { Component } from 'react'
import Tour from '../Tour';
import './tourlist.css';
import {tourData} from '../../tourData.js';

export default class TourList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             tours: tourData
        }
    }
    
    removeTour = (id) => {
        const sortedTours = this.state.tours.filter( tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        });
    }
    render() {

        const { tours } = this.state;
        return (
            <section className="tourlist">
            {
                tours.map( tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>))
            }
            </section>
        )
    }
}
