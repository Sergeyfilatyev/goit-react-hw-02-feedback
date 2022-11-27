import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return this.countTotalFeedback()
      ? Math.round((good / this.countTotalFeedback()) * 100)
      : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section
          title={'Please leave feedback'}
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              clickHandler={this.addFeedback}
            />
          }
        />
        <Section
          title={'Statistics'}
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        />
      </>
    );
  }
}
export default App;
