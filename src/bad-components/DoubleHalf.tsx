import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*function Doubler(): JSX.Element {
    return <Button onClick={() => setValue(2 * value)}>Double</Button>;
}

function Halver(): JSX.Element {
    return <Button onClick={() => setValue(0.5 * value)}>Halve</Button>;
}*/

export function DoubleHalf(): JSX.Element {
    const [value, setValue] = useState<number>(10);
    return (
        <div>
            <Button onClick={() => setValue(2 * value)}>Double</Button>
            <Button onClick={() => setValue((1 / 2) * value)}>Halve</Button>
            <div>
                <p>
                    The current value is: <span>{value}</span>
                </p>
            </div>
        </div>
    );
}
