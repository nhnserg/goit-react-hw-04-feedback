import { Component } from 'react';
import styles from './Statistics.module.css'

class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <div className={styles.Statistics}>
                <p>Good:{good}</p>
                <p>Neutral:{neutral}</p>
                <p>Bad:{bad}</p>
                <p>Total:{total}</p>
                <p>Positive Feedback:{positivePercentage}%</p>
            </div>
        );
    }
}

export default Statistics