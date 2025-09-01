import { allPosts } from "@contentlayer/generated";
import { MDXContent } from "@/components/MDXContent";
import { notFound } from "next/navigation";
import dayjs from "dayjs";
import Waline from '@/components/Waline';

// 异步函数
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    id: post._raw.flattenedPath,
  }));
}
/**
 * 生成静态参数，metadata
 * @param params 参数
 * @returns 
 */
export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === id);
  if (!post) throw new Error(`Post not found for id: ${id}`);
  return { title: post.title };
};
// hooks 无法在异步async/await中使用
const Page = async ({ params }) => {
  const { id } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === id);
  if (!post) notFound();
  return <>
     <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {dayjs(post.date).format("DD/MM/YYYY")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <MDXContent code={post.body.code} />
    </article>
    <Waline el="#waline" serverURL="https://waline.yayujs.com/"></Waline>
  </>
};

export default Page;
