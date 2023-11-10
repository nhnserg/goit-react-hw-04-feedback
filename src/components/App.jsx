import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import styles from "./App.module.css";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, value) => total + value, 0)
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((this.state.good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={styles.container}>
        <Section title="Leave Feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedback} />
        </Section>

        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

