import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





function Getdata() {
  const [datainfo, setDatainfo] = useState({
    arr: []

  })
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        const persons = res.data;
        console.log(res.data)
        setDatainfo({ ...datainfo, arr: persons });
      })
  }, [])



  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell >User ID</TableCell>
              <TableCell >ID</TableCell>
              <TableCell >Title</TableCell>
              <TableCell >Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              _.map(datainfo.arr, (each, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{each.userId}</TableCell>
                    <TableCell>{each.id}</TableCell>
                    <TableCell>{each.title}</TableCell>
                    <TableCell>{each.completed}</TableCell>

                  </TableRow>
                )
              })
            }



          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Getdata;