import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const types: string[] = ["Short Answer", "Multiple Choice"];
    const [text, setText] = useState<string>(types[0]);
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function flipType(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
            setText(types[1]);
        } else {
            setType("short_answer_question");
            setText(types[0]);
        }
    }
    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {text}
        </div>
    );
}
