import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numberOfAttempts, setNumberOfAttempts] = useState<number>(4);
    const [inProgress, quizState] = useState<boolean>(false);

    const startQuiz = () => {
        if (numberOfAttempts > 0) {
            quizState(true);
            setNumberOfAttempts((attempts) => attempts - 1);
        }
    };

    const endQuiz = () => {
        quizState(false);
    };

    const mulliganAdder = () => {
        setNumberOfAttempts((attempts) => attempts + 1);
    };

    return (
        <div>
            <p>Number of attempts: {numberOfAttempts}</p>
            <Button
                onClick={startQuiz}
                disabled={inProgress || numberOfAttempts <= 0}
            >
                Start Quiz
            </Button>
            <Button onClick={endQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulliganAdder} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
