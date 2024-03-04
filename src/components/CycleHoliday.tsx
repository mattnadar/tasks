import React, { useState } from "react";
import { Button } from "react-bootstrap";

const alphabetically = ["🎄", "🐰", "🎃", "🎉", "🦃"]; // Christmas, easter, halloween, new years, thanksgiving

const yearly = ["🎉", "🐰", "🎃", "🦃", "🎄"]; // new year (JAN FIRST), easter, halloween, thanksgiving, christmas
export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setHoliday] = useState<string>("🎄");
    const getNextHolidayAlphabetically = () => {
        setHoliday(
            alphabetically[
                (alphabetically.indexOf(currentHoliday) + 1) %
                    alphabetically.length
            ]
        );
    };

    const getNextHolidayByYear = () => {
        setHoliday(
            yearly[(yearly.indexOf(currentHoliday) + 1) % yearly.length]
        );
    };
    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <Button onClick={getNextHolidayAlphabetically}>
                Cycle by Alphabet
            </Button>
            <Button onClick={getNextHolidayByYear}>Cycle by Year</Button>
        </div>
    );
}
