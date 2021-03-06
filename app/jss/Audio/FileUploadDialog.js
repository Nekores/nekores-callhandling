export const styleSheet = theme => ({
  dialogPaper: {
    maxWidth: "100%",
    width: "60%",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minWidth: "100%"
    }
  },

  dialogContent: {
    overflow: "hidden"
  },

  errorText: {
    color: theme.colors.primary.errorRed,
    fontWeight: 500
  },

  errorIcon: {
    marginRight: theme.spacing.unit * 2,
    position: "relative",
    top: 6
  },

  rowIssue: {
    width: "100%",
    padding: 0
  },

  rowIssueContent: {
    width: "100%"
  },

  listItem: {
    borderBottom: "1px solid #ccc",
    padding: "20px 30px",
    width: "100%",
    minWidth: "100%"
  },

  listItemHeader: {
    fontSize: "1.5em",
    width: "100%",
    justifyContent: "space-between"
  },

  row: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "black"
  },

  issues: {
    color: theme.colors.primary.errorRed,
    float: "right",
    fontWeight: 500
  },

  columnIssueWrapper: {
    // padding: "15px 30px",
    justifyContent: "space-between",
    "&:hover": {
      backgroundColor: theme.colors.primary.backgroundGrey
    }
  },

  columnIssue: {},

  issueButtons: {},

  viewButton: {
    textDecoration: "none",
    cursor: "pointer",
    textTransform: "uppercase",
    "&:hover": {
      textDecoration: "none"
    }
  },

  columnIssueTitle: {
    fontWeight: "bold",
    lineHeight: "1.7em"
  },

  columnIssueContent: {
    lineHeight: "1.7em"
  },

  columnIssueRows: {
    fontWeight: 500
  },

  fileUploadZone: {
    width: "100%"
  }
});
