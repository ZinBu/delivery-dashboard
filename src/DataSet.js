
// Mock data from backend

export const hubList = {
    "hubs": [
        { "id": 21, "name": "Пустой", "windowOpen": "09:00:00", "windowClose": "21:00:00", "localTimezone": "UTC+3 Msk" },
        { "id": 1, "name": "Не пустой", "windowOpen": "08:00:00", "windowClose": "23:00:00", "localTimezone": "UTC+9 Yaskutsk" }
    ]
}

const wipOrder = {
    "reserveKey": "1",
    "state": "WIP",
    "pickerName": "Всеволод",
    "pickerKpp": "13243546",
    "complectationBegin": "11:09:55",
    "complectationEnd": "11:12:05",
    "clientArrivalTime": "11:22:33",
    "isTaxi": false,
    "basketWeight": 0.336,
    "itemsCount": 1,
    "skuCount": 3,
    "courierName": "Ждан",
    "courierKpp": "64534231",
    "deliveryBegin": "11:15:00",
    "deliveryEnd": "11:27:50"
}

const readyOrder = {
    "reserveKey": "2",
    "state": "FINISHED",
    "pickerName": "Миша",
    "pickerKpp": "13243546",
    "complectationBegin": "12:09:55",
    "complectationEnd": "12:12:05",
    "clientArrivalTime": "12:30:00",
    "isTaxi": false,
    "basketWeight": 1.5,
    "itemsCount": 5,
    "skuCount": 10,
    "courierName": "Ждан",
    "courierKpp": "64534231",
    "deliveryBegin": "12:15:00",
    "deliveryEnd": "13:00:00"
}

const cancelOrder = {
    "reserveKey": "3",
    "state": "CANCELED",
    "pickerName": "Любомир",
    "pickerKpp": "13243546",
    "complectationBegin": "12:09:55",
    "complectationEnd": "12:12:05",
    "clientArrivalTime": "12:30:00",
    "isTaxi": false,
    "basketWeight": 4,
    "itemsCount": 10,
    "skuCount": 10,
    "courierName": "Кантимир",
    "courierKpp": "64534231",
    "deliveryBegin": "12:15:00",
    "deliveryEnd": "13:00:00"
}

const taxiOrder = {
    "reserveKey": "417",
    "state": "WIP",
    "pickerName": "Горганит",
    "pickerKpp": "51156",
    "complectationBegin": "11:10:16",
    "complectationEnd": "11:12:06",
    "clientArrivalTime": "11:47:24",
    "isTaxi": true,
    "basketWeight": 0.336,
    "itemsCount": 1,
    "skuCount": 3,
    "claimId": "4444444444",
    "provider": "Такси колобок",
    "deliveryBegin": null,
    "carModel": "Mercedes-Benz",
    "carNumber": "У777УУ98",
    "extra": { "providerStatus": "Водитель в пути" }
}

export const hubRes = [
    taxiOrder,
    cancelOrder,
    readyOrder,
    readyOrder,
    wipOrder,
    cancelOrder,
    readyOrder,
    wipOrder,
    readyOrder,
    wipOrder,
    readyOrder,
    wipOrder,
    taxiOrder,
    cancelOrder,
    wipOrder,
]
