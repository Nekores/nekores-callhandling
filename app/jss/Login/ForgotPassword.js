export const styleSheet = theme => ({
  loginComponent: {
    position: "relative",
    transform: "translateY(-1%)",
    top: "15vh",
    [theme.breakpoints.only("md")]: {
      maxWidth: "398px",
      transform: "translateY(2%)"
    },
    [theme.breakpoints.only("sm")]: {
      top: 200,
      width: "400px",
      transform: "translateY(2%)"
    },
    [theme.breakpoints.only("md")]: {
      top: "20vh",
      transform: "translateY(2%)"
    },
    [theme.breakpoints.only("lg")]: {
      width: "400px",
      top: "19vh"
    },

    [theme.breakpoints.only("xl")]: {
      top: "17vh"
    },
    margin: "auto",
    maxWidth: "398px",
    [theme.breakpoints.down("xs")]: {
      width: "308px",
      position: "relative",
      top: "auto",
      left: "auto",
      transform: "none",
      margin: "32px auto"
    }
  },

  paper: {
    paddingTop: "32px",
    paddingBottom: "34px",
    paddingLeft: "34px",
    paddingRight: "34px",
    borderRadius: "4px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "32px",
      paddingBottom: "34px",
      paddingLeft: "17px",
      paddingRight: "17px"
    }
  },

  titleWrapper: {
    height: "40px",
    display: "flex",
    paddingBottom: "17px"
  },

  divider: {
    margin: "33px 0 20px 0"
  },

  rowText: {
    ...theme.typography.primaryBody
  },

  questionsToggle: {
    ...theme.buttons.thirdTextLink,
    fontSize: "16px",
    "&:hover": {
      cursor: "pointer"
    }
  },

  buttonWrapper: {
    textAlign: "right",
    paddingTop: "19px"
  },

  buttonNext: {
    ...theme.buttons.action,
    "&:hover": {
      ...theme.buttons.actionHover
    },
    "&:active": {
      ...theme.buttons.actionPressed
    },
    "&:disabled": {
      ...theme.buttons.actionDisabled
    }
  },

  buttonNextDisabled: {
    ...theme.buttons.actionDisabled
  },

  buttons: {
    marginTop: 30,
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginLeft: "5%"
    }
  }
});
