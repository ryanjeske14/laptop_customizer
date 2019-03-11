import React, { Component } from 'react';
import Options from '../Options/Options'


class Features extends Component {
    render() {
        const features = Object.keys(this.props.features)
        .map(feature => 
            <Options 
                key={feature}
                features={this.props.features} 
                selected={this.props.selected} 
                feature={feature}
                onFeatureSelect={this.props.onFeatureSelect}/>);
        
    return (
        <div>{ features }</div>
    );
    }
}

export default Features;