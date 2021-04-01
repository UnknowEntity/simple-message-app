import React from "react";
import Button, { ButtonSize } from "../../atoms/buttons";
import LinkModified from "../../atoms/links";

const LoginButtonGroup = (props) => {
  return (
    <>
      <Button size={ButtonSize.LARGE}>Log In</Button>
      <div>Don't have an account? Then</div>
      <LinkModified url="/register" className="button border default large">
        Register
      </LinkModified>
    </>
  );
};

export default LoginButtonGroup;
