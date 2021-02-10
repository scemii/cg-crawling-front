import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function SimpleTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Graphic Card</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Picture</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((element) => (
            <TableRow key={element.gc}>
              <TableCell component="th" scope="row">
                {element.gc}
              </TableCell>
              <TableCell
                className={element.status !== "Rupture" && "en-stock"}
                align="right"
              >
                {element.status}
              </TableCell>
              <TableCell align="right">{element.price}</TableCell>
              <TableCell align="right">
                <a target="_blank" rel="noreferrer" href={element.link}>
                  <img
                    className="table-image"
                    src={element.image}
                    alt={element.image}
                  />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
