import { redirect } from "next/navigation";

import Sidebar from "@/components/sidebar";
import MobileHeader from "@/components/mobile-header";
import React from "react";
import { getUserProgress } from "@/db/queries";

type Props = {
  children: React.ReactNode;
};

const MainLayout = async ({ children }: Props) => {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-5-[1056px] mx-auto pt-6 h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
