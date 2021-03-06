import React from 'react';

import './Text.css'

class Text extends React.Component {
    render() {
        return (
            <p className={this.props.className + ' text__text'}>{this.props.children}</p>
        );
    }
}

export default Text;