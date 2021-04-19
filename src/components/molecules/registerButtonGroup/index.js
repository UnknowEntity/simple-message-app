import React from "react";
import PropTypes from "prop-types";
import Button, { ButtonSize } from "../../atoms/buttons";
import LinkModified from "../../atoms/links";

/**
 *
 * @param {{onRegister:Function, isClicked: boolean}} props
 * @returns
 */
const RegisterButtonGroup = (props) => {
  const { onRegister, isClicked } = props;
  return (
    <>
      <Button size={ButtonSize.LARGE} onClick={onRegister} disabled={isClicked}>
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
  isClicked: PropTypes.bool,
};

export default RegisterButtonGroup;
