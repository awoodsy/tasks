import React, { useState } from "react";
//import { Form } from "react-bootstrap";
import data from "./DefaultData.json";
import { Quiz } from "./Interfaces";
import { QuizList } from "./QuizList";
import { AddQuizModal } from "./AddQuizModal";
import { Button } from "react-bootstrap";
import sketch from "./sketch.png";
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
            <p>-Users can add or delete a quiz</p>
            <p>
                -Multiple choice questions are available but could not figure
                out selcting the choice in time
            </p>
            <p>-Can see a check or x mark depending on the answer</p>
            <p>-Added sketch</p>
            <img
                src={sketch}
                alt="Sketch is supposed to be here"
                width={500}
                height={500}
            />
            <span>
                My left hand is broken right now and I am a lefty so apologies
                if it looks like barely english
            </span>
        </div>
    );
}
