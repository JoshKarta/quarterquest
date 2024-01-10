import AddTransaction from "@/components/addTransaction";
import { Heart, Home, WalletCards } from "lucide-react";
import Link from "next/link";
import React from "react";

type TLink = {
  icon: React.JSX.Element;
  href?: string;
};

export default function Navbar() {
  const links = [
    {
      icon: <Home className="icon-size hover:scale-90 transition-class" />,
      href: "/",
    },
    {
      icon: <Heart className="icon-size hover:scale-90 transition-class" />,
      href: "/wishlist",
    },
    {
      icon: <AddTransaction />,
    },
    {
      icon: (
        <WalletCards className="icon-size hover:scale-90 transition-class" />
      ),
      href: "/accounts",
    },
    {
      icon: <Home className="icon-size hover:scale-90 transition-class" />,
      href: "/",
    },
  ];
  return (
    <nav className="w-full h-20 bg-white">
      <div className="container-screen">
        <div className="flex items-center justify-between">
          {links.map(({ icon, href }: TLink) => (
            <Link href={href ? href : "#"}>{icon}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
