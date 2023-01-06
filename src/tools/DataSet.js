// Mock data from backend

export const hubList = {
    "hubs": [
        {"id": 21, "name": "Empty", "windowOpen": "09:00:00", "windowClose": "21:00:00", "localTimezone": "UTC+3 Msk"},
        {
            "id": 1,
            "name": "Not empty",
            "windowOpen": "08:00:00",
            "windowClose": "23:00:00",
            "localTimezone": "UTC+9 Yakutsk"
        }
    ]
}

const wipOrder = {
    "reserveKey": "1",
    "state": "WIP",
    "pickerName": "Jhonny",
    "pickerKpp": "13243546",
    "complectationBegin": "11:09:55",
    "complectationEnd": "11:12:05",
    "clientArrivalTime": "11:22:33",
    "isTaxi": false,
    "basketWeight": 0.336,
    "itemsCount": 1,
    "skuCount": 3,
    "courierName": "Bob",
    "courierKpp": "64534231",
    "deliveryBegin": "11:15:00",
    "deliveryEnd": "11:27:50"
}

const readyOrder = {
    "reserveKey": "2",
    "state": "FINISHED",
    "pickerName": "Misha",
    "pickerKpp": "13243546",
    "complectationBegin": "12:09:55",
    "complectationEnd": "12:12:05",
    "clientArrivalTime": "12:30:00",
    "isTaxi": false,
    "basketWeight": 1.5,
    "itemsCount": 5,
    "skuCount": 10,
    "courierName": "Jack",
    "courierKpp": "64534231",
    "deliveryBegin": "12:15:00",
    "deliveryEnd": "13:00:00"
}

const cancelOrder = {
    "reserveKey": "3",
    "state": "CANCELED",
    "pickerName": "Lubomir",
    "pickerKpp": "13243546",
    "complectationBegin": "12:09:55",
    "complectationEnd": "12:12:05",
    "clientArrivalTime": "12:30:00",
    "isTaxi": false,
    "basketWeight": 4,
    "itemsCount": 10,
    "skuCount": 10,
    "courierName": "Victor",
    "courierKpp": "64534231",
    "deliveryBegin": "12:15:00",
    "deliveryEnd": "13:00:00"
}

