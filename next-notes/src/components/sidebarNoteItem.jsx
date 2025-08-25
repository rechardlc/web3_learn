import dayjs from "dayjs";
import SidebarNoteItemContent from "@/components/sidebarNoteItemContent";
import Link from "next/link";
export default function SidebarNoteItem({nodeId, note}) {
    const { title, updateTime, content } = note
    return (
        <Link href={`/note/${nodeId}`} className="link--unstyled">
            <SidebarNoteItemContent
                id={nodeId}
                title={title}
                expandedChildren={
                    <p className="sidebar-note-excerpt">
                        { content.substring(0, 20) || <i>(no content)</i> }
                    </p>
                }
            >
                <header className="sidebar-note-header">
                    <h5>{title}</h5>
                    <time>{dayjs(updateTime).format("YYYY-MM-DD HH:mm:ss")}</time>
                </header>
            </SidebarNoteItemContent>
        </Link>
    )
}