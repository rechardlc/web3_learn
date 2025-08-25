import NoteEditor from '@/components/noteEditor'
import {getNoteById} from '@/lib/redis';

export default async function EditPage({ params }) {
  const { id } = await params;
  let note = await getNoteById(id)
  note = JSON.parse(note)
  // 让效果更明显
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  if (note === null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Click a note on the left to view something! 🥺
        </span>
      </div>
    )
  }

  return <NoteEditor noteId={id} initialTitle={note.title} initialBody={note.content} />
}
