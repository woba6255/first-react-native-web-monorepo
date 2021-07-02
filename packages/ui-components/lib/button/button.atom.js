import React from "react"

export function ButtonAtom({onClick, children}) {
	return <button onClick={onClick}>{children}</button>
}
