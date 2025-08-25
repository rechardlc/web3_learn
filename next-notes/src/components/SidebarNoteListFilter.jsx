'use client'
import { useSearchParams } from "next/navigation";
import SidebarNoteItem from "@/components/sidebarNoteItem";

export default function SidebarNoteListFilter({ notes }) {
    const searchParams = useSearchParams()
    const q = searchParams.get('q')
    const notesList = Object.entries(notes || {}).map(([uuid, note]) => {
        const [_noteId, _note] = note
        return {
            uuid: _noteId,
            note: JSON.parse(_note)
        }
    })
    const filteredNotes = q ? notesList.filter(({ note }) => note.title.toLowerCase().includes(q.toLowerCase())) : notesList    
    return (
        <div>
            <h1>SidebarNoteListFilter</h1>
            <ul className="notes-list">
                {filteredNotes.map(({ uuid, note }) => (
                    <li key={uuid}>
                        <SidebarNoteItem nodeId={uuid} note={note} />
                    </li>
                ))}
            </ul>
        </div>
    )
}