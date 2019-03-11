import React, { Component } from 'react';
import Features from '../Features/Features'

class Form extends Component {
    render() {
        
    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Features 
                features={this.props.features}
                selected={this.props.selected}
                onFeatureSelect={this.props.onFeatureSelect}/>
        </section>
    );
    }
}

export default Form;