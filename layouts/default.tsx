import Image from "next/image";
import { useRouter } from "next/router";
import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { useTheme } from "next-themes";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const loadGIF =
    isHomePage && theme === "dark"
      ? "/images/hack-cambridge-dark.gif"
      : isHomePage
      ? "/images/hack-cambridge-light.gif"
      : "";

  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-6">
        {loadGIF === "" ? null :
          <div className="flex justify-center">
            <Image
              src={loadGIF}
              alt="Hack Cambridge Foundation"
              width={700}
              height={700}
            />
          </div>
        }
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <span className="px-grotesk text-default-500">
          The Hack Cambridge Foundation
        </span>
      </footer>
    </div>
  );
}
