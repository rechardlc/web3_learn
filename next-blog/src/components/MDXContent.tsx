"use client";

import { useMDXComponent } from "next-contentlayer/hooks";

/**
 * MDX 内容组件的属性类型
 */
interface MDXContentProps {
  /** MDX 编译后的代码 */
  code: string;
}

/**
 * MDX 内容渲染组件
 * @param props - 组件属性
 * @returns JSX 元素
 */
export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return <Component />;
}
