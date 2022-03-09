import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dice1, setLeft] = useState<number>(1);
    const [dice2, setRight] = useState<number>(2);
    return (
        <div>
            <div>
                <span data-testid="left-die">
                    left-die <span>{dice1}</span>
                    <Button onClick={() => setLeft(d6())}>Roll Left</Button>
                </span>
            </div>
            <div>
                <span data-testid="right-die">
                    right-die <span>{dice2}</span>
                    <Button onClick={() => setRight(d6())}>Roll Right</Button>
                </span>
            </div>
            <div>
                {dice1 === 1 && dice2 === 1 ? <span>Lose</span> : <span></span>}
            </div>
            <div>
                {dice1 === dice2 && dice2 !== 1 ? (
                    <span>Win</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
