import React, { Component } from 'react';

class Options extends Component {
    render() {
        const { feature } = this.props;
        console.log(feature);
        const options = this.props.features[feature].map((item, index) => {
            console.log(item);
            const selectedClass = item.name === this.props.selected[feature].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return <li key={index} className="feature__item">
              <div className={featureClass}
                value={item}
                onClick={e => this.props.onFeatureSelect(feature, item)}>
                  { item.name }
                  ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(item.cost) })
              </div>
            </li>
          });

          return <div className="feature" key={feature}>
            <div className="feature__name">{feature}</div>
            <ul className="feature__list">
              { options }
            </ul>
          </div>
    }   
}

export default Options; 