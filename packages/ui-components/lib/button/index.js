import React from "react";
import { ButtonAtom } from "./button.atom"



export function Button({ onClick, children = 'ОМЕГА БАТОН' }) {
    return <ButtonAtom onClick={onClick} style>{children}</ButtonAtom>
}

