import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

export default props => (
  <SvgIcon className={props.className} width="24" height="24" viewBox="0 0 24 24" {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
  </SvgIcon>
);
