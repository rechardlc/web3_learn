import { Suspense } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { currentUser } from "@clerk/nextjs/server";
import CreateListModal from "@/components/CreateListModal";
import { CheckLists } from "@/components/CheckLists";
async function Welcome() {
  const user = await currentUser();

  if (!user) return null;

  return (
    <Card className="w-full sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">
          欢迎 {user.firstName} {user.lastName}!
        </CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          江河所至，皆为汉土；日月所照，皆为华夏。
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <CreateListModal />
      </CardFooter>
    </Card>
  );
}

function WelcomeFallback() {
  return <Skeleton className="h-[180px] w-full" />;
}

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center px-4">
      <Suspense fallback={<WelcomeFallback />}>
        <Welcome />
      </Suspense>
      <Suspense fallback={<WelcomeFallback />}>
        <CheckLists/>
      </Suspense>
    </main>
  );
}
