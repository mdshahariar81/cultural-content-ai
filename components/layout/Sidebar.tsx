"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  History,
  Info,
  Settings,
  HelpCircle,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Evaluate Content",
    href: "/",
    icon: FileText,
  },
  {
    name: "History",
    href: "/history",
    icon: History,
  },
  {
    name: "About",
    href: "/about",
    icon: Info,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation menu"
        className="fixed left-4 top-[65px] z-40 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-md transition hover:bg-slate-50 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-[72px] z-50
          flex h-[calc(100vh-72px)] w-[250px]
          flex-col overflow-hidden
          border-r border-slate-200 bg-white
          shadow-xl
          transition-transform duration-300 ease-in-out

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:sticky
          lg:top-[72px]
          lg:z-30
          lg:translate-x-0
          lg:shadow-none
        `}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4 lg:hidden">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
              <Sparkles className="h-4 w-4" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Your Brand
              </p>

              <p className="text-[11px] text-slate-500">
                Cultural AI
              </p>
            </div>
          </div>

          <button
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
          {/* Desktop Brand */}
          <div className="hidden px-5 pb-5 pt-6 lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-sm">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Your Brand
                </p>

                <p className="text-xs text-slate-500">
                  Cultural AI
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 px-3 pt-4 lg:pt-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center gap-3 rounded-xl px-3 py-3
                    text-sm font-medium transition-all
                    ${
                      active
                        ? "bg-blue-50 text-blue-700 shadow-sm"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }
                  `}
                >
                  <Icon
                    className={`h-[18px] w-[18px] ${
                      active
                        ? "text-blue-600"
                        : "text-slate-500"
                    }`}
                  />

                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Navigation */}
          <div className="mt-auto px-3 pb-4">
            <div className="mb-3 border-t border-slate-100" />

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900">
              <Settings className="h-[18px] w-[18px] text-slate-500" />
              <span>Settings</span>
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900">
              <HelpCircle className="h-[18px] w-[18px] text-slate-500" />
              <span>Help & Support</span>
            </button>
          </div>
        </div>

        {/* Cultural Image */}
        <div className="relative h-[170px] shrink-0 overflow-hidden">
          <img
            src="/images/cultural-sidebar.png"
            alt="Chinese cultural landscape"
            className="absolute inset-0 h-full w-full object-cover object-bottom opacity-75"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

          <div className="relative z-10 flex h-full items-end p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Project Name
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Your University
              </p>

              <p className="text-xs text-slate-400">
                Your City, Country
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}