import React from 'react'
import {Button} from './components/Buttons'


const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }


const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
              <Button onClick={() => props.removeCharacter(index)} text="Удоли" />
            </td>
          </tr>
        )
    })
  
    return <tbody>{rows}</tbody>
  }


const Table = (props) => {
    const {hubData} = props

    return (
      <table style={hubData.length < 1 ? {"visibility": "hidden"}: null}>
        <TableHeader />
        {/* <TableBody characterData={characterData} removeCharacter={removeCharacter} /> */}
      </table>
    )
  }

export default Table
