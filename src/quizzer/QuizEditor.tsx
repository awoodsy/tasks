import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Quiz, Question } from "./Interfaces";

export function QuizEditor({
    changeEditing,
    quiz,
    editQuiz,
    deleteQuiz
}: {
    changeEditing: () => void;
    quiz: Quiz;
    editQuiz: (title: string, newQuiz: Quiz) => void;
    deleteQuiz: (title: string) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>(quiz.title);
    const [numQuestions, setNum] = useState<string>(quiz.numQuestions);
    const [points, setPoints] = useState<string>(quiz.totalPoints);
    const [description, setDescription] = useState<string>(quiz.description);
    const [questions, setQuestions] = useState<Question[]>(quiz.questions);

    function save() {
        editQuiz(quiz.title, {
            ...quiz,
            title: title,
            totalPoints: points || "",
            questions: questions || [],
            description: description || "",
            numQuestions: numQuestions || ""
        });
        changeEditing();
    }
    return (
        <Container>
            <Row>
                {/* Title */}
                <Form.Group controlId="formQuizTitle" as={Row}>
                    <Form.Label column sm={2}>
                        Title:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Row>
            <Row>
                {/* Description */}
                <Form.Group controlId="formQuizDescription" as={Row}>
                    <Form.Label column sm={2}>
                        Description:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={description}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setDescription(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Row>
            <Row>
                {/* Number Points */}
                <Form.Group controlId="formQuizPoints" as={Row}>
                    <Form.Label column sm={2}>
                        Total Points:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="string"
                            value={points}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setPoints(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Row>
            {/* Save/Cancel */}
            <Button onClick={save} variant="success" className="me-4">
                Save
            </Button>
            <Button
                onClick={() => deleteQuiz(quiz.title)}
                variant="danger"
                className="me-8"
            >
                Delete
            </Button>
        </Container>
    );
}
