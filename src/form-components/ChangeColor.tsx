import React, { useState } from "react";
import { Form } from "react-bootstrap";
const colors: string[] = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "pink",
    "brown",
    "magenta"
];
const DEFAULT_COLOR = colors[0];
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    console.log(updateColor);
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                <Form.Label></Form.Label>
                {colors.map((color: string) => (
                    <>
                        <Form.Check
                            inline
                            type="radio"
                            key={color}
                            value={color}
                            onChange={updateColor}
                            label={
                                <span
                                    style={{
                                        backgroundColor: color,
                                        display: "inline-list-item"
                                    }}
                                >
                                    {"\t" +
                                        color.charAt(0).toUpperCase() +
                                        color.slice(1)}
                                </span>
                            }
                            checked={false}
                        ></Form.Check>
                    </>
                ))}
            </Form.Group>
            {console.log(color)}
            <span>You have chosen </span>
            <span data-testid="colored-box" style={{ background: color }}>
                {color}
            </span>
        </div>
    );
}