const taxiOrder = {
    "reserveKey": "417",
    "state": "WIP",
    "pickerName": "Gorganit",
    "pickerKpp": "51156",
    "complectationBegin": "11:10:16",
    "complectationEnd": "11:12:06",
    "clientArrivalTime": "11:47:24",
    "isTaxi": true,
    "basketWeight": 0.336,
    "itemsCount": 1,
    "skuCount": 3,
    "claimId": "4444444444",
    "provider": "HotWheels",
    "deliveryBegin": null,
    "carModel": "Mercedes-Benz",
    "carNumber": "У777УУ98",
    "extra": {"providerStatus": "Enroute"}
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

export const hubTimetableData = date => {
  const dateStr = date.format('YYYY-MM-DD');
  return {
    "pickers": [
      {
        "id": 5692140,
        "name": "Kira Vazovski",
        "siteKppNum": "102477",
        "dummy": false,
        "enabled": true,
        "windowOpen": `${dateStr}T07:00:00+03:00`,
        "windowClose": `${dateStr}T19:00:00+03:00`,
        "smokeBreakStart": null,
        "smokeBreakEnd": null,
        "lunchTimeStart": `${dateStr}T12:00:00+03:00`,
        "lunchTimeEnd": `${dateStr}T12:30:00+03:00`,
        "tasks": [{
          "id": 17237881,
          "createdAt": `${dateStr}T12:27:52.003061+03:00`,
          "start": `${dateStr}T12:30:00+03:00`,
          "finish": `${dateStr}T12:43:00+03:00`,
          "factStart": `${dateStr}T12:29:28+03:00`,
          "factFinish": `${dateStr}T12:33:52+03:00`,
          "orders": [{
            "reserveKey": "2184881",
            "orderType": "express",
            "state": "WIP",
            "promiseStart": `${dateStr}T13:04:03+03:00`,
            "promiseFinish": `${dateStr}T14:04:03+03:00`
          }],
          "isMultidrop": false,
          "state": "FINISHED"
        }, {
          "id": 17234532,
          "createdAt": `${dateStr}T11:29:05.238481+03:00`,
          "start": `${dateStr}T11:29:04+03:00`,
          "finish": `${dateStr}T11:42:04+03:00`,
          "factStart": `${dateStr}T11:29:41+03:00`,
          "factFinish": `${dateStr}T11:32:42+03:00`,
          "orders": [{
            "reserveKey": "2143483",
            "orderType": "express",
            "state": "WIP",
            "promiseStart": `${dateStr}T12:03:36+03:00`,
            "promiseFinish": `${dateStr}T13:03:36+03:00`
          }],
          "isMultidrop": false,
          "state": "FINISHED"
        }, {
          "id": 17233889,
          "createdAt": `${dateStr}T11:17:17.775823+03:00`,
          "start": `${dateStr}T11:17:17+03:00`,
          "finish": `${dateStr}T11:31:05.300000+03:00`,
          "factStart": `${dateStr}T11:17:51+03:00`,
          "factFinish": `${dateStr}T11:25:43+03:00`,
          "orders": [{
            "reserveKey": "2135350",
            "orderType": "express",
            "state": "FINISHED",
            "promiseStart": `${dateStr}T11:54:24+03:00`,
            "promiseFinish": `${dateStr}T12:54:24+03:00`
          }],
          "isMultidrop": false,
          "state": "FINISHED"
        }, {
          "id": 17211891,
          "createdAt": `${dateStr}T15:41:09.633264+03:00`,
          "start": `${dateStr}T10:15:48.700000+03:00`,
          "finish": `${dateStr}T10:35:29+03:00`,
          "factStart": `${dateStr}T10:11:41+03:00`,
          "factFinish": `${dateStr}T10:26:17+03:00`,
          "orders": [{
            "reserveKey": "1794153",
            "orderType": "planned",
            "state": "WIP",
            "promiseStart": `${dateStr}T13:00:00+03:00`,
            "promiseFinish": `${dateStr}T15:00:00+03:00`
          }],
          "isMultidrop": true,
          "state": "FINISHED"
        }, {
          "id": 17228685,
          "createdAt": `${dateStr}T09:13:17.271142+03:00`,
          "start": `${dateStr}T09:13:17+03:00`,
          "finish": `${dateStr}T09:31:27.600000+03:00`,
          "factStart": `${dateStr}T09:13:26+03:00`,
          "factFinish": `${dateStr}T09:22:37+03:00`,
          "orders": [{
            "reserveKey": "2068202",
            "orderType": "express",
            "state": "FINISHED",
            "promiseStart": `${dateStr}T09:55:53+03:00`,
            "promiseFinish": `${dateStr}T10:55:53+03:00`
          }],
          "isMultidrop": false,
          "state": "FINISHED"
        }, {
          "id": 17228087,
          "createdAt": `${dateStr}T08:48:17.819329+03:00`,
          "start": `${dateStr}T08:48:17+03:00`,
          "finish": `${dateStr}T09:00:17+03:00`,
          "factStart": `${dateStr}T08:48:43+03:00`,
          "factFinish": `${dateStr}T08:53:44+03:00`,
          "orders": [{
            "reserveKey": "2059407",
            "orderType": "express",
            "state": "FINISHED",
            "promiseStart": `${dateStr}T09:19:28+03:00`,
            "promiseFinish": `${dateStr}T10:19:28+03:00`
          }],
          "isMultidrop": false,
          "state": "FINISHED"
        }, {
          "id": 17227258,
          "createdAt": `${dateStr}T08:04:43.105628+03:00`,
          "start": `${dateStr}T08:24:34.200000+03:00`,
          "finish": `${dateStr}T08:44:10.200000+03:00`,
          "factStart": `${dateStr}T08:21:54+03:00`,
          "factFinish": `${dateStr}T08:34:02+03:00`,
          "orders": [{
            "reserveKey": "2048261",
            "orderType": "express",
            "state": "FINISHED",
            "promiseStart": `${dateStr}T09:01:44+03:00`,
            "promiseFinish": `${dateStr}T10:01:44+03:00`
          }],
          "isMultidrop": false,
          "state": "FINISHED"
        }, {
          "id": 17226481,
          "createdAt": `${dateStr}T06:52:58.303142+03:00`,
          "start": `${dateStr}T08:07:40.400000+03:00`,
          "finish": `${dateStr}T08:24:34.200000+03:00`,
          "factStart": `${dateStr}T08:04:27+03:00`,
          "factFinish": `${dateStr}T08:15:15+03:00`,
          "orders": [{
            "reserveKey": "2036582",
            "orderType": "express",
            "state": "FINISHED",
            "promiseStart": `${dateStr}T09:00:00+03:00`,
            "promiseFinish": `${dateStr}T10:00:00+03:00`
          }],
          "isMultidrop": false,
          "state": "FINISHED"
        }, {
          "id": 17225205,
          "createdAt": `${dateStr}T01:17:36.231185+03:00`,
          "start": `${dateStr}T07:47:22.200000+03:00`,
          "finish": `${dateStr}T08:07:40.400000+03:00`,
          "factStart": `${dateStr}T07:44:31+03:00`,
          "factFinish": `${dateStr}T07:57:58+03:00`,
          "orders": [{
            "reserveKey": "1903262",
            "orderType": "planned",
            "state": "FINISHED",
            "promiseStart": `${dateStr}T09:00:00+03:00`,
            "promiseFinish": `${dateStr}T11:00:00+03:00`
          }, {
            "reserveKey": "2012210",
            "orderType": "express",
            "state": "FINISHED",
            "promiseStart": `${dateStr}T08:27:43+03:00`,
            "promiseFinish": `${dateStr}T09:27:43+03:00`
          }],
          "isMultidrop": false,
          "state": "FINISHED"
        }, {
          "id": 17210467,
          "createdAt": `${dateStr}T15:10:43.636545+03:00`,
          "start": `${dateStr}T07:00:00+03:00`,
          "finish": `${dateStr}T07:39:28.800000+03:00`,
          "factStart": `${dateStr}T06:57:00+03:00`,
          "factFinish": `${dateStr}T07:31:19+03:00`,
          "orders": [{
            "reserveKey": "1776111",
            "orderType": "planned",
            "state": "FINISHED",
            "promiseStart": `${dateStr}T09:00:00+03:00`,
            "promiseFinish": `${dateStr}T11:00:00+03:00`
          }],
          "isMultidrop": false,
          "state": "FINISHED"
        }, {
          "id": 17223968,
          "createdAt": `${dateStr}T23:00:17.615666+03:00`,
          "start": `${dateStr}T08:42:38+03:00`,
          "finish": `${dateStr}T08:55:38+03:00`,
          "factStart": null,
          "factFinish": null,
          "orders": [{
            "reserveKey": "1984602",
            "orderType": "planned",
            "state": "CANCELED",
            "promiseStart": `${dateStr}T11:00:00+03:00`,
            "promiseFinish": `${dateStr}T13:00:00+03:00`
          }],
          "isMultidrop": false,
          "state": "CANCELED"
        }, {
          "id": 17223282,
          "createdAt": `${dateStr}T22:07:23.755848+03:00`,
          "start": `${dateStr}T07:54:40.400000+03:00`,
          "finish": `${dateStr}T08:14:33+03:00`,
          "factStart": null,
          "factFinish": null,
          "orders": [{
            "reserveKey": "1969912",
            "orderType": "express",
            "state": "CANCELED",
            "promiseStart": `${dateStr}T09:00:00+03:00`,
            "promiseFinish": `${dateStr}T10:00:00+03:00`
          }],
          "isMultidrop": false,
          "state": "CANCELED"
        }]
      }, {
        "id": 5692139,
      "name": "Kate Rivz",
      "siteKppNum": "96722188",
      "dummy": false,
      "enabled": false,
      "windowOpen": `${dateStr}T07:00:00+03:00`,
      "windowClose": `${dateStr}T23:00:00+03:00`,
      "smokeBreakStart": null,
      "smokeBreakEnd": null,
      "lunchTimeStart": null,
      "lunchTimeEnd": null,
      "tasks": []
    }, {
        "id": 5692138,
      "name": "Jdan Jajkov",
      "siteKppNum": "102921462",
      "dummy": false,
      "enabled": false,
      "windowOpen": `${dateStr}T07:00:00+03:00`,
      "windowClose": `${dateStr}T23:00:00+03:00`,
      "smokeBreakStart": null,
      "smokeBreakEnd": null,
      "lunchTimeStart": null,
      "lunchTimeEnd": null,
      "tasks": []
    }, {
        "id": 5692141,
      "name": "Kevin Manila",
      "siteKppNum": "103432347",
      "dummy": false,
      "enabled": true,
      "windowOpen": `${dateStr}T08:58:00+03:00`,
      "windowClose": `${dateStr}T21:00:00+03:00`,
      "smokeBreakStart": null,
      "smokeBreakEnd": null,
      "lunchTimeStart": `${dateStr}T13:00:00+03:00`,
      "lunchTimeEnd": `${dateStr}T13:30:00+03:00`,
      "tasks": [{
        "id": 17238057,
        "createdAt": `${dateStr}T12:30:56.578579+03:00`,
        "start": `${dateStr}T12:30:56+03:00`,
        "finish": `${dateStr}T12:48:11+03:00`,
        "factStart": `${dateStr}T12:31:08+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2186928",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T13:16:17+03:00`,
          "promiseFinish": `${dateStr}T14:16:17+03:00`
        }],
        "isMultidrop": false,
        "state": "PICKING"
      }, {
        "id": 17234240,
        "createdAt": `${dateStr}T11:23:24.390078+03:00`,
        "start": `${dateStr}T11:23:24+03:00`,
        "finish": `${dateStr}T11:36:24+03:00`,
        "factStart": `${dateStr}T11:23:54+03:00`,
        "factFinish": `${dateStr}T11:35:55+03:00`,
        "orders": [{
          "reserveKey": "2140002",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:57:28+03:00`,
          "promiseFinish": `${dateStr}T12:57:28+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }, {
        "id": 17225343,
        "createdAt": `${dateStr}T01:43:20.255994+03:00`,
        "start": `${dateStr}T09:45:54.400000+03:00`,
        "finish": `${dateStr}T10:39:53+03:00`,
        "factStart": `${dateStr}T09:28:24+03:00`,
        "factFinish": `${dateStr}T10:11:27+03:00`,
        "orders": [{
          "reserveKey": "1888786",
          "orderType": "planned",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:00:00+03:00`,
          "promiseFinish": `${dateStr}T13:00:00+03:00`
        }, {
          "reserveKey": "2014680",
          "orderType": "planned",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:00:00+03:00`,
          "promiseFinish": `${dateStr}T13:00:00+03:00`
        }, {
          "reserveKey": "1988781",
          "orderType": "planned",
          "state": "WIP",
          "promiseStart": `${dateStr}T11:00:00+03:00`,
          "promiseFinish": `${dateStr}T13:00:00+03:00`
        }],
        "isMultidrop": true,
        "state": "FINISHED"
      }]
    }, {
        "id": 5692131,
      "name": "Konstantin Craft",
      "siteKppNum": "95322695",
      "dummy": false,
      "enabled": true,
      "windowOpen": `${dateStr}T08:59:00+03:00`,
      "windowClose": `${dateStr}T21:00:00+03:00`,
      "smokeBreakStart": `${dateStr}T13:40:00+03:00`,
      "smokeBreakEnd": `${dateStr}T13:55:00+03:00`,
      "lunchTimeStart": `${dateStr}T12:30:00+03:00`,
      "lunchTimeEnd": `${dateStr}T13:00:00+03:00`,
      "tasks": [{
        "id": 17234023,
        "createdAt": `${dateStr}T11:19:44.861024+03:00`,
        "start": `${dateStr}T11:23:48.700000+03:00`,
        "finish": `${dateStr}T11:36:48.700000+03:00`,
        "factStart": `${dateStr}T11:22:29+03:00`,
        "factFinish": `${dateStr}T11:32:37+03:00`,
        "orders": [{
          "reserveKey": "2137014",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:58:45+03:00`,
          "promiseFinish": `${dateStr}T12:58:45+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }, {
        "id": 17233407,
        "createdAt": `${dateStr}T11:08:10.643189+03:00`,
        "start": `${dateStr}T11:08:10+03:00`,
        "finish": `${dateStr}T11:23:48.700000+03:00`,
        "factStart": `${dateStr}T11:09:11+03:00`,
        "factFinish": `${dateStr}T11:22:10+03:00`,
        "orders": [{
          "reserveKey": "2128832",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T11:49:04+03:00`,
          "promiseFinish": `${dateStr}T12:49:04+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }, {
        "id": 17229911,
        "createdAt": `${dateStr}T09:49:53.306769+03:00`,
        "start": `${dateStr}T10:04:59.500000+03:00`,
        "finish": `${dateStr}T10:38:04+03:00`,
        "factStart": `${dateStr}T10:02:55+03:00`,
        "factFinish": `${dateStr}T10:39:37+03:00`,
        "orders": [{
          "reserveKey": "2084390",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:01:25+03:00`,
          "promiseFinish": `${dateStr}T12:01:25+03:00`
        }],
        "isMultidrop": true,
        "state": "FINISHED"
      }, {
        "id": 17231176,
        "createdAt": `${dateStr}T10:21:59.881681+03:00`,
        "start": `${dateStr}T16:28:15+03:00`,
        "finish": `${dateStr}T16:40:15+03:00`,
        "factStart": null,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2100517",
          "orderType": "planned",
          "state": "WIP",
          "promiseStart": `${dateStr}T19:00:00+03:00`,
          "promiseFinish": `${dateStr}T21:00:00+03:00`
        }],
        "isMultidrop": false,
        "state": "PICKING"
      }, {
        "id": 17229566,
        "createdAt": `${dateStr}T09:40:09.866827+03:00`,
        "start": `${dateStr}T09:40:09+03:00`,
        "finish": `${dateStr}T10:04:59.500000+03:00`,
        "factStart": `${dateStr}T09:40:34+03:00`,
        "factFinish": `${dateStr}T10:02:36+03:00`,
        "orders": [{
          "reserveKey": "2079813",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T10:27:18+03:00`,
          "promiseFinish": `${dateStr}T11:27:18+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }, {
        "id": 17228678,
        "createdAt": `${dateStr}T09:13:01.943031+03:00`,
        "start": `${dateStr}T09:13:01+03:00`,
        "finish": `${dateStr}T09:32:52.500000+03:00`,
        "factStart": `${dateStr}T09:13:33+03:00`,
        "factFinish": `${dateStr}T09:31:59+03:00`,
        "orders": [{
          "reserveKey": "2067691",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T09:47:31+03:00`,
          "promiseFinish": `${dateStr}T10:47:31+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
        "id": 5692135,
      "name": "Gustav Goravsky",
      "siteKppNum": "94615987",
      "dummy": false,
      "enabled": true,
      "windowOpen": `${dateStr}T09:45:00+03:00`,
      "windowClose": `${dateStr}T21:00:00+03:00`,
      "smokeBreakStart": null,
      "smokeBreakEnd": null,
      "lunchTimeStart": `${dateStr}T13:30:00+03:00`,
      "lunchTimeEnd": `${dateStr}T14:00:00+03:00`,
      "tasks": [{
        "id": 17231231,
        "createdAt": `${dateStr}T10:23:17.202841+03:00`,
        "start": `${dateStr}T10:23:17+03:00`,
        "finish": `${dateStr}T10:36:17+03:00`,
        "factStart": `${dateStr}T10:28:57+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2101445",
          "orderType": "express",
          "state": "CANCELED",
          "promiseStart": `${dateStr}T11:00:00+03:00`,
          "promiseFinish": `${dateStr}T12:00:00+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
        }]
    }, {
        "id": 5692134,
      "name": "Violetta Mankova",
      "siteKppNum": "102705559",
      "dummy": false,
      "enabled": true,
      "windowOpen": `${dateStr}T10:01:00+03:00`,
      "windowClose": `${dateStr}T21:00:00+03:00`,
      "smokeBreakStart": null,
      "smokeBreakEnd": null,
      "lunchTimeStart": `${dateStr}T12:30:00+03:00`,
      "lunchTimeEnd": `${dateStr}T13:00:00+03:00`,
      "tasks": [{
        "id": 17233636,
        "createdAt": `${dateStr}T11:12:46.797743+03:00`,
        "start": `${dateStr}T11:12:46+03:00`,
        "finish": `${dateStr}T11:36:06.400000+03:00`,
        "factStart": `${dateStr}T11:12:58+03:00`,
        "factFinish": `${dateStr}T11:32:11+03:00`,
        "orders": [{
          "reserveKey": "2130491",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T11:54:40+03:00`,
          "promiseFinish": `${dateStr}T12:54:40+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }, {
        "id": 17231037,
        "createdAt": `${dateStr}T10:18:42.987496+03:00`,
        "start": `${dateStr}T10:18:42+03:00`,
        "finish": `${dateStr}T10:49:12.100000+03:00`,
        "factStart": `${dateStr}T10:19:00+03:00`,
        "factFinish": `${dateStr}T10:48:44+03:00`,
        "orders": [{
          "reserveKey": "2097984",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:04:26+03:00`,
          "promiseFinish": `${dateStr}T12:04:26+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
        "id": 5692130,
      "name": "Yriy K.",
      "siteKppNum": "102324482",
      "dummy": false,
      "enabled": true,
      "windowOpen": `${dateStr}T10:38:00+03:00`,
      "windowClose": `${dateStr}T23:00:00+03:00`,
      "smokeBreakStart": null,
      "smokeBreakEnd": null,
      "lunchTimeStart": `${dateStr}T19:30:00+03:00`,
      "lunchTimeEnd": `${dateStr}T20:00:00+03:00`,
      "tasks": [{
        "id": 17237027,
        "createdAt": `${dateStr}T12:12:47.384150+03:00`,
        "start": `${dateStr}T12:12:46+03:00`,
        "finish": `${dateStr}T12:24:46+03:00`,
        "factStart": `${dateStr}T12:13:08+03:00`,
        "factFinish": `${dateStr}T12:19:30+03:00`,
        "orders": [{
          "reserveKey": "2174882",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T13:39:26+03:00`,
          "promiseFinish": `${dateStr}T14:39:26+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }, {
        "id": 172300,
        "createdAt": `${dateStr}T12:17:37.569578+03:00`,
        "start": `${dateStr}T12:57:09.500000+03:00`,
        "finish": `${dateStr}T13:16:24.900000+03:00`,
        "factStart": null,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2177803",
          "orderType": "planned",
          "state": "WIP",
          "promiseStart": `${dateStr}T15:00:00+03:00`,
          "promiseFinish": `${dateStr}T17:00:00+03:00`
        }],
        "isMultidrop": false,
        "state": "PICKING"
      }, {
        "id": 17237248,
        "createdAt": `${dateStr}T12:16:38.317556+03:00`,
        "start": `${dateStr}T12:24:46+03:00`,
        "finish": `${dateStr}T12:57:09.500000+03:00`,
        "factStart": `${dateStr}T12:17:35+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2176616",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T14:21:06+03:00`,
          "promiseFinish": `${dateStr}T15:21:06+03:00`
        }],
        "isMultidrop": false,
        "state": "PICKING"
      }, {
        "id": 17236566,
        "createdAt": `${dateStr}T12:04:42.528377+03:00`,
        "start": `${dateStr}T12:04:42+03:00`,
        "finish": `${dateStr}T12:16:42+03:00`,
        "factStart": `${dateStr}T12:05:00+03:00`,
        "factFinish": `${dateStr}T12:09:26+03:00`,
        "orders": [{
          "reserveKey": "2168893",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T13:36:53+03:00`,
          "promiseFinish": `${dateStr}T14:36:53+03:00`
        }],
        "isMultidrop": true,
        "state": "FINISHED"
      }, {
        "id": 17236088,
        "createdAt": `${dateStr}T11:56:16.749748+03:00`,
        "start": `${dateStr}T11:56:16+03:00`,
        "finish": `${dateStr}T12:10:31.900000+03:00`,
        "factStart": `${dateStr}T11:56:55+03:00`,
        "factFinish": `${dateStr}T12:04:26+03:00`,
        "orders": [{
          "reserveKey": "2162950",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T13:30:00+03:00`,
          "promiseFinish": `${dateStr}T14:30:00+03:00`
        }],
        "isMultidrop": true,
        "state": "FINISHED"
      }, {
        "id": 17233297,
        "createdAt": `${dateStr}T11:06:13.321535+03:00`,
        "start": `${dateStr}T11:21:33.200000+03:00`,
        "finish": `${dateStr}T11:40:21.300000+03:00`,
        "factStart": `${dateStr}T11:15:43+03:00`,
        "factFinish": `${dateStr}T11:36:46+03:00`,
        "orders": [{
          "reserveKey": "2127214",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T12:09:22+03:00`,
          "promiseFinish": `${dateStr}T13:09:22+03:00`
        }],
        "isMultidrop": true,
        "state": "FINISHED"
      }, {
        "id": 17233153,
        "createdAt": `${dateStr}T11:03:14.618352+03:00`,
        "start": `${dateStr}T11:03:14+03:00`,
        "finish": `${dateStr}T11:21:33.200000+03:00`,
        "factStart": `${dateStr}T11:03:45+03:00`,
        "factFinish": `${dateStr}T11:25:07+03:00`,
        "orders": [{
          "reserveKey": "2125677",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:37:23+03:00`,
          "promiseFinish": `${dateStr}T12:37:23+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
        "id": 4035907,
      "name": "Alice Walrus",
      "siteKppNum": "98906613",
      "dummy": false,
      "enabled": true,
      "windowOpen": `${dateStr}T08:57:00+03:00`,
      "windowClose": `${dateStr}T21:00:00+03:00`,
      "tasks": [{
        "id": 18522995,
        "createdAt": `${dateStr}T12:17:37.580827+03:00`,
        "start": `${dateStr}T14:42:38+03:00`,
        "finish": `${dateStr}T15:20:52+03:00`,
        "factStart": null,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2177803",
          "orderType": "planned",
          "state": "WIP",
          "promiseStart": `${dateStr}T15:00:00+03:00`,
          "promiseFinish": `${dateStr}T17:00:00+03:00`
        }],
        "isMultidrop": false,
        "state": "ROAMING"
      }, {
        "id": 18513674,
        "createdAt": `${dateStr}T10:26:45.560770+03:00`,
        "start": `${dateStr}T11:42:22+03:00`,
        "finish": `${dateStr}T12:12:04+03:00`,
        "factStart": `${dateStr}T11:35:44+03:00`,
        "factFinish": `${dateStr}T11:59:22+03:00`,
        "orders": [{
          "reserveKey": "2097984",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:04:26+03:00`,
          "promiseFinish": `${dateStr}T12:04:26+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }, {
        "id": 18522109,
        "createdAt": `${dateStr}T12:06:06.398388+03:00`,
        "start": `${dateStr}T13:13:37+03:00`,
        "finish": `${dateStr}T14:15:17+03:00`,
        "factStart": null,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2162950",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T13:30:00+03:00`,
          "promiseFinish": `${dateStr}T14:30:00+03:00`
        }, {
          "reserveKey": "2168893",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T13:36:53+03:00`,
          "promiseFinish": `${dateStr}T14:36:53+03:00`
        }],
        "isMultidrop": true,
        "state": "ROAMING"
      }, {
        "id": 185136,
        "createdAt": `${dateStr}T10:26:45.527933+03:00`,
        "start": `${dateStr}T10:39:53+03:00`,
        "finish": `${dateStr}T11:42:22+03:00`,
        "factStart": `${dateStr}T10:32:37+03:00`,
        "factFinish": `${dateStr}T11:38:07+03:00`,
        "orders": [{
          "reserveKey": "2084390",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:01:25+03:00`,
          "promiseFinish": `${dateStr}T12:01:25+03:00`
        }, {
          "reserveKey": "2014680",
          "orderType": "planned",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:00:00+03:00`,
          "promiseFinish": `${dateStr}T13:00:00+03:00`
        }],
        "isMultidrop": true,
        "state": "FINISHED"
      }, {
        "id": 18512677,
        "createdAt": `${dateStr}T10:23:17.214576+03:00`,
        "start": `${dateStr}T10:36:20+03:00`,
        "finish": `${dateStr}T11:21:03+03:00`,
        "factStart": null,
        "factFinish": `${dateStr}T10:36:35+03:00`,
        "orders": [{
          "reserveKey": "2101445",
          "orderType": "express",
          "state": "CANCELED",
          "promiseStart": `${dateStr}T11:00:00+03:00`,
          "promiseFinish": `${dateStr}T12:00:00+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }, {
        "id": 18513672,
        "createdAt": `${dateStr}T10:26:45.498629+03:00`,
        "start": `${dateStr}T12:12:04+03:00`,
        "finish": `${dateStr}T13:10:27+03:00`,
        "factStart": `${dateStr}T10:34:03+03:00`,
        "factFinish": `${dateStr}T12:31:26+03:00`,
        "orders": [{
          "reserveKey": "1888786",
          "orderType": "planned",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:00:00+03:00`,
          "promiseFinish": `${dateStr}T13:00:00+03:00`
        }, {
          "reserveKey": "1988781",
          "orderType": "planned",
          "state": "WIP",
          "promiseStart": `${dateStr}T11:00:00+03:00`,
          "promiseFinish": `${dateStr}T13:00:00+03:00`
        }],
        "isMultidrop": true,
        "state": "ROAMING"
      }, {
        "id": 18512630,
        "createdAt": `${dateStr}T10:21:59.891809+03:00`,
        "start": `${dateStr}T18:40:15+03:00`,
        "finish": `${dateStr}T19:22:10+03:00`,
        "factStart": null,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2100517",
          "orderType": "planned",
          "state": "WIP",
          "promiseStart": `${dateStr}T19:00:00+03:00`,
          "promiseFinish": `${dateStr}T21:00:00+03:00`
        }],
        "isMultidrop": false,
        "state": "ROAMING"
      }, {
        "id": 18508156,
        "createdAt": `${dateStr}T09:13:17.299618+03:00`,
        "start": `${dateStr}T09:31:27.600000+03:00`,
        "finish": `${dateStr}T10:18:01.600000+03:00`,
        "factStart": `${dateStr}T09:30:30+03:00`,
        "factFinish": `${dateStr}T10:16:16+03:00`,
        "orders": [{
          "reserveKey": "2068202",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T09:55:53+03:00`,
          "promiseFinish": `${dateStr}T10:55:53+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }, {
        "id": 18508150,
        "createdAt": `${dateStr}T09:13:01.966245+03:00`,
        "start": `${dateStr}T09:32:52.500000+03:00`,
        "finish": `${dateStr}T10:03:32.500000+03:00`,
        "factStart": `${dateStr}T09:33:34+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2067691",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T09:47:31+03:00`,
          "promiseFinish": `${dateStr}T10:47:31+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
        "id": 4035911,
      "name": "Bubba",
      "siteKppNum": "98981674",
      "dummy": false,
      "enabled": true,
      "windowOpen": `${dateStr}T11:00:00+03:00`,
      "windowClose": `${dateStr}T23:00:00+03:00`,
      "tasks": [{
        "id": 18522953,
        "createdAt": `${dateStr}T12:16:38.336249+03:00`,
        "start": `${dateStr}T13:59:29+03:00`,
        "finish": `${dateStr}T14:44:07+03:00`,
        "factStart": null,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2176616",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T14:21:06+03:00`,
          "promiseFinish": `${dateStr}T15:21:06+03:00`
        }],
        "isMultidrop": false,
        "state": "ROAMING"
      }, {
        "id": 18522767,
        "createdAt": `${dateStr}T12:12:47.432893+03:00`,
        "start": `${dateStr}T13:21:37+03:00`,
        "finish": `${dateStr}T13:59:29+03:00`,
        "factStart": null,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2174882",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T13:39:26+03:00`,
          "promiseFinish": `${dateStr}T14:39:26+03:00`
        }],
        "isMultidrop": false,
        "state": "ROAMING"
      }, {
        "id": 18516780,
        "createdAt": `${dateStr}T11:03:14.628055+03:00`,
        "start": `${dateStr}T11:21:33.200000+03:00`,
        "finish": `${dateStr}T11:55:16.200000+03:00`,
        "factStart": `${dateStr}T11:25:28+03:00`,
        "factFinish": `${dateStr}T11:53:38+03:00`,
        "orders": [{
          "reserveKey": "2125677",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:37:23+03:00`,
          "promiseFinish": `${dateStr}T12:37:23+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }, {
        "id": 18519038,
        "createdAt": `${dateStr}T11:34:37.598674+03:00`,
        "start": `${dateStr}T12:09:27+03:00`,
        "finish": `${dateStr}T13:21:37+03:00`,
        "factStart": `${dateStr}T11:59:27+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2127214",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T12:09:22+03:00`,
          "promiseFinish": `${dateStr}T13:09:22+03:00`
        }, {
          "reserveKey": "1794153",
          "orderType": "planned",
          "state": "WIP",
          "promiseStart": `${dateStr}T13:00:00+03:00`,
          "promiseFinish": `${dateStr}T15:00:00+03:00`
        }],
        "isMultidrop": true,
        "state": "ROAMING"
      }]
      }],
    "taxis": [{
      "id": 10302059,
      "name": "HotWheels",
      "siteKppNum": "3f079a57-fb33-4f5b-ad4e-ad7c4359a112",
      "tasks": [{
        "id": 18500028,
        "createdAt": `${dateStr}T01:17:36.294783+03:00`,
        "start": `${dateStr}T08:07:40.400000+03:00`,
        "finish": `${dateStr}T08:44:52.400000+03:00`,
        "factStart": `${dateStr}T08:30:11+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2012210",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T08:27:43+03:00`,
          "promiseFinish": `${dateStr}T09:27:43+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
      "id": 10300913,
      "name": "HotWheels",
      "siteKppNum": "b36231a7-e1e4-4466-9d2e-fbc88143e164",
      "tasks": [{
        "id": 18498037,
        "createdAt": `${dateStr}T22:07:23.804470+03:00`,
        "start": `${dateStr}T08:42:42+03:00`,
        "finish": `${dateStr}T09:16:10+03:00`,
        "factStart": null,
        "factFinish": null,
        "orders": [{
          "reserveKey": "1969912",
          "orderType": "express",
          "state": "CANCELED",
          "promiseStart": `${dateStr}T09:00:00+03:00`,
          "promiseFinish": `${dateStr}T10:00:00+03:00`
        }],
        "isMultidrop": false,
        "state": "CANCELED"
      }]
    }, {
      "id": 10303474,
      "name": "HotWheels",
      "siteKppNum": "e059308e-724f-4026-9960-2d6f76183b19",
      "tasks": [{
        "id": 18502302,
        "createdAt": `${dateStr}T06:52:58.324024+03:00`,
        "start": `${dateStr}T08:43:24+03:00`,
        "finish": `${dateStr}T09:15:06+03:00`,
        "factStart": `${dateStr}T08:39:48+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2036582",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T09:00:00+03:00`,
          "promiseFinish": `${dateStr}T10:00:00+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
      "id": 10298365,
      "name": "HotWheels",
      "siteKppNum": "58b2909b-90be-402b-b9-8424f20bc2c5",
      "tasks": [{
        "id": 18493537,
        "createdAt": `${dateStr}T19:09:45.14+03:00`,
        "start": `${dateStr}T08:43:56+03:00`,
        "finish": `${dateStr}T09:18:07+03:00`,
        "factStart": `${dateStr}T08:40:57+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "1903262",
          "orderType": "planned",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T09:00:00+03:00`,
          "promiseFinish": `${dateStr}T11:00:00+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
      "id": 10304858,
      "name": "HotWheels",
      "siteKppNum": "d22e3384-ab3e-4958-91ec-fe026901d3ac",
      "tasks": [{
        "id": 18504836,
        "createdAt": `${dateStr}T08:04:43.130389+03:00`,
        "start": `${dateStr}T08:44:10.200000+03:00`,
        "finish": `${dateStr}T09:17:23.200000+03:00`,
        "factStart": `${dateStr}T08:39:48+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2048261",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T09:01:44+03:00`,
          "promiseFinish": `${dateStr}T10:01:44+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
      "id": 10290424,
      "name": "HotWheels",
      "siteKppNum": "389be4eb-8a84-47b5-9b21-c986365ab27c",
      "tasks": [{
        "id": 18478634,
        "createdAt": `${dateStr}T15:10:43.663544+03:00`,
        "start": `${dateStr}T08:44:26+03:00`,
        "finish": `${dateStr}T09:17:39+03:00`,
        "factStart": `${dateStr}T08:40:24+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "1776111",
          "orderType": "planned",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T09:00:00+03:00`,
          "promiseFinish": `${dateStr}T11:00:00+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
      "id": 10305801,
      "name": "HotWheels",
      "siteKppNum": "ebf907ac-2008-41f5-b8f0-55078761dcb1",
      "tasks": [{
        "id": 18506514,
        "createdAt": `${dateStr}T08:48:17.829683+03:00`,
        "start": `${dateStr}T09:00:17+03:00`,
        "finish": `${dateStr}T09:39:01+03:00`,
        "factStart": `${dateStr}T09:18:26+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2059407",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T09:19:28+03:00`,
          "promiseFinish": `${dateStr}T10:19:28+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
      "id": 10307558,
      "name": "HotWheels",
      "siteKppNum": "3e5471b1-82f8-493e-883e-50e182a3a6da",
      "tasks": [{
        "id": 18510071,
        "createdAt": `${dateStr}T09:40:09.881351+03:00`,
        "start": `${dateStr}T10:04:59.500000+03:00`,
        "finish": `${dateStr}T10:47:22.500000+03:00`,
        "factStart": `${dateStr}T10:41:09+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2079813",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T10:27:18+03:00`,
          "promiseFinish": `${dateStr}T11:27:18+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
      "id": 10301350,
      "name": "HotWheels",
      "siteKppNum": "b448e7da-8e36-4d5e-87ef-f0042316830e",
      "tasks": [{
        "id": 18498795,
        "createdAt": `${dateStr}T23:00:17.624902+03:00`,
        "start": `${dateStr}T10:44:47+03:00`,
        "finish": `${dateStr}T11:18:01+03:00`,
        "factStart": null,
        "factFinish": null,
        "orders": [{
          "reserveKey": "1984602",
          "orderType": "planned",
          "state": "CANCELED",
          "promiseStart": `${dateStr}T11:00:00+03:00`,
          "promiseFinish": `${dateStr}T13:00:00+03:00`
        }],
        "isMultidrop": false,
        "state": "CANCELED"
      }]
    }, {
      "id": 10311045,
      "name": "HotWheels",
      "siteKppNum": "5881a8b9-e018-4e2f-a53d-84a7da55254b",
      "tasks": [{
        "id": 18517010,
        "createdAt": `${dateStr}T11:08:10.659540+03:00`,
        "start": `${dateStr}T11:23:48.700000+03:00`,
        "finish": `${dateStr}T12:11:43.700000+03:00`,
        "factStart": `${dateStr}T11:51:04+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2128832",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T11:49:04+03:00`,
          "promiseFinish": `${dateStr}T12:49:04+03:00`
        }],
        "isMultidrop": false,
        "state": "ROAMING"
      }]
    }, {
      "id": 10311291,
      "name": "HotWheels",
      "siteKppNum": "8a89952a-65a5-4fdb-be43-66ab6fa3ec3c",
      "tasks": [{
        "id": 18517440,
        "createdAt": `${dateStr}T11:17:17.787467+03:00`,
        "start": `${dateStr}T11:31:05.300000+03:00`,
        "finish": `${dateStr}T12:12:58.300000+03:00`,
        "factStart": `${dateStr}T11:42:10+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2135350",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:54:24+03:00`,
          "promiseFinish": `${dateStr}T12:54:24+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
      "id": 10311158,
      "name": "HotWheels",
      "siteKppNum": "92fb2393-b000-493a-b4b3-bfa085de3e6a",
      "tasks": [{
        "id": 18517214,
        "createdAt": `${dateStr}T11:12:46.807988+03:00`,
        "start": `${dateStr}T11:36:06.400000+03:00`,
        "finish": `${dateStr}T12:14:24.400000+03:00`,
        "factStart": `${dateStr}T12:25:17+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2130491",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T11:54:40+03:00`,
          "promiseFinish": `${dateStr}T12:54:40+03:00`
        }],
        "isMultidrop": false,
        "state": "ROAMING"
      }]
    }, {
      "id": 10311461,
      "name": "HotWheels",
      "siteKppNum": "5c9ae960-3f4a-4ba7-99bc-87c86426247b",
      "tasks": [{
        "id": 185172,
        "createdAt": `${dateStr}T11:23:24.4097+03:00`,
        "start": `${dateStr}T11:36:24+03:00`,
        "finish": `${dateStr}T12:15:35+03:00`,
        "factStart": `${dateStr}T12:09:30+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2140002",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:57:28+03:00`,
          "promiseFinish": `${dateStr}T12:57:28+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
      "id": 10311351,
      "name": "HotWheels",
      "siteKppNum": "6cd62f37-dc4d-4626-8799-05374da99b3d",
      "tasks": [{
        "id": 18517549,
        "createdAt": `${dateStr}T11:19:44.878066+03:00`,
        "start": `${dateStr}T11:36:48.700000+03:00`,
        "finish": `${dateStr}T12:18:52.700000+03:00`,
        "factStart": `${dateStr}T11:42:10+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2137014",
          "orderType": "express",
          "state": "FINISHED",
          "promiseStart": `${dateStr}T11:58:45+03:00`,
          "promiseFinish": `${dateStr}T12:58:45+03:00`
        }],
        "isMultidrop": false,
        "state": "FINISHED"
      }]
    }, {
      "id": 10311604,
      "name": "HotWheels",
      "siteKppNum": "6b6984-7bd6-4cce-b6ab-0a2b41f94b36",
      "tasks": [{
        "id": 18517992,
        "createdAt": `${dateStr}T11:29:05.261046+03:00`,
        "start": `${dateStr}T11:42:04+03:00`,
        "finish": `${dateStr}T12:22:11+03:00`,
        "factStart": `${dateStr}T12:09:58+03:00`,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2143483",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T12:03:36+03:00`,
          "promiseFinish": `${dateStr}T13:03:36+03:00`
        }],
        "isMultidrop": false,
        "state": "ROAMING"
      }]
    }, {
      "id": 10314371,
      "name": "HotWheels",
      "siteKppNum": "39add48e-55fd-4cb0-a84f-313712a3aed3",
      "tasks": [{
        "id": 18523502,
        "createdAt": `${dateStr}T12:27:52.052994+03:00`,
        "start": `${dateStr}T12:43:00+03:00`,
        "finish": `${dateStr}T13:22:03+03:00`,
        "factStart": null,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2184881",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T13:04:03+03:00`,
          "promiseFinish": `${dateStr}T14:04:03+03:00`
        }],
        "isMultidrop": false,
        "state": "ROAMING"
      }]
    }, {
      "id": 10314462,
      "name": "HotWheels",
      "siteKppNum": "2f9e1779-5f3c-41ff-8301-314603ea3d7d",
      "tasks": [{
        "id": 18523657,
        "createdAt": `${dateStr}T12:30:56.593463+03:00`,
        "start": `${dateStr}T12:48:11+03:00`,
        "finish": `${dateStr}T13:41:02+03:00`,
        "factStart": null,
        "factFinish": null,
        "orders": [{
          "reserveKey": "2186928",
          "orderType": "express",
          "state": "WIP",
          "promiseStart": `${dateStr}T13:16:17+03:00`,
          "promiseFinish": `${dateStr}T14:16:17+03:00`
        }],
        "isMultidrop": false,
        "state": "ROAMING"
      }]
    }],
    "couriers": [
      {
        "id": 4031817,
        "name": "Gendalf",
        "siteKppNum": "103701",
        "dummy": false,
        "enabled": true,
        "windowOpen": `${dateStr}T09:00:00+03:00`,
        "windowClose": `${dateStr}T21:00:00+03:00`,
        "tasks": [{
          "id": 18502283,
          "createdAt": `${dateStr}T08:49:19.194099+03:00`,
          "start": `${dateStr}T19:46:59+05:00`,
          "finish": `${dateStr}T20:06:04+05:00`,
          "factStart": null,
          "factFinish": null,
          "orders": [{
            "reserveKey": "32036409",
            "orderType": "express",
            "state": "WIP",
            "promiseStart": `${dateStr}T20:03:35+03:00`,
            "promiseFinish": `${dateStr}T20:33:35+03:00`
          }],
          "isMultidrop": false,
          "state": "ROAMING"
        }, {
          "id": 18497640,
          "createdAt": `${dateStr}T23:42:21.169253+03:00`,
          "start": `${dateStr}T17:19:38+03:00`,
          "finish": `${dateStr}T17:42:24+03:00`,
          "factStart": `${dateStr}T17:10:42+03:00`,
          "factFinish": `${dateStr}T17:32:06+03:00`,
          "orders": [{
            "reserveKey": "098731961819",
            "orderType": "express",
            "state": "FINISHED",
            "promiseStart": `${dateStr}T17:32:24+03:00`,
            "promiseFinish": `${dateStr}T18:02:24+03:00`
          }],
          "isMultidrop": false,
          "state": "FINISHED"
        }, {
          "id": 18524033,
          "createdAt": `${dateStr}T14:33:17.041671+03:00`,
          "start": `${dateStr}T16:39:54+03:00`,
          "finish": `${dateStr}T17:35:59+03:00`,
          "factStart": `${dateStr}T16:34:37+03:00`,
          "factFinish": `${dateStr}T17:10:29+03:00`,
          "orders": [{
            "reserveKey": "098732099344",
            "orderType": "express",
            "state": "FINISHED",
            "promiseStart": `${dateStr}T16:51:29.300000+03:00`,
            "promiseFinish": `${dateStr}T17:21:29.300000+03:00`
          }]
        }]
      }
    ]
  }
}
