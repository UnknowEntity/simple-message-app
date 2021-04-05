import React from "react";
import PropTypes from "prop-types";
import Button, { ButtonSize } from "../../atoms/buttons";
import LinkModified from "../../atoms/links";

/**
 *
 * @param {{onLogin:Function}} props
 * @returns
 */
const LoginButtonGroup = (props) => {
  const { onLogin } = props;
  return (
    <>
      <Button size={ButtonSize.LARGE} onClick={() => onLogin()}>
        Log In
      </Button>
      <div>Don't have an account? Then</div>
      <LinkModified url="/register" className="button border default large">
        Register
      </LinkModified>
    </>
  );
};

LoginButtonGroup.propTypes = {
  onRegister: PropTypes.func,
};

export default LoginButtonGroup;
