import React from 'react';
import AccessTimeTwoToneIcon from '@material-ui/icons/AccessTimeTwoTone';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { green, red, deepOrange } from '@material-ui/core/colors'
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ruRU } from '@material-ui/core/locale';
import {OrderStatesChoice} from "../choices/Orders";

const orderStatuses = {
  [OrderStatesChoice.WIP]: <div style={{borderRadius: '5px'}} title="В работе.."><AccessTimeTwoToneIcon color="primary"/></div>,
  [OrderStatesChoice.FINISHED]: <div title="Завершен"><CheckCircleTwoToneIcon style={{ color: green[500] }} /></div>,
  [OrderStatesChoice.CANCELED]: <div title="Отменен"><CancelTwoToneIcon style={{ color: red[700] }} /></div>
}

const taxiIcon = <LocalTaxiOutlinedIcon style={{ color: deepOrange[500] }}/>

const russianTheme = createTheme({
    palette: {
        primary: { main: '#1976d2' },
      },
    },
    ruRU
);

const useStyles = makeStyles({
  table: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  container: {
    maxHeight: '60vh',
    minHeight: '60vh',
  },
})

const setCourierData = order => {
      const taxiDriver = [
        ['Такси', `${order.provider || '-'}`],
        ['ID', `${order.claimId || '-'}`],
        ['Авто', `${order.carModel || '-'}`],
        ['№', `${order.carNumber || '-'}`],
        ['Статус', `${order.extra.providerStatus || '-'}`]
      ]
      return taxiDriver.map((el, index) => <div key={index}><b>{el[0]}</b>: {el[1]}</div>)
}

const Row = props => {
  const { order } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.table}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{order.reserveKey}</TableCell>
        <TableCell align="center">{order.basketWeight}</TableCell>
        <TableCell align="center">{order.itemsCount}/{order.skuCount}</TableCell>
        <TableCell align="left"><div>{order.pickerName}</div><div>{order.pickerKpp}</div></TableCell>
        <TableCell align="left">
            {
              order.isTaxi ? (
                taxiIcon
              ) : (
                <React.Fragment>
                  <Box>{order.courierName}</Box>
                  <Box>{order.courierKpp}</Box>
                </React.Fragment>
              )
            }
        </TableCell>
        <TableCell align="center">{order.complectationBegin}</TableCell>
        <TableCell align="center">{order.complectationEnd}</TableCell>
        <TableCell align="center">{order.deliveryBegin || '-'}</TableCell>
        <TableCell align="center">{order.clientArrivalTime}</TableCell>
        <TableCell align="center">{order.deliveryEnd || '-'}</TableCell>
        <TableCell align="center">{orderStatuses[order.state]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Доп. информация
              </Typography>
              {order.isTaxi ? setCourierData(order) : 'Пока тут пусто'}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}


const TableHeader = () => {
    return (
      <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Номер заказа</TableCell>
            <TableCell align="center">Вес корзины (кг)</TableCell>
            <TableCell align="center">Штук/SKU</TableCell>
            <TableCell align="center">Пикер/КПП</TableCell>
            <TableCell align="center">Курьер/КПП</TableCell>
            <TableCell align="center">Начало сборки</TableCell>
            <TableCell align="center">Конец сборки</TableCell>
            <TableCell align="center">Время выхода курьера</TableCell>
            <TableCell align="center">Время доставки клиенту</TableCell>
            <TableCell align="center">Время возвращения курьера</TableCell>
            <TableCell align="center">Статус</TableCell>
          </TableRow>
        </TableHead>
    )
}

const OrdersTable = props => {
  const defaultPaginationValue = 10
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultPaginationValue);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={russianTheme}>
        <TableContainer component={Paper}  className={classes.container}>
          <Table aria-label="collapsible table" stickyHeader>
            <TableHeader />
            <TableBody>
              {
                props.hubData.slice(
                    page * rowsPerPage, page * rowsPerPage + rowsPerPage
                ).map(
                    (order, index) => (<Row key={index} order={order} />)
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[defaultPaginationValue, 25, 50]}
            component="div"
            count={props.hubData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default OrdersTable