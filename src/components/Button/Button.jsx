import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({ type = "button", children, leaveFeedback }) => {
  return (
    <StyledButton type={type} onClick={leaveFeedback}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  leaveFeedback: PropTypes.func,
};
