import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { clientData } from "./constant";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TestComponent = () => {
  let accId = clientData?.H1?.accountId;
  let arr = [];

  const temp = (H1) => {
    if (H1.sub) {
      accId = accId + "_" + H1.accountId;
      H1.sub.map((element) => temp(element));
    } else {
      accId = accId + "_" + H1.accountId;
      return accId;
    }
    return accId;
  };

  const h1 = temp(clientData?.H1?.sub[0]);

  accId = clientData?.H1?.accountId;

  const data1 = {
    label: clientData?.H1?.name,
    levelName: clientData?.H1?.levelName,
    originalId: clientData?.H1?.accountId,
    children: clientData?.H1?.sub,
    h1: h1,
    h2: temp(clientData?.H1?.sub[1]),
  };

  let accId1 = clientData?.H2?.accountId;

  const temp1 = (H1) => {
    if (H1.sub) {
      accId1 = accId1 + "_" + H1.accountId;
      H1.sub.map((element) => temp1(element));
    } else {
      accId1 = accId1 + "_" + H1.accountId;
      return accId1;
    }
    return accId1;
  };

  const dataa = temp1(clientData?.H2?.sub[0]);

  accId1 = clientData?.H2?.accountId;

  const data2 = {
    label: clientData?.H2?.name,
    levelName: clientData?.H2?.levelName,
    originalId: clientData?.H2?.accountId,
    children: clientData?.H2?.sub,
    h1: dataa,
    h2: temp1(clientData?.H2?.sub[1]),
  };

  arr.push(data1, data2);

  const [rows, setRows] = useState(arr);
  const [searched, setSearched] = useState("");
  const classes = useStyles();

  const requestSearch = (searchedVal) => {
    const filteredRows = arr.filter((row) => {
      return row.label.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
      <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">H1</TableCell>
                <TableCell align="center">H2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
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
      </Paper>
      <br />
    </>
  );
};

export default TestComponent;


