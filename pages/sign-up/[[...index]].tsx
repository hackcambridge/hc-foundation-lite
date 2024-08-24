import { SignUp } from "@clerk/nextjs";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function SignUpPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center text-center gap-4 py-8">
        <div className="py-6">
          <h1 className={title()}>
            Hack Cambridge Portal
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <SignUp />
        </div>
      </section>
    </DefaultLayout>
  );
}