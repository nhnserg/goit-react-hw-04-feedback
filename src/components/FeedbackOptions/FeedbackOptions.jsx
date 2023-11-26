import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={styles.FeedbackOptions}>
            {options.map((option) => (
                <button key={option} className={styles.button} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default FeedbackOptions;