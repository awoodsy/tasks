import React, { useState } from "react";
//import { Form } from "react-bootstrap";
import data from "./DefaultData.json";
import { Quiz } from "./Interfaces";
import { QuizList } from "./QuizList";
import { AddQuizModal } from "./AddQuizModal";
import { Button } from "react-bootstrap";
const QUIZZES = data.map((quiz): Quiz => ({ ...quiz }));
//changing published status of question
// function switchPublished(question: Question, published: boolean): Question {
//     return {
//         ...question,
//         published: !published
//     };
// }
export function Quizzer(): JSX.Element {
    const [quizzes, setQuiz] = useState<Quiz[]>(QUIZZES);
    const [showAddModal, setShowAddModal] = useState(false);
    function deleteQuiz(title: string) {
        setQuiz(quizzes.filter((quiz: Quiz): boolean => quiz.title !== title));
    }
    function editQuiz(title: string, newQuiz: Quiz) {
        setQuiz(
            quizzes.map(
                (quiz: Quiz): Quiz => (quiz.title === title ? newQuiz : quiz)
            )
        );
    }
    // function setQuestionPublished(name: string, published: boolean){
    //     setQuiz(
    //         quizzes.map(
    //             (question: Question): Question =>
    //                 name === question.name
    //                     ? switchPublished(question, published)
    //                     : question
    //         )
    //     );
    // }
    function addQuiz(newQuiz: Quiz) {
        const existing = quizzes.find(
            (quiz: Quiz): boolean => quiz.title === newQuiz.title
        );
        if (existing === undefined) {
            setQuiz([...quizzes, newQuiz]);
        }
    }
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);
    return (
        <div>
            <h3>Quizzer</h3>
            <div>
                <QuizList
                    quizzes={quizzes}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                ></QuizList>
            </div>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    Add New Quiz
                </Button>
                <AddQuizModal
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addQuiz={addQuiz}
                ></AddQuizModal>
            </div>
            <h4>Completed Features:</h4>
            <p>
                -Users can see a list of quizzes, including the quizzes title,
                description, and how many questions it has
            </p>
            <p>
                -Users can edit quiz name, description and number of questions
            </p>
            <p>-Users can add a quiz</p>
            <img src="sketch.png" alt="Sketch is supposed to be here" />
        </div>
    );
}
