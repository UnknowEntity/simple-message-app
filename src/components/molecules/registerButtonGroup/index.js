import React from "react";
import PropTypes from "prop-types";
import Button, { ButtonSize } from "../../atoms/buttons";
import LinkModified from "../../atoms/links";

/**
 *
 * @param {{onRegister:Function}} props
 * @returns
 */
const RegisterButtonGroup = (props) => {
  const { onRegister } = props;
  return (
    <>
      <Button size={ButtonSize.LARGE} onClick={onRegister}>
        Register
      </Button>
      <div>Already have an account? Then</div>
      <LinkModified url="/" className="button border default large">
        Login
      </LinkModified>
    </>
  );
};

RegisterButtonGroup.propTypes = {
  onRegister: PropTypes.func,
};

export default RegisterButtonGroup;
