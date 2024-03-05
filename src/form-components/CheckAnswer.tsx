import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>

            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    style={{ width: "200px", margin: "auto" }}
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            {expectedAnswer === answer && <p>✔️</p>}
            {expectedAnswer !== answer && <p>❌</p>}
        </div>
    );
}
