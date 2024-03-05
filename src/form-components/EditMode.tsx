import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="modeSwitch"
                    label="Mode"
                    checked={mode}
                    onChange={updateMode}
                />
            </div>
            <div>
                {mode && (
                    <Form.Check
                        type="checkbox"
                        id="is-student Check"
                        label="Student Checkbox"
                        checked={student}
                        onChange={updateStudentStatus}
                    />
                )}
            </div>
            <div>
                {mode && (
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                )}
            </div>
            <div>
                <p>
                    {name} is {student ? "a student" : "not a student"}.
                </p>
            </div>
            <h3>Edit Mode</h3>
        </div>
    );
}
