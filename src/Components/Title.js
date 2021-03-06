import React from 'react';

import './Title.css'

class Title extends React.Component {
    render() {
        return (
            <p className={this.props.className + ' title__title'}>{this.props.children}</p>
        );
    }
}

export default Title;