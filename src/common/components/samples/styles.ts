const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
  },
  listItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    margin: "0rem",
  },
  listItemFirstCol: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  listItemSecondCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
  },
  listItemPatientName: {
    width: "230px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  listItemTagNo: {
    fontFamily: "Abel",
    fontSize: "1.3rem",
    fontWeight: 600,
    color: "#079992",
  },
  listItemTagNoPending: {
    fontFamily: "Abel",
    fontSize: "1.3rem",
    fontWeight: 600,
    color: "#e1b12c",
  },
  listItemTestType: {
    color: "#079992",
  },
  detailsItemTagNo: {
    fontFamily: "Abel",
    fontSize: "1.3em",
  },
  detailsItemPatientName: {
    fontSize: "1.1em",
  },
  detailsItemTestResult: {
    fontSize: "1.1em",
  },
  statusCompleted: {
    color: "#27ae60",
  },
  statusPending: {},
};
export default styles;
