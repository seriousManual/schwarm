import React, { Component } from 'react';
import moment from 'moment'

import Species from './Species.jsx'
import Desc from './Desc.jsx'

export default class List extends Component {
    render() {
        let species = this.props.list
            .filter(entry => this.filterSearch(entry))
            .filter(entry => this.filterProtected(entry))
            .filter(entry => this.filterCurrent(entry))
            .map(entry => <Species data={entry} key={entry.kind} />)

        let ret =[]
        for(var i = 0; i < species.length; i++) {
            if (i % 10 === 0) {
                ret.push(<Desc key={i} />)
            }

            ret.push(species[i])
        }

        return (
            <table>
                <tbody>{ret}</tbody>
            </table>
        )
    }
    
    filterSearch(entry) {
        let {selection} = this.props
        let {kind} = entry

        kind = kind.toLowerCase()
        let searchParts = selection.search
            .toLowerCase()
            .split(' ')
            .map(part => part.trim())
            .filter(Boolean)

        return searchParts.every(part => kind.indexOf(part) > -1)
    }

    filterProtected(entry) {
        let {selection} = this.props

        if (!selection.noProtected) {
            return true
        }

        return !entry.proteced
    }

    filterCurrent(entry) {
        let {selection} = this.props

        if (!selection.onlyCurrent) {
            return true
        }

        let now = moment()

        return entry.areas.some(area => {
            return area.state !== 'inactive'
                && moment(area.start).isBefore(now)
                && moment(area.end).isAfter(now)
        })
    }
}