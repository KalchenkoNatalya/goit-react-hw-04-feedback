import { useState } from 'react';
import css from '../components/App.module.css';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification.jsx/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    option === 'good' && setGood(prevGood => prevGood + 1);
    option === 'neutral' && setNeutral(prevNeutral => prevNeutral + 1);
    option === 'bad' && setBad(prevBad => prevBad + 1);
  };
  // const onLeaveFeedback = option => {
  //   switch (option) {
  //     case 'good':
  //       setGood(prevGood => prevGood + 1);
  //       break;
  //     case 'neutral':
  //       setNeutral(prevNeutral => prevNeutral + 1);
  //       break;
  //     case 'bad':
  //       setBad(prevBad => prevBad + 1);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (good / (good + neutral + bad)) * 100 || 0
    );
    return positivePercentage + '%';
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
