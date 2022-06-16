import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import styleTable from './styleTable';

const TableComponent = (props) => {
  const { columns, data } = props;
  return (
    <>
      <TableContainer >
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((columns) => {
                const { align, field, label } = columns;
                return (
                  <TableCell align={align} key={field}>
                    {label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => {
              const { name, h1, h2 } = data;
              return (
                <TableRow>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell>{h1}</TableCell>
                  <TableCell>{h2}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
TableComponent.propTypes = {
  data: PropTypes.string.isRequired,
  columns: PropTypes.string.isRequired,
};

export default TableComponent;