/* eslint-disable no-irregular-whitespace */
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
    `يمكنهم أن يتعلموا إعادة صياغة المعلومات الجديدة بالاشتراك مع معرفتهم السابقة لصياغة معرفة جديدة من جهة المحتوى والتدريب على استخدامه.`,
    ` من المفترض أن يدخلوا المنهج بعقول خالية مثل الأوعية الفارغة أو الإسفنج للملء بالمعرفة. ​`
  ),
  createData(
    `من المفترض فيهم أن يبحثوا عن التعريفات والمصطلحات قبل وبعد الدرس.`,
    `يعملون في الامتحانات بطريقة سلبية مثل تسجيلات شرائط التسجيل (كالآلات) .​​`
  ),
  createData(
    `اختبار واستخدام الحقائق والمفاهيم التي يتم تعلمها.`,
    `يقوم الطلاب بحفظ ما يخبرهم به المعلم فقط لأداء الاختبارات ويتم نسيانها بعد الاختبار مباشرة.`
  ),
  createData(
    `تطوير المهارات في صياغة واستخدام المعرفة بتوجيهات المعلم.`,
    `لا يطبقون ما يتعلمونه فى حياتهم العملية.`
  ),
  createData(
    `التعرض لأساليب مختلفة للتعلم النشط لتغطية احتياجاتهم المتنوعة.`,
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
