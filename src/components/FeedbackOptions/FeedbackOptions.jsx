import { Component } from 'react';
import styles from './FeedbackOptions.module.css'

class FeedbackOptions extends Component {

    render() {
        const { options, onLeaveFeedback } = this.props;

        return (
            <div className={styles.FeedbackOptions}>
                {options.map(option => (<button key={option} className={styles.button} onClick={() => onLeaveFeedback(option)}>{option}</button>))}
            </div>
        );
    }
}

export default FeedbackOptions