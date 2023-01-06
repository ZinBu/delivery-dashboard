import React from 'react';
import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors'
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
import { enUS } from '@material-ui/core/locale';
import { orderStatuses } from '../../../choices/Orders';


const taxiIcon = <LocalTaxiOutlinedIcon style={{ color: deepOrange[500] }}/>

const localizedTheme = createTheme({
    palette: {
        primary: { main: '#1976d2' },
      },
    },
    enUS
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

const emptyTaxiParam = '-';

const inflictTaxiField = field => `${field || emptyTaxiParam}`;

const setCourierData = order => {
      const taxiDriver = [
        ['Taxi provider', inflictTaxiField(order.provider)],
        ['ID', inflictTaxiField(order.claimId)],
        ['Car model', inflictTaxiField(order.carModel)],
        ['№', inflictTaxiField(order.carNumber)],
        ['Status', `${order.extra ? order.extra.providerStatus : emptyTaxiParam}`]
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
        <TableCell align="center">{order.deliveringBegin}</TableCell>
        <TableCell align="center">{order.clientArrivalTime}</TableCell>
        <TableCell align="center">{order.deliveringEnd || '-'}</TableCell>
        <TableCell align="center">{orderStatuses[order.state]}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Extra information
              </Typography>
              {order.isTaxi ? setCourierData(order) : 'Nothing here yet'}
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
            <TableCell>Order's number</TableCell>
            <TableCell align="center">Weight (kg)</TableCell>
            <TableCell align="center">Items/SKU</TableCell>
            <TableCell align="center">Picker/№</TableCell>
            <TableCell align="center">Courier/№</TableCell>
            <TableCell align="center">Assemble start</TableCell>
            <TableCell align="center">Assemble end</TableCell>
            <TableCell align="center">Delivery start</TableCell>
            <TableCell align="center">Client arrival</TableCell>
            <TableCell align="center">Delivery end</TableCell>
            <TableCell align="center">Status</TableCell>
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
      <ThemeProvider theme={localizedTheme}>
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