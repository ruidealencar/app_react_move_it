import { createContext, ReactNode, useState } from "react";


interface ChallengesContextData {
  level: number;
  current: number;
  challengeCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProvidesProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProvidesProps) {
  const[level, setLevel] = useState(1);
  const[currentExperince, setCurrentExperience] = useState(0);
  const[challengesCompleted, setChallengesCompleted] = useState(0);


  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('New challenge')
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperince,
        challengesCompleted,
        levelUp,
        startNewChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
