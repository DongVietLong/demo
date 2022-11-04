import { useState } from "react";
export function useHover() {
    const [isHover, setIsHover] = useState(false);
    const onMouseEnter = () =>{
        setIsHover(true);
    };
    const onMouseLeave = () =>{
        setIsHover(false);
    };
    const hoverConfig = {
        onMouseEnter,
        onMouseLeave,
    }
    return [isHover, hoverConfig];
}