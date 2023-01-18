/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '../CustomPaper';

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

function createData(التقويم, تكويني, تحصيلي) {
  return { التقويم, تكويني, تحصيلي };
}

const rows = [
  createData(`كتابة الإجابة القصيرة`, `اختيار ثنائي`),
  createData(`كتابة مقال`, `اختيار ثنائي متعدد`),
  createData(``, `اختيار من متعدد`),
  createData(``, `مطابقة`),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              width="34%"
              style={{ fontWeight: 'bold' }}
            >
              الاستجابة الإنشائية <br /> Constructed Response
            </TableCell>
            <TableCell
              align="center"
              width="33%"
              style={{ fontWeight: 'bold' }}
            >
              الاستجابة المختارة <br /> Selected Response
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" align="center">
                {row.التقويم}
              </TableCell>
              <TableCell align="center"> {row.تكويني} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
