import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import {
  tableComponentData,
  StyledTableCell,
  StyledTableRow,
} from "../utils/helper";
import Paper from "@mui/material/Paper";


const Select = ({ options, value, onChange }) => (
  <select style={{ margin: "30px 40px 40px 50px", width: '400px', height: "30px" }} value={value} onChange={onChange}>
    {options.map((name) => (
      <option key={name} value={name}>
        {name}
      </option>
    ))}
  </select>
);

const TableComponent = () => {
  const [h1, setH1] = useState("All");
  const [h2, setH2] = useState("All");

  const filter = tableComponentData.filter(
    (option) =>
      (h1 === "All" || option.h1 === h1) && (h2 === "All" || option.h2 === h2)
  );

  const handleChangeH1 = (event) => {
    setH1(event.target.value);
  };

  const handleChangeH2 = (event) => {
    setH2(event.target.value);
  };

  const [h1arr, h2arr] = tableComponentData.reduce(
    ([firstOption, secondOption], { h1, h2 }) => [
      { ...firstOption, [h1]: h1 },
      { ...secondOption, [h2]: h2 },
    ],
    [
      {
        All: "All",
      },
      {
        All: "All",
      },
    ]
  );

  return (
    <>
      <Select
        onChange={handleChangeH1}
        value={h1}
        options={Object.values(h1arr)}
      />
      <Select
        onChange={handleChangeH2}
        value={h2}
        options={Object.values(h2arr)}
      />

      <div>
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="center">H1</StyledTableCell>
                  <StyledTableCell align="center">H2</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filter.map((row) => (
                  <StyledTableRow key={row}>
                    <StyledTableCell scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center" scope="row">
                      {row.h1}
                    </StyledTableCell>
                    <StyledTableCell align="center" scope="row">
                      {row.h2}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      </div>
    </>
  );
};

export default TableComponent;
