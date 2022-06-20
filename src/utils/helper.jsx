import { clientData } from "./constant";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { TableRow, TableCell } from "@material-ui/core";

let name = "";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const transformData = (data, accId) => {
  let temp = {};
  if (typeof data === "object") {
    const { accountId, name, sub, levelName } = data;
    let leafNodeAccountId = accId ? accId.concat("_", accountId) : accountId;
    temp.label = name;
    temp.levelName = levelName;
    temp.value = leafNodeAccountId;
    temp.originalId = accountId;
    temp.leaf = sub ? false : true;
    if (sub) {
      temp.children = sub.map((element) =>
        transformData(element, leafNodeAccountId)
      );
    }
  }
  return temp;
};

const transformDataforH1 = transformData(clientData?.H1);
const transformDataforH2 = transformData(clientData?.H2);

const recursiveFunction = (H1) => {
  console.log(H1.children);
  if (H1.children) {
    name = H1.label;
    H1.children.map((element) => recursiveFunction(element));
  } else {
    name = H1.label;
    return name;
  }
  return name;
};

export const tableComponentData = [
  {
    name: "Task1",
    h1: recursiveFunction(transformDataforH1?.children[0]),
    h2: recursiveFunction(transformDataforH2?.children[0]),
  },
  {
    name: "Task2",
    h1: recursiveFunction(transformDataforH1?.children[1]),
    h2: recursiveFunction(transformDataforH2?.children[1]),
  },
  {
    name: "Task3",
    h1: recursiveFunction(transformDataforH1?.children[0]),
    h2: recursiveFunction(transformDataforH2?.children[1]),
  },
  {
    name: "Task4",
    h1: recursiveFunction(transformDataforH1?.children[1]),
    h2: recursiveFunction(transformDataforH2?.children[0]),
  },
];
