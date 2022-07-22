import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

function Getdata() {
  const [datainfo, setDatainfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setDatainfo(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>USERNAME</TableCell>
              <TableCell>EMAIL</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {datainfo.map((each, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{each.id}</TableCell>
                  <TableCell>{each.name}</TableCell>
                  <TableCell>{each.username}</TableCell>
                  <TableCell>{each.email}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Getdata;
