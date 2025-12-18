"use client";

import { useCallback, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export function useScrollToId() {
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToId = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleScrollToId = useCallback(
    (id: string) => {
      if (pathname === "/") {
        scrollToId(id);
      } else {
        setPendingScrollId(id);
        router.push(`/`);
      }
    },
    [pathname, router, scrollToId]
  );

  useEffect(() => {
    if (pathname === "/" && pendingScrollId) {
      setTimeout(() => {
        scrollToId(pendingScrollId);
        setPendingScrollId(null);
      }, 200);
    }
  }, [pathname, pendingScrollId, scrollToId]);

  return { handleScrollToId };
}
