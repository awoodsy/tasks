import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
export function EditMode(): JSX.Element {
    const [inEdit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                label="Edit Mode?"
                checked={inEdit}
                onChange={updateEdit}
            />
            <div>
                {inEdit ? (
                    <>
                        <Form.Group>
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            aria-label="/student/i"
                            checked={student}
                            onChange={updateStudent}
                        />
                    </>
                ) : (
                    <span>
                        {name} {student ? "is a student" : "is not a student"}.
                    </span>
                )}
            </div>
        </div>
    );
}
