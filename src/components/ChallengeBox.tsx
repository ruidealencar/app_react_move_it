import { useContext } from "react";
import styles from "../styles/components/ChallengeBox.module.css";
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ChallengeBox() {

  const contextData = useContext(ChallengesContext)

  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
            <header>Ganhe 400 xp</header>

            <main>
              <img src="icons/body.svg" />
              <strong>Novo desafio</strong>
              <p>Levante e faça um alongamento</p>
            </main>

            <footer>
              <button
                type="button"
                className={styles.challengeFailedButton}
              >
                Falhei
              </button>
              <button
                type="button"
                className={styles.challengeSucceededButton}
              >
                Completei
              </button>
            </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios.
          </p>
        </div>
      ) }
    </div>
  );
}