import Link from "next/link";
import { allPosts } from "@contentlayer/generated";
import dayjs from "dayjs";

export default function Home() {
  const recentPosts = allPosts.slice(0, 5); // 只显示最近5篇文章

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          最新文章
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          个人技术博客，分享技术、个人成长等内容
        </p>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {recentPosts.map((post) => (
          <li key={post._id} className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">发布时间</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={post.date}>
                      {dayjs(post.date).format("YYYY年MM月DD日")}
                    </time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={post.url}
                          className="text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {post.title}
                        </Link>
                      </h2>
                    </div>
                  </div>
                  <div className="text-base font-medium leading-6">
                    <Link
                      href={post.url}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`阅读 "${post.title}"`}
                    >
                      阅读更多 &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="flex justify-end text-base font-medium leading-6">
        <Link
          href="/posts"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="查看所有文章"
        >
          查看所有文章 &rarr;
        </Link>
      </div>
    </div>
  );
}
