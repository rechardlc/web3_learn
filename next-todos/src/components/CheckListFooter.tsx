"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Trash2, CirclePlus } from "lucide-react";
import { type List } from "@/generated/prisma";
import { deleteList } from "@/actions/list";
import { toast } from "sonner";

interface Props {
  checkList: List;
}

export default function CheckListFooter({ checkList }: Props) {
  const { createdAt, userId, id } = checkList;

  const deleteCheckList = async () => {
    try {
      await deleteList(id);
      toast.success("Checklist deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Separator />
      <footer className="flex h-[60px] w-full items-center justify-between text-sm text-white">
        <p>创建于 {createdAt.toLocaleDateString("zh-CN")}</p>
        <div>
          <Button className="cursor-pointer" size={"icon"} variant={"ghost"}>
            <CirclePlus />
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                className="cursor-pointer"
                size={"icon"}
                variant={"ghost"}
              >
                <Trash2 />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>确定要删除吗？</AlertDialogTitle>
                <AlertDialogDescription>该操作无法撤回</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="cursor-pointer">
                  取消
                </AlertDialogCancel>
                <AlertDialogAction
                  className="cursor-pointer"
                  onClick={deleteCheckList}
                >
                  确定
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </footer>
    </>
  );
}
