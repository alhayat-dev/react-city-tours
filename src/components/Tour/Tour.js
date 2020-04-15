import React, { Component } from 'react'
import './tour.css';

export default class Tour extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             showInfo: false
        }
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    }
    
    render() {
        
        const { id, img, name, info, city } = this.props.tour;
        const { removeTour } = this.props;
        
        return (
            <article className="tour">
                <div className="image-container">
                    <img src={img} alt=""/>
                    <span className="btn-close" onClick={() => removeTour(id)}>
                    <i className="fa fa-window-close-o" aria-hidden="true"></i>
                    </span>
                </div>

                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info{" "} <span onClick={this.handleInfo}><i className="fa fa-caret-square-o-down" aria-hidden="true"></i></span> </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>    
        )
    }
}
