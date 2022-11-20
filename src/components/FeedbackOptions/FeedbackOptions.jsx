import PropTypes from "prop-types";
import { Box } from "components/Box";
import { Button } from "components/Button/Button";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box>
      {options.map((option) => (
        <Button key={option} leaveFeedback={() => onLeaveFeedback({ option })}>
          {option}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
