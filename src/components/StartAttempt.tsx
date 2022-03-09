import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function stopProgress(): void {
        // Set visible to be the logical opposite of its previous value
        setProgress(false);
    }
    function startProgress(): void {
        // Set visible to be the logical opposite of its previous value
        setProgress(true);
        setAttempts(attempts - 1);
    }
    function Mulligan(): void {
        // Set visible to be the logical opposite of its previous value
        //setProgress(true);
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <div>
                Attempts: <span>{attempts}</span>
                <Button
                    onClick={startProgress}
                    disabled={progress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopProgress} disabled={!progress}>
                    Stop Quiz
                </Button>
                <Button onClick={Mulligan} disabled={progress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
