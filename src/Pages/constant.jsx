export const tableData = [
  {
    name: "Test1",
    h1: "603e0cd82ea0970012f4eda0_603e0cd82ea0970012f4eda1_603e0cd82ea0970012f4eda2_603e0cd82ea0970012f4eda3_603e0cd82ea0970012f4eda4",
    h2: "603e0cdc2ea0970012f4edac_603e0cdc2ea0970012f4edad_603e0cdc2ea0970012f4edae_603e0cdc2ea0970012f4edaf_603e0cdc2ea0970012f4edb0",
  },
  {
    name: "Test2",
    h1: "603e0cd82ea0970012f4eda0_603e0cd82ea0970012f4eda6_603e0cd82ea0970012f4eda7_603e0cd82ea0970012f4eda8_603e0cd82ea0970012f4eda9",
    h2: "603e0cdc2ea0970012f4edac_603e0cdc2ea0970012f4edb1_603e0cdc2ea0970012f4edb2_603e0cdc2ea0970012f4edb3_603e0cdc2ea0970012f4edb4",
  },
  {
    name: "Test3",
    h1: "603e0cd82ea0970012f4eda0_603e0cd82ea0970012f4eda1_603e0cd82ea0970012f4eda2_603e0cd82ea0970012f4eda3_603e0cd82ea0970012f4eda4",
    h2: "603e0cdc2ea0970012f4edac_603e0cdc2ea0970012f4edb1_603e0cdc2ea0970012f4edb2_603e0cdc2ea0970012f4edb3_603e0cdc2ea0970012f4edb4",
  },
  {
    name: "Test4",
    h1: "603e0cd82ea0970012f4eda0_603e0cd82ea0970012f4eda6_603e0cd82ea0970012f4eda7_603e0cd82ea0970012f4eda8_603e0cd82ea0970012f4eda9",
    h2: "603e0cdc2ea0970012f4edac_603e0cdc2ea0970012f4edad_603e0cdc2ea0970012f4edae_603e0cdc2ea0970012f4edaf_603e0cdc2ea0970012f4edb0",
  },
];

export const columns = [
  {
    field: "name",
    label: "name",
    align: "center",
  },
  {
    field: "h1",
    label: "h1",
    align: "center",
  },
  {
    field: "h2",
    label: "h2",
  },
];

export const clientData = {
  clientCode: "A_ABBO",
  clientName: "Abbott",
  H1: {
    levelName: "Abbott Global",
    name: "Abbott Global",
    accountId: "603e0cd82ea0970012f4eda0",
    sub: [
      {
        accountId: "603e0cd82ea0970012f4eda1",
        levelName: "Zone",
        name: "Eartern",
        sub: [
          {
            accountId: "603e0cd82ea0970012f4eda2",
            levelName: "Region",
            name: "Europe",
            sub: [
              {
                accountId: "603e0cd82ea0970012f4eda3",
                levelName: "Sub Region",
                name: "Western Europe",
                sub: [
                  {
                    accountId: "603e0cd82ea0970012f4eda4",
                    levelName: "Market",
                    name: "United Kingdom of Great Britain and Northern Ireland (the)",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        accountId: "603e0cd82ea0970012f4eda6",
        levelName: "Zone",
        name: "Western",
        sub: [
          {
            accountId: "603e0cd82ea0970012f4eda7",
            levelName: "Region",
            name: "Americas",
            sub: [
              {
                accountId: "603e0cd82ea0970012f4eda8",
                levelName: "Sub Region",
                name: "North Americas",
                sub: [
                  {
                    accountId: "603e0cd82ea0970012f4eda9",
                    levelName: "Market",
                    name: "United States of America (the)",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  H2: {
    levelName: "All Abbott",
    name: "All Abbott",
    accountId: "603e0cdc2ea0970012f4edac",
    sub: [
      {
        levelName: "Business Unit",
        name: "Personal Health",
        accountId: "603e0cdc2ea0970012f4edad",
        sub: [
          {
            levelName: "Business Group",
            name: "Floor Design",
            accountId: "603e0cdc2ea0970012f4edae",
            sub: [
              {
                levelName: "Category",
                name: "Electric",
                accountId: "603e0cdc2ea0970012f4edaf",
                sub: [
                  {
                    levelName: "Product",
                    name: "Speed Pro",
                    accountId: "603e0cdc2ea0970012f4edb0",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        levelName: "Business Unit",
        name: "Health System",
        accountId: "603e0cdc2ea0970012f4edb1",
        sub: [
          {
            levelName: "Business Group",
            name: "Floor Map",
            accountId: "603e0cdc2ea0970012f4edb2",
            sub: [
              {
                levelName: "Category",
                name: "Electronic",
                accountId: "603e0cdc2ea0970012f4edb3",
                sub: [
                  {
                    levelName: "Product",
                    name: "Speed Max Pro",
                    accountId: "603e0cdc2ea0970012f4edb4",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

let accId = clientData?.H1?.accountId;

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

export const data1 = {
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

export const data2 = {
  label: clientData?.H2?.name,
  levelName: clientData?.H2?.levelName,
  originalId: clientData?.H2?.accountId,
  children: clientData?.H2?.sub,
  h1: dataa,
  h2: temp1(clientData?.H2?.sub[1]),
};

