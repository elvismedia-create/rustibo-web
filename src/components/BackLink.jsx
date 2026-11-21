"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackLink() {
  const router = useRouter();

  const goBack = () => {
    const referrer = document.referrer;
    const sameSite = referrer && new URL(referrer).origin === window.location.origin;

    if (sameSite && window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={goBack}
      className="category-back-link font-brand-menu mb-5 inline-flex items-center gap-2 text-xl uppercase text-[var(--color-green-dark)] hover:text-[var(--color-green-nav)]"
    >
      <ArrowLeft size={18} />
      Volver
    </button>
  );
}
