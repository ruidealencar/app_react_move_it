import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {

  const { level } = useContext(ChallengesContext)


  return (
    <div className={styles.profileContainer}>
      <img src="https://img.icons8.com/plasticine/2x/bot.png" alt="Bot"/>
      <div>
        <input type="text" placeholder="Digite seu nome"/>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}