import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/demoum.png" alt="Matheus Moura" />
            <div>
                <strong>Matheus Moura</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"></img>
                    Level { level }
                </p>
            </div>
        </div>
    )
}