import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [currentColor, setCurrentColor] = useState<string>("");
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "grey",
        "pink"
    ];
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color, index) => (
                    <Form.Check
                        key={index}
                        type="radio"
                        label={color}
                        value={color}
                        inline
                        checked={currentColor === color}
                        onChange={updateColor}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: currentColor,
                    display: "inline",
                    marginTop: "10px"
                }}
            >
                <div>
                    {currentColor && (
                        <p>
                            You have chosen{" "}
                            <span
                                style={{
                                    backgroundColor: currentColor
                                }}
                            >
                                {currentColor}
                            </span>
                            .
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
