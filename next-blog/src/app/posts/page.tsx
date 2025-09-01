import Link from "next/link";
import { allPosts, type Post } from "@contentlayer/generated";
import dayjs from "dayjs";

/**
 * 文章卡片组件的属性类型
 */
interface PostCardProps {
  post: Post;
}

export const generateMetadata = ({ params }) => {
  return { 
    title: "博客列表",
    description: "这是博客列表页面",
    openGraph: {
      title: '博客列表',
      description: '这是博客列表页面'
    }
  }
}

/**
 * 单个文章卡片组件
 * @param props - 包含文章数据的属性
 * @returns JSX 元素
 */
const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {dayjs(post.date).format("DD/MM/YYYY")}
      </time>
    </div>
  );
};

/**
 * 文章列表页面
 * @returns JSX 元素
 */
export default function Home() {
  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">My Blog List</h1>
      {allPosts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  );
}
