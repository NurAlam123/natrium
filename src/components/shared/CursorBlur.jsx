import useMouseHoverEffect from '../../hooks/useMouseHoverEffect'

const CursorBlur = () => {
    useMouseHoverEffect()
    return (
        <div>
            <div className="cursor"></div>
        </div>
    )
}

export default CursorBlur