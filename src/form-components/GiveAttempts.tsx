import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttempsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formRequestAttempts">
                <Form.Label>Request More Attemps</Form.Label>
                <Form.Control
                    style={{ width: "200px", margin: "auto" }}
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(event.target.value)
                    }
                />
            </Form.Group>
            <p>Attempts left: {attemptsLeft}</p>
            <Button
                onClick={() =>
                    setAttempsLeft(attemptsLeft + +attemptsRequested)
                }
            >
                Gain
            </Button>

            <Button
                disabled={attemptsLeft <= 0}
                onClick={() => setAttempsLeft(attemptsLeft - 1)}
            >
                Use
            </Button>
        </div>
    );
}
