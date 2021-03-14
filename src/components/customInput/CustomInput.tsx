import React, {FunctionComponent} from "react";
import {InputType, Props, ExtraProps , UserRole} from "./CustomInput.interfaces";


const CustomInput: FunctionComponent<Props & ExtraProps> = (props) => {
  const inputProps: Props = props;
  const inputExtraProps: ExtraProps = props;
  
  
  return (
    <>
    {/* if user is manager then component is visible  */}

    {/* { inputExtraProps.role===UserRole.MANAGER && <div style={{marginTop: "0.5rem"}}>
        <input {...inputProps} />
      </div>} */}

      {<div style={{marginTop: "0.5rem"}}>
        <input {...inputProps} />
      </div>}
      
    </>
  );

};


CustomInput.defaultProps = {
  type: InputType.TEXT
};

export default CustomInput;
