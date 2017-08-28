import React, { Component } from 'react';

import Area from './Area.jsx'

export default class Species extends Component {
    render () {
        let {kind, proteced, annotation, areas} = this.props.data
        let areasComponents = areas.map(area => <Area {...area} />)
        
        return (
            <tr className={proteced ? "protected" : ""}>
                <td className="kind" title={kind + (proteced ? ' (geschützt)' : '')}>{kind}</td>
                <td className="areas" colSpan="12">{areasComponents}</td>
                <td className="annotation">{annotation}</td>
            </tr>
        )
    }
}