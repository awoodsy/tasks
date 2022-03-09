import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday =
    | "Christmas"
    | "Easter"
    | "Halloween"
    | "New Years Eve"
    | "St. Patricks Day";
export function CycleHoliday(): JSX.Element {
    const emojis: string[] = ["🎄", "☘️", "🐇", "🎆", "🎃"];
    const [type, setType] = useState<Holiday>("Christmas");
    const [emoji, setEmoji] = useState<string>("🎄");
    function changeAlphabetically(): void {
        if (type === "Christmas") {
            //easter
            setType("Easter");
            setEmoji(emojis[2]);
        } else if (type === "Easter") {
            //halloween
            setType("Halloween");
            setEmoji(emojis[4]);
        } else if (type === "Halloween") {
            //NYE
            setType("New Years Eve");
            setEmoji(emojis[3]);
        } else if (type === "New Years Eve") {
            //St pattys
            setType("St. Patricks Day");
            setEmoji(emojis[1]);
        } else if (type === "St. Patricks Day") {
            //christmas
            setType("Christmas");
            setEmoji(emojis[0]);
        }
    }
    function changeChronologically(): void {
        if (type === "New Years Eve") {
            //st pattys
            setType("St. Patricks Day");
            setEmoji(emojis[1]);
        } else if (type === "St. Patricks Day") {
            //easter
            setType("Easter");
            setEmoji(emojis[2]);
        } else if (type === "Easter") {
            //halloween
            setType("Halloween");
            setEmoji(emojis[4]);
        } else if (type === "Halloween") {
            //christmas
            setType("Christmas");
            setEmoji(emojis[0]);
        } else if (type === "Christmas") {
            //nye
            setType("New Years Eve");
            setEmoji(emojis[3]);
        }
    }
    return (
        <div>
            <div>
                Holiday: {emoji}
                <Button onClick={changeAlphabetically}>
                    Advance by Alphabet
                </Button>
            </div>
            <div>
                <Button onClick={changeChronologically}>Advance by Year</Button>
            </div>
        </div>
    );
}
