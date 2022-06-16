/* eslint-disable react-hooks/rules-of-hooks */
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
import { clientData } from '../components/Table/constant';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const originalRows = [
  {
    name: 'Test1',
    h1: '603e0cd82ea0970012f4eda0_603e0cd82ea0970012f4eda1_603e0cd82ea0970012f4eda2_603e0cd82ea0970012f4eda3_603e0cd82ea0970012f4eda4',
    h2: '603e0cdc2ea0970012f4edac_603e0cdc2ea0970012f4edad_603e0cdc2ea0970012f4edae_603e0cdc2ea0970012f4edaf_603e0cdc2ea0970012f4edb0'
  },
  {
    name: 'Test2',
    h1: '603e0cd82ea0970012f4eda0_603e0cd82ea0970012f4eda6_603e0cd82ea0970012f4eda7_603e0cd82ea0970012f4eda8_603e0cd82ea0970012f4eda9',
    h2: '603e0cdc2ea0970012f4edac_603e0cdc2ea0970012f4edb1_603e0cdc2ea0970012f4edb2_603e0cdc2ea0970012f4edb3_603e0cdc2ea0970012f4edb4',
  },
  {
    name: 'Test3',
    h1: '603e0cd82ea0970012f4eda0_603e0cd82ea0970012f4eda1_603e0cd82ea0970012f4eda2_603e0cd82ea0970012f4eda3_603e0cd82ea0970012f4eda4',
    h2: '603e0cdc2ea0970012f4edac_603e0cdc2ea0970012f4edb1_603e0cdc2ea0970012f4edb2_603e0cdc2ea0970012f4edb3_603e0cdc2ea0970012f4edb4',
  },
  {
    name: 'Test4',
    h1: '603e0cd82ea0970012f4eda0_603e0cd82ea0970012f4eda6_603e0cd82ea0970012f4eda7_603e0cd82ea0970012f4eda8_603e0cd82ea0970012f4eda9',
    h2: '603e0cdc2ea0970012f4edac_603e0cdc2ea0970012f4edad_603e0cdc2ea0970012f4edae_603e0cdc2ea0970012f4edaf_603e0cdc2ea0970012f4edb0'
  }
];

const ClientComponent = () => {

    let accId = clientData?.H1?.accountId;

    const temp = (H1) => {
        if (H1.sub) {
          accId = accId + "_" + H1.accountId;
          H1.sub.map((element) => temp(element));
        } else {
            accId = accId + "_" + H1.accountId
          return accId;
        }
        return accId;
      };


 const data = {
    label: clientData?.H1?.name,
	levelname: clientData?.H1?.levelName,
	originalValue: clientData?.H1?.accountId,
	children: clientData?.H1?.sub,
    value: temp(clientData?.H1?.sub[0])
 }

 console.log('data', data)

 accId = clientData?.H1?.accountId;

 const data1 = {
    label: clientData?.H1?.name,
	levelname: clientData?.H1?.levelName,
	originalValue: clientData?.H1?.accountId,
	children: clientData?.H1?.sub,
    value: temp(clientData?.H1?.sub[1])
 }

 console.log('data1', data1)


 let accId1 = clientData?.H2?.accountId;

 const temp1 = (H1) => {
     if (H1.sub) {
       accId1 = accId1 + "_" + H1.accountId;
       H1.sub.map((element) => temp1(element));
     } else {
         accId1 = accId1 + "_" + H1.accountId
       return accId1;
     }
     return accId1;
   };


const data2 = {
 label: clientData?.H2?.name,
 levelname: clientData?.H2?.levelName,
 originalValue: clientData?.H2?.accountId,
 children: clientData?.H2?.sub,
 value: temp1(clientData?.H2?.sub[0])
}

console.log('data2', data2)

accId1 = clientData?.H2?.accountId;

const data3 = {
 label: clientData?.H2?.name,
 levelname: clientData?.H2?.levelName,
 originalValue: clientData?.H2?.accountId,
 children: clientData?.H2?.sub,
 value: temp1(clientData?.H2?.sub[1])
}

console.log('data3', data3)

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const classes = useStyles();

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
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
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
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
}

export default ClientComponent;
