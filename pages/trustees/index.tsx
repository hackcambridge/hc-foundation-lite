import Link from "next/link";
import { useRouter } from "next/router";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function TrusteesPage() {
  const router = useRouter();
  const { picture } = router.query;

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Trustees</h1>
          <p className="py-4">
            <Link href="/api/auth/linkedin">
              Login with LinkedIn to fetch your profile photo
            </Link>
          </p>
          {picture ? <img src={picture as string} alt="Profile Picture" /> : <p>No picture available</p>}
        </div>
      </section>
    </DefaultLayout>
  );
}
