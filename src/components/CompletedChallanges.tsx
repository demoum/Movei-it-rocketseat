import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/CompletedChallanges.module.css'

export function CompletedChallanges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completedChallangesContainer}>
            <span>Desafios completos</span>
        <span>{challengesCompleted}</span>
        </div>
    )
}