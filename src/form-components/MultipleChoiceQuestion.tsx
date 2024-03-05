import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="userOptions">
                    <Form.Label>Answer the Question :3</Form.Label>
                    <Form.Select
                        style={{ width: "200px", margin: "auto" }}
                        value={selectedChoice}
                        onChange={updateChoice}
                    >
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            {selectedChoice === expectedAnswer ? <p>✔️</p> : <p>❌</p>}
        </div>
    );
}
