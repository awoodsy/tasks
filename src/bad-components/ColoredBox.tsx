import React, { useState } from "react";
import { Button } from "react-bootstrap";
const DEFAULT_COLOR_INDEX = 0;
export const COLORS = ["red", "blue", "green"];
interface previewProps {
    colorIndex: number;
}
interface changeProps {
    colorIndex: number;
    changeColor: (x: number) => void;
}
function ChangeColor({ colorIndex, changeColor }: changeProps): JSX.Element {
    return (
        <Button
            onClick={() => {
                changeColor((1 + colorIndex) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}
function ColorPreview({ colorIndex }: previewProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                //changed DEFAULT to color
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}
export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    //added parameter
    //trying to pass parameter line 42
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    changeColor={setColorIndex}
                ></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
