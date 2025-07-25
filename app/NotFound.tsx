import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Oops! Page not found
        </p>
        <Link
          href="/"
          className="text-primary hover:text-primary-glow underline"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
