import PropTypes from "prop-types";
import { Box } from "components/Box";

export const Notification = ({ message }) => {
  return <Box>{message}</Box>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
