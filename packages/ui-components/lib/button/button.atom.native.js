import React from "react"
import { Button } from "react-native"


export function ButtonAtom({onClick, children}) {
	return <Button onClick={onClick} title={children} />
}
