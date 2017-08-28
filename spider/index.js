'use strict'

const moment = require('moment')
const fs = require('fs')

const cheerio = require('cheerio')

const target = fs.readFileSync('./target.html')
const $ = cheerio.load(target)

let $table = $('table.sftabelle1');
let $rows = $table.find('tr')

let entries = []

loopRow:
for (let i = 1; i < $rows.length; i++) {
    let $row = $rows[i]
    let $fields = $($row).find('td')

    let kindText = $($fields[0]).text()
    let protectedType = kindText.indexOf('#') > -1

    let entry = {
        kind: kindText.replace('#', '').trim(),
        proteced: protectedType,
        annotation: $($fields[$fields.length - 1]).text(),
        areas: []
    }

    let previousState = null
    let now = null
    for (let month = 1; month < 13; month++) {
        let $field = $($fields[month])
        let $subFields = $field.find('p')

        now = moment(month + '-' + 1, 'MM-DD')
        for (let subIndex = 0; subIndex < 3; subIndex++) {
            let state = 'inactive'
            let style = $($subFields[subIndex]).attr('style')

            if (!style) {
                continue loopRow
            }

            if (style.indexOf('00ff00') > -1) {
                state = 'active'
            } else if (style.indexOf('248f24') > -1) {
                state = 'mainActive'
            } else if (style.indexOf('ff9999') > -1) {
                state = 'inactive'
            }
            
            if (state !== previousState) {
                if (previousState !== null) {
                    entry.areas[entry.areas.length - 1].end = now.format()
                }
                
                entry.areas.push({start: now.format(), end: null, state: state})
                previousState = state
            }

            now.add(10, 'days')
        }

        if (month === 12) {
            entry.areas[entry.areas.length - 1].end = now.format()
        }
    }
    console.log(entry);
    entries.push(entry)
}

fs.writeFileSync('export.json', JSON.stringify(entries))