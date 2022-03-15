import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");
    const requested = parseInt(request) || 0;
    function addAttempt(): void {
        setAttempts(attempts + requested);
    }
    function loseAttempt(): void {
        setAttempts(attempts - 1);
    }
    return (
        <>
            <div>
                <h3>Give Attempts</h3>
                <div>
                    Attempts: <span>{attempts}</span>
                    <Button onClick={addAttempt}>Gain</Button>
                    <Button onClick={loseAttempt} disabled={attempts === 0}>
                        Use
                    </Button>
                </div>
                <Form.Group>
                    <Form.Control
                        type="number"
                        value={request}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setRequest(event.target.value)}
                    />
                </Form.Group>
            </div>
        </>
    );
}
