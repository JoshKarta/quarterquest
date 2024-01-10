"use client";
import { usePathname } from "next/navigation";

export default function Heading() {
  const pathname = usePathname();
  const name = "Josh";

  if (pathname.includes("/wishlist")) {
    return (
      <div className="container-screen py-4">
        <p className="font-semibold text-lg">Hey {name},</p>
        <p className="font-medium">
          Shoot for the moon. Even if you miss, you'll land among the stars.
        </p>
      </div>
    );
  }

  return (
    <div className="container-screen py-4">
      <p className="font-semibold text-lg">Welcome back {name}</p>
    </div>
  );
}
