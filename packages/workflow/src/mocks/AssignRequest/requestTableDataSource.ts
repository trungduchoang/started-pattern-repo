import moment from "moment";

const dataTableAssignRequest = [
  {
    key: "1",
    ID: "1",
    CODE: "ABC-XYZ-2020",
    TITLE: "New York No. 1 Lake Park21312312312",
    USERAPPLICANT: "baotien.ho",
    SUBMITDATE: moment("11-10-2019", "DD-MM-YYYY").format("L"),
    STATUS: { pedding: false, approve: true, decline: false },
    ACTIONS: "Detail"
  },
  {
    key: "2",
    ID: "2",
    CODE: "ABC-DSW-2010",
    TITLE: "New York No. 1 Lake Park",
    USERAPPLICANT: "baotien.ho",
    SUBMITDATE: moment("11-10-2019", "DD-MM-YYYY").format("L"),
    STATUS: { pedding: false, approve: true, decline: false },
    ACTIONS: "Detail"
  },
  {
    key: "3",
    ID: "3",
    CODE: "ABC-XYZ-2020",
    TITLE: "New York No. 1 Lake Park",
    USERAPPLICANT: "baotien.ho",
    SUBMITDATE: moment("09-10-2019", "DD-MM-YYYY").format("L"),
    STATUS: { pedding: true, approve: false, decline: false },
    ACTIONS: "Detail"
  },
  {
    key: "4",
    ID: "4",
    CODE: "ABC-DSW-2010",
    TITLE: "New York No. 1 Lake Park",
    USERAPPLICANT: "baotien.ho",
    SUBMITDATE: moment("10-22-2019", "DD-MM-YYYY").format("L"),
    STATUS: { pedding: false, approve: false, decline: true },
    ACTIONS: "Detail"
  },
  {
    key: "5",
    ID: "5",
    CODE: "ABC-XYZ-2020",
    TITLE: "New York No. 1 Lake Park",
    USERAPPLICANT: "baotien.ho",
    SUBMITDATE: moment("08-02-2019", "DD-MM-YYYY").format("L"),
    STATUS: { pedding: false, approve: true, decline: false },
    ACTIONS: "Detail"
  },
  {
    key: "6",
    ID: "6",
    CODE: "ABC-DSW-2010",
    TITLE: "New York No. 1 Lake Park",
    USERAPPLICANT: "baotien.ho",
    SUBMITDATE: moment("06-10-2019", "DD-MM-YYYY").format("L"),
    STATUS: { pedding: true, approve: false, decline: false },
    ACTIONS: "Detail"
  }
];

export default dataTableAssignRequest;
