import React from "react";
import Button, { ButtonSize } from "../../atoms/buttons";
import LinkModified from "../../atoms/links";

const RegisterButtonGroup = (props) => {
  return (
    <>
      <Button size={ButtonSize.LARGE}>Register</Button>
      <div>Already have an account? Then</div>
      <LinkModified url="/" className="button border default large">
        Login
      </LinkModified>
    </>
  );
};

export default RegisterButtonGroup;
