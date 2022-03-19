import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Quiz } from "./Interfaces";
import { RecordControls } from "./RecordControls";
import { QuestionList } from "./QuestionList";
import { QuizEditor } from "./QuizEditor";
export function QuizView({
    quiz,
    deleteQuiz,
    editQuiz
}: {
    quiz: Quiz;
    deleteQuiz: (title: string) => void;
    editQuiz: (title: string, newQuiz: Quiz) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    function changeEditing() {
        setEditing(!editing);
    }
    return editing ? (
        <QuizEditor
            changeEditing={changeEditing}
            quiz={quiz}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
        ></QuizEditor>
    ) : (
        <Container>
            <Row>
                <RecordControls changeEditing={changeEditing}></RecordControls>
                <span>
                    <Row>
                        <h3>{quiz.title}</h3>
                        <p>Total Questions: {quiz.numQuestions}</p>
                        <p> Description: {quiz.description}</p>
                        <p> Total Points: {quiz.totalPoints}</p>
                    </Row>
                    <QuestionList questions={quiz.questions}></QuestionList>
                </span>
            </Row>
        </Container>
    );
}
