import Note from "@/components/note";
import { getNoteById } from "@/lib/redis";
import { sleep } from "@/utils";
export default async function NotePage({ params }) {
  // 在next15中，获取params是一个异步行为，需要使用await
    const { id } = await params;
    const note = await getNoteById(id);
    
    if (note === null) {
        return (
            <div className="note--empty-state">
                <span className="note-text--empty-state">
                    Click a note on the left to view something! 🥺
                </span>
            </div>
        );
    } 
    
    return <Note noteId={id} note={JSON.parse(note)} />;
  }