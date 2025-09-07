"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  createListZodSchema,
  type CreateListZodSchemaType,
} from "@/schema/createList";
import { cn } from "@/lib/utils";
import { ListMap } from "@/lib/const";
import { createList } from "@/actions/list";
export default function CreateListModal() {
  const form = useForm<CreateListZodSchemaType>({
    resolver: zodResolver(createListZodSchema),
    defaultValues: {
      name: "",
      color: "",
    },
  });
  const [open, setOpen] = useState(false);
  const onSubmit = async (data: CreateListZodSchemaType) => {
    try {
      const result = await createList(data);
      onOpenChange(false);
      toast.success("清单创建成功", {
        description: "List created successfully",
        duration: 5000,
      });
      console.log("result:", result);
    } catch (error) {
      console.log(error);
      toast.error("清单创建失败", { duration: 5000 });
    }
  };
  const onOpenChange = (open: boolean) => {
    form.reset();
    setOpen(open);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>添加清单</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>添加清单</SheetTitle>
          <SheetDescription>
            清单是任务的集合，比如“工作”、“生活”、“副业”
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 p-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>设置清单的名称：</FormLabel>
                  <FormControl>
                    <Input placeholder="例如：工作" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>选择清单的背景色：</FormLabel>
                  <FormControl>
                    <Select onValueChange={(color) => field.onChange(color)}>
                      <SelectTrigger
                        className={cn("w-[180px]", ListMap.get(field.value), {
                          "text-white": !!field.value,
                        })}
                      >
                        <SelectValue placeholder="颜色" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {[...ListMap.entries()].map(
                            ([color, [className, name]]) => {
                              return (
                                <SelectItem
                                  key={color}
                                  value={color}
                                  className={cn(
                                    "my-1 w-full rounded-md text-white ring-black focus:font-bold focus:text-white focus:ring-2 dark:ring-white",
                                    className,
                                    `focus:${className}`
                                  )}
                                >
                                  {name}
                                </SelectItem>
                              );
                            }
                          )}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <SheetFooter>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            创建
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
