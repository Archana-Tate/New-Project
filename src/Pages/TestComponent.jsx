import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { data1, data2 } from "./constant";
import { Input } from "reactstrap";

const TableComponent = () => {
  const [initialData, setInitialData] = React.useState([]);
  const [selectedData, setSelectedData] = React.useState([]);

  let arr = [];
  arr.push(data1, data2);

  React.useEffect(() => {
    setInitialData(arr);
    setSelectedData(arr);
  }, []);

  const handleDropDownData = (label) => {
    let tableData = JSON.parse(JSON.stringify(initialData));

    if (label !== "") {
      tableData = tableData.filter((row) => row.label === label);
    }

    setSelectedData(tableData);
  };

  return (
    <>
      <Input
        type="select"
        style={{
          height: "30px",
          fontSize: "18px",
          boxShadow: "none",
          marginTop: "20px",
          marginBottom: "10px",
          marginLeft: "500px",
        }}
        onChange={(e) => handleDropDownData(e.target.value)}
      >
        <option />
        <option>Abbott Global</option>
        <option>All Abbott</option>
      </Input>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">H1</TableCell>
              <TableCell align="center">H2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedData.map((row) => (
              <TableRow key={row.label}>
                <TableCell component="th" scope="row">
                  {row.label}
                </TableCell>
                <TableCell align="right">{row.h1}</TableCell>
                <TableCell align="right">{row.h2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableComponent;
