import React, { Component } from 'react';

export default class Form extends Component {
    render () {
        let {onChange} = this.props

        return (
            <div>
                <input type="text" onChange={onChange} />
            </div>
        )
    }
}