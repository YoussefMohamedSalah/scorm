/* eslint-disable react/no-array-index-key */
/* eslint-disable no-irregular-whitespace */
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
    `يعتبر هذا التعليم نشاطاً روتينياً عندما يتمكن المعلمون من تجميع مذكراتهم خلال سنة أو اثنتين ثم تكرار نفس المنهج سنة بعد سنة بمجهود قليل أو بدون مجهود.​

     ​`,
    `هذا التعليم ديناميكي والمراجعات المستمرة لأساليب التعليم والتقديم والوسائل السمعية والبصرية والعروض وغيرها متاحة بتنويعات لا نهائية.`
  ),
  createData(
    `إن هذا التعليم استاتيكي (ثابت – غير متغير)​

          ​`,
    `يقدم المعلم الأمثلة والتصويرات للمفاهيم والعمليات والخصائص والوسائل البصرية والعروض وغيرها مع تكاملها في عروض الفصول.`
  ),
  createData(
    `يقدم المعلم المحتوى في شكل محاضرة. ​

           ​`,
    `يشرح المعلم أثناء عملية التعلم النشط فى بيئة ثلاثية الأبعاد (المفاهيم - المبادىء – الأساليب).`
  ),

  createData(
    ` يشرح المعلم المفاهيم في بيئة ثنائية الأبعاد.​

            ​`,
    `يقوم الطلاب بالتدريب على تطبيق هذه المهارات والمفاهيم.`
  ),
  createData(
    ` يتسلم الطلاب فقط المعرفة والمعلومات في اتجاه واحد بدون المشاركة في التعلم من جانبهم.​

              ​`,
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
              width="33%"
              style={{ fontWeight: 'bold' }}
            >
              المعلــم{' '}
            </TableCell>
            <TableCell
              align="center"
              width="34%"
              style={{ fontWeight: 'bold' }}
            >
              المُيــسر
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
