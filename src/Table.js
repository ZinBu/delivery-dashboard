import React from 'react'
import {Button} from './components/Buttons'


const TableHeader = () => {
    return (
      <thead>
        <tr>
            <th className="short-column" >Номер заказа</th>
            <th className="short-column" >Вес корзины (кг)</th>
            <th className="short-column" >Штук/SKU</th>
            <th >Курьер/КПП</th>
            <th >Пикер/КПП</th>
            <th >Начало сборки</th>
            <th >Конец сборки</th>
            <th >Время выхода курьера</th>
            <th >Время доставки клиенту</th>
            <th >Время возвращения курьера</th>
            <th >Статус</th>
        </tr>
      </thead>
    )
  }


const TableBody = (props) => {
    const setCourierData = (order) => {
      const taxiDriver = (
        `${order.provider || '-'}
        ID: ${order.claim_id || '-'}
        Авто: ${order.car_model || '-'}
        №: ${order.car_number || '-'}
        Статус: ${order.extra.provider_status || '-'}
        `
      )
      return taxiDriver
    }
    
    const rows = props.hubData.map((order, index) => {
        return (
            <tr key={index} style={order.isTaxi ? {"backgroundColor": "rgb(13 60 230 / 32%)"} : null}>
              <td >{order.reserveKey}</td> 
              <td >{order.basketWeight}</td>
              <td >{order.itemsCount}/{order.skuCount}</td>
              <td >
                {order.isTaxi ? setCourierData(order) : `${order.courierName} / ${order.courierKpp}`}   
              </td>
              <td >{order.pickerName}/{order.pickerKpp}</td>
              <td >{order.complectationBegin}</td>
              <td >{order.complectationEnd}</td>
              <td >{order.deliveringBegin}</td>
              <td >{order.clientArrival_time}</td>
              <td >{order.deliveringEnd || '-'}</td>
              <td >{order.state}</td>
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
        <TableBody hubData={hubData} />
      </table>
    )
  }

export default Table