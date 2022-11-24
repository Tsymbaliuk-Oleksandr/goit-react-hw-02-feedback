import React from "react";
import { Component } from "react";
import { Box } from "./Box";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChosenFeedback = ({ option }) => {
    this.setState((state) => ({
      [option]: state[option] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, item) => acc + item, 0);

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return;
    } else {
      return (
        Math.round((this.state.good / this.countTotalFeedback()) * 1000) / 10
      );
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const stateKeys = Object.keys(this.state);
    return (
      <Box display="flex" flexDirection="column" alignItems="center" p={5}>
        <Box
          textAlign="center"
          border="normal"
          borderColor="accent"
          borderRadius="normal"
          p={4}
        >
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={stateKeys}
              onLeaveFeedback={this.handleChosenFeedback}
            ></FeedbackOptions>
          </Section>
        </Box>
        <Box textAlign="left">
          <Section title="Statistics">
            {totalFeedbacks === 0 ? (
              <Notification message="There is no feedback"></Notification>
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedbacks}
                positivePercentage={positivePercentage}
              />
            )}
          </Section>
        </Box>
      </Box>
    );
  }
}
