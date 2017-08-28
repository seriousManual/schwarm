import React, { Component } from 'react';
import moment from 'moment'

export default class Area extends Component {
    render () {
        let {start, end, state} = this.props
        let className = 'area ' + state

        let startPosition = parseInt(moment(start).dayOfYear() / 365 * 10000, 10) / 100
        let endPosition = parseInt(moment(end).dayOfYear() / 365 * 10000, 10) / 100
        
        let style = {
            left: startPosition + '%',
            width: (endPosition - startPosition) + '%'
        }

        let title = moment(start).format('DD.MM.') + ' - ' + moment(end).format('DD.MM.')

        return (
            <div className={className} title={title} style={style}></div>
        )
    }
}