import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-(--color-border-subtle) bg-(--color-bg-surface) px-6 md:h-20 md:px-12">
      {/* Left: Logo */}
      <div className="flex items-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-(--color-text-primary)"
          aria-label="Lotus Logo"
        >
          <path
            d="M50 20C50 20 65 40 65 60C65 75 55 80 50 80C45 80 35 75 35 60C35 40 50 20 50 20Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M50 80C50 80 75 75 80 60C85 45 75 35 75 35C75 35 65 50 65 60"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M50 80C50 80 25 75 20 60C15 45 25 35 25 35C25 35 35 50 35 60"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Right: Navigation */}
      <nav>
        <ul className="flex items-center gap-6 font-sans text-sm font-medium tracking-wide text-(--color-text-primary) md:gap-10 md:text-base">
          <li>
            <Link
              href="/tarotwithdd"
              className="transition-colors hover:text-(--color-text-secondary)"
            >
              Tarot Readings
            </Link>
          </li>
          <li>
            <Link
              href="/reviews"
              className="transition-colors hover:text-(--color-text-secondary)"
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition-colors hover:text-(--color-text-secondary)"
            >
              My Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
