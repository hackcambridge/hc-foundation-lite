import { useContext, useEffect, useState } from "react";
import { Link } from "@nextui-org/link";

import { AuthContext } from "@/components/auth";

export default function DropdownMenu() {
  const authProvider = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const avatar = document.getElementById("avatar");
      const isHovered = avatar?.getAttribute("data-hover");
      const isFocused = avatar?.getAttribute("data-focus");

      if (isHovered === "true" || isFocused === "true") {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (!isOpen) {
    return null;
  } else {
    if (!authProvider.isLoggedIn) {
      return (
        <div className="absolute top-14 right-6 z-10 w-44 mt-2 bg-white border rounded shadow-lg">
          <Link
            className="block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray-100"
            href="/sign-in"
          >
            Sign in
          </Link>
          <Link
            className="block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray-100"
            href="/sign-up"
          >
            Sign up
          </Link>
        </div>
      );
    } else {
      return (
        <div className="absolute top-14 right-6 z-10 w-44 mt-2 bg-white border rounded shadow-lg">
          <Link
            className="block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray-100"
            href="/profile"
          >
            Profile Settings
          </Link>
          <Link
            className="block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray-100"
            href="/sign-out"
          >
            Sign out
          </Link>
        </div>
      );
    }
  }
}
