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

function createData(المعلــم, المُيــسر) {
  return { المعلــم, المُيــسر };
}

const rows = [
  createData(
    `يهتمون بعملية التعلم.`,
    `من المفترض فيهم تسجيل واستيعاب المعلومات.`
  ),
  createData(
    `يتعلمون كيفية مراقبة ومناقشة ما يتعلمونها.`,
    `هم يستقبلون ما يتم تدريسه في المحاضرات ولا يعملون بشكل نشط لفهم واستيعاب المفاهيم الجديدة.`
  ),
  createData(
    `يتعاونون مع بعضهم البعض لاستكشاف وبناء إطار العمل والمعرفة والذي يمكن تطبيقه على المواقف الجديدة.`,
    ``
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              width="34%"
              style={{ fontWeight: 'bold' }}
            >
              الطلاب في التعلم النشط{' '}
            </TableCell>
            <TableCell
              align="center"
              width="33%"
              style={{ fontWeight: 'bold' }}
            >
              الطلاب في التعلم غـير النشط{' '}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" align="center">
                {row.المعلــم}
              </TableCell>
              <TableCell align="center">{row.المُيــسر}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
