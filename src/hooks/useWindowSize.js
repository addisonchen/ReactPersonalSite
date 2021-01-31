import { useEffect, useState } from "react";

function getWindowWidth() {
    const { innerWidth: width } = window;
    return { width };
}

function getWindowHeight() {
    const { innerHeight: height } = window;
    return { height };
}

export default function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState(
        getWindowWidth()
    )

    const [windowHeight, setWindowHeight] = useState(
        getWindowHeight()
    )

    useEffect(() => {
        function handleResize() {
            setWindowWidth(getWindowWidth());
            setWindowHeight(getWindowHeight());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {width: windowWidth, height: windowHeight}
}