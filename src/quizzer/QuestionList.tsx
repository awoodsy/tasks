import React, { useState } from "react";
import { Question } from "./Interfaces";
import { ListGroup, Form } from "react-bootstrap";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLInputElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                {options.map((opt: string) => (
                    <Form.Check
                        type="radio"
                        value={choice}
                        key={opt}
                        onChange={updateChoice}
                        label={
                            <span
                                style={{
                                    display: "inline-list-item"
                                }}
                            >
                                {opt}
                            </span>
                        }
                        checked={false}
                    ></Form.Check>
                ))}
                {choice === expectedAnswer && <span>✔️</span>}
                {choice !== expectedAnswer && <span>❌</span>}
            </Form.Group>
        </div>
    );
}
export function QuestionList({
    questions
}: {
    questions: Question[];
}): JSX.Element {
    return (
        <ListGroup as="ol" numbered>
            {questions.map((question: Question) => (
                <ListGroup.Item
                    key={question.name}
                    className="d-flex align-items-start"
                >
                    {question.name}:
                    <MultipleChoiceQuestion
                        options={question.options}
                        expectedAnswer="This is not the right answer"
                    ></MultipleChoiceQuestion>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
