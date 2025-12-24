import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-(--color-bg-surface) pt-16 md:pt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand Column */}
          <div className="flex max-w-sm flex-col gap-6">
            {/* Logo from Header */}
            <div className="text-(--color-accent-dark)">
              <svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            <p className="font-body leading-relaxed font-medium text-(--color-text-primary)">
              Guiding your soul&#39;s journey with intuition and ancient wisdom.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-10 md:gap-20 lg:grid-cols-3">
            {/* Services */}
            <div className="flex flex-col gap-6">
              <h4 className="font-heading text-2xl text-(--color-accent-dark)">
                Services
              </h4>
              <ul className="font-ui flex flex-col gap-4 font-medium text-(--color-text-primary)">
                <li>
                  <Link
                    href="#"
                    className="hover:text-(--color-text-secondary)"
                  >
                    TarotWithDD
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-(--color-text-secondary)"
                  >
                    RitualWithDD
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-(--color-text-secondary)"
                  >
                    HealWithDD
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div className="flex flex-col gap-6">
              <h4 className="font-heading text-2xl text-(--color-accent-dark)">
                Account
              </h4>
              <ul className="font-ui flex flex-col gap-4 font-medium text-(--color-text-primary)">
                <li>
                  <Link
                    href="#"
                    className="hover:text-(--color-text-secondary)"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-(--color-text-secondary)"
                  >
                    My Account
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-6">
              <h4 className="font-heading text-2xl text-(--color-accent-dark)">
                Support
              </h4>
              <ul className="font-ui flex flex-col gap-4 font-medium text-(--color-text-primary)">
                <li>
                  <Link
                    href="#"
                    className="hover:text-(--color-text-secondary)"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-(--color-text-secondary)"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-(--color-text-secondary)"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-(--color-text-secondary)"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-(--color-border-focus) opacity-30" />
      </div>

      {/* Powered By Bar */}
      <div className="mt-8 flex w-full items-center justify-center bg-linear-to-r from-(--color-accent-dark) via-(--color-accent-light) to-(--color-accent-dark) py-3 shadow-inner">
        <p className="font-ui text-sm font-semibold text-(--color-text-primary)">
          Powered by Cartigram
        </p>
      </div>
    </footer>
  );
}
