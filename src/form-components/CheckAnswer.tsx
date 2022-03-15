import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //state
    const [answer, setAnswer] = useState<string>("");
    //control
    function updateVal(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <>
            <div>
                <h3>Check Answer</h3>
                <Form.Group>
                    <Form.Control
                        placeholder="Enter an answer"
                        value={answer}
                        onChange={updateVal}
                    />
                    {answer === expectedAnswer && <span>✔️</span>}
                    {answer !== expectedAnswer && <span>❌</span>}
                </Form.Group>
            </div>
        </>
    );
}
