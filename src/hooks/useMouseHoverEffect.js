import { useEffect } from "react";

const useMouseHoverEffect = () => {
    useEffect(() => {
        // For computer
        document.addEventListener('mousemove', (event) => {
            let x = event.pageX;
            let y = event.pageY;
            changeCursorOnMove(x, y);
        })
        document.addEventListener('mouseleave', () => {
            resetCursorOnEnd();
        })

        // For phones
        document.addEventListener('touchmove', (event) => {
            let touch = event.touches[0]
            let x = touch.pageX;
            let y = touch.pageY;

            changeCursorOnMove(x, y);
        })
        document.addEventListener('touchend', () => {
            resetCursorOnEnd();
        })

    }, [])
}

const changeCursorOnMove = (x, y) => {
    const cursorDiv = document.querySelector(".cursor");

    cursorDiv.style.setProperty('--x', `${x}px`);
    cursorDiv.style.setProperty('--y', `${y}px`);
    cursorDiv.style.opacity = 1;
    cursorDiv.style.setProperty('--visible', 'inherit');
    cursorDiv.style.setProperty('--visibility-delay', '0s');
    cursorDiv.style.setProperty('--visibility-timing', 'ease-in');
}

const resetCursorOnEnd = () => {
    const cursorDiv = document.querySelector(".cursor");

    cursorDiv.style.setProperty('--visible', 'hidden');
    cursorDiv.style.opacity = 0;
    cursorDiv.style.setProperty('--visibility-delay', '0.4s');
    cursorDiv.style.setProperty('--visibility-timing', 'ease-out');
}

export default useMouseHoverEffect;