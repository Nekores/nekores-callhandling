import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

export default props => (
  <SvgIcon className={props.className} width="24" height="24" viewBox="0 0 24 24" {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z"/>
        <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"/>
        <circle fill='#d32f2f' cx='12' cy='12' r='4'/>
    </svg>
  </SvgIcon>
);
