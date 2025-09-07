"use server";
import {
  type CreateListZodSchemaType,
  createListZodSchema,
} from "@/schema/createList";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
export async function createList(data: CreateListZodSchemaType) {
  const user = await currentUser();
  if (!user) {
    throw new Error("用户未登录，请先登录！");
  }
  const result = createListZodSchema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      message: result.error.issues.map((issue) => issue.message),
    };
  }

  await prisma.list.create({
    data: {
      name: data.name,
      color: data.color,
      userId: user.id,
    },
  });
  revalidatePath("/");
  return {
    success: true,
    message: "清单创建成功！",
  };
}

export async function deleteList(id: number) {
  "use server";
  const user = await currentUser();
  if (!user) {
    return {
      success: false,
      message: "请先登录！",
    };
  }
  await prisma.list.delete({
    where: {
      id,
      userId: user.id,
    },
  });
  revalidatePath("/");
}

// 网关拦截结构需要设计 ？ resfulAPI？
