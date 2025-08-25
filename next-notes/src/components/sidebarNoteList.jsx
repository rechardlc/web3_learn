// 'use client'
import SidebarNoteItem from "@/components/sidebarNoteItem";
import { getAllNotes } from "@/lib/redis";
import { sleep } from "@/utils";
import SidebarNoteListFilter from "@/components/SidebarNoteListFilter";
/*
外部使用suspense包裹，内部使用一个异步函数，外部会自动捕获异步，实现等待效果
Suspense 的效果就是允许你推迟渲染某些内容，直到满足某些条件（例如数据加载完毕）。在
开发 Next.js 项目的时候，有数据加载的地方多考虑是否可以使用 
Suspense 或者 loading.js带来更好的体验。



客户端组件下移，只做UI渲染，不做数据请求
*/
export default async function SidebarNoteList() {
    // 模拟延迟加载
    await sleep(5000);
    
    const notes = await getAllNotes();
    const notesList = Object.entries(notes || {});
    
    if (notesList.length === 0) {
        return (
            <div className="notes-empty">
                <p>No notes created yet!</p>
            </div>
        );
    }
    
    return <SidebarNoteListFilter notes={notesList} />
}