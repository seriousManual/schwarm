import React, { Component } from 'react';

export default class Form extends Component {
    render () {
        let {onSearch, onProtected, onCurrent} = this.props

        return (
            <div id="form">
                <input type="text" placeholder="search" onChange={e => onSearch(e.target.value)} />
                <label>ohne geschützte <input type="checkbox" value="on" onChange={e => onProtected(e.target.checked)} /></label>
                <label>nur aktuelle <input type="checkbox" value="on" onChange={e => onCurrent(e.target.checked)} /></label>
            </div>
        )
    }
}