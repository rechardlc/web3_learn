"use client"
import style from "./index.module.scss"
import { useState } from "react"
export default function SidebarNoteItemContent({
    id,
    title,
    expandedChildren,
    children
}) {
    const [expanded, setExpanded] = useState(false)
    const handleExpand = (e) => {
        e.stopPropagation();
        e.preventDefault();
        // 阻止冒泡
        e.nativeEvent.stopImmediatePropagation();
        setExpanded(!expanded)
    }
    return (
        <div className={style.wrapper} id={id}>
            <button className={`${style.expand} ${expanded ? style.active : ""}`} onClick={handleExpand}><span>》</span></button>
            {children}
            {expanded && expandedChildren}
        </div>
    )
}