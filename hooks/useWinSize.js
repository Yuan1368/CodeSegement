import { useCallback, useEffect, useState } from "react";

export const useWinSize = (): {
	width: number,
	height: number
} => {
	const [size, setSize] = useState({
		width: document.body.clientWidth,
		height: document.body.clientHeight
	})

	const onResize = useCallback(() => {
		setSize({
			width: document.body.clientWidth,
			height: document.body.clientHeight
		})
	},[])

	useEffect(() => {
		window.addEventListener("resize", onResize)
		return () => {
			window.removeEventListener("resize", onResize)
		}
	},[onResize])
	return size;
}