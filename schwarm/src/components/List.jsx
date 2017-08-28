import React, { Component } from 'react';

import Species from './Species.jsx'
import Desc from './Desc.jsx'

export default class List extends Component {
    render() {
        let species = this.props.list.map(entry => <Species data={entry} />)

        let ret =[]
        for(var i = 0; i < species.length; i++) {
            if (i % 10 === 0) {
                ret.push(<Desc />)
            }

            ret.push(species[i])
        }

        return (
            <table>
                <tbody>{ret}</tbody>
            </table>
        )
    }
}