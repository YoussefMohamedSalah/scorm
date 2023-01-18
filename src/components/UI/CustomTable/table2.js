/* eslint-disable react/no-array-index-key */
/* eslint-disable react/self-closing-comp */
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

function createData(التقويم, تكويني, تحصيلي) {
  return { التقويم, تكويني, تحصيلي };
}

const rows = [
  createData(
    `اختيار ثنائي <br /> اختيار ثنائي متعدد`,
    `​وقت الاستجابة السريع <br/> تغطية كمية كبيرة من المواد في وقت قصير`,
    `من السهل تخمين الإجابة الصحيحة <br /> يجب فقط التعرف على الإجابة الصحيحة`
  ),
  createData(
    `اختيار من متعدد`,
    `النوع الشائع جدا <br /> يقيس المعرفة أو المهارات على مستوى أعلى <br /> الإجابات يمكن أن تختلف حسب الصحة النسبية`,
    `الحاجة فقط إلى التعرف على الجواب الصحيح`
  ),
  createData(
    `مطابقة​`,
    `موجزة <br /> تتسم بالكفاءة <br /> سهلة للبناء <br/> سهلة فى تسجيل النقاط`,
    `تشجيع حفظ المعلومات الوقائعية المنخفضة المستوى <br /> يجب فقط تحديد الرد الصحيح`
  ),
  createData(
    `كتابة الإجابة القصيرة`,
    `ولأن الردود تصدر عن الطالب ، فإن المعرفة الجزئية ليست كافية.`,
    `يمكن أن يكون تسجيل النقاط (تقييم الأداء) صعباً <br /> وقد يؤدي تسجيل الدرجات إلى تمثيل غير دقيق لقدرات الطلاب`
  ),
  createData(
    `كتابة مقال`,
    `تقيس نتائج التعلم المعقدة <br /> تقيس أكثر من نتيجة`,
    `كتابة السؤال بشكل مناسب يتطلب وقت وقدرة عالية <br /> يصعب تصحيح  وتسجيل النقاط بشكل موثوق`
  ),
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
              width="33%"
              style={{ fontWeight: 'bold' }}
            ></TableCell>
            <TableCell
              align="center"
              width="33%"
              style={{ fontWeight: 'bold' }}
            >
              مزايا
            </TableCell>
            <TableCell
              align="center"
              width="34%"
              style={{ fontWeight: 'bold' }}
            >
              عيوب
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
              <TableCell align="center"> {row.تحصيلي} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
