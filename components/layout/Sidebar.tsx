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
  Sparkles,
} from "lucide-react";

const mainNav = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Evaluate Content",
    href: "/",
    icon: FileText,
  },
  {
    label: "History",
    href: "/history",
    icon: History,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
];

const bottomNav = [
  {
    label: "Settings",
    href: "#",
    icon: Settings,
  },
  {
    label: "Help & Support",
    href: "#",
    icon: HelpCircle,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isHistory = pathname === "/history";
  const isAbout = pathname === "/about";

  return (
    <aside className="sticky top-[72px] hidden h-[calc(100vh-72px)] w-[250px] shrink-0 overflow-hidden border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* =====================================================
          BRAND / PROJECT HEADER
      ===================================================== */}
      <div className="relative z-20 border-b border-slate-200 bg-white px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20">
            <Sparkles className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-[15px] font-bold tracking-tight text-slate-900">
              Your Brand Cultural AI
            </h2>

            <p className="mt-0.5 text-[11px] text-slate-400">
              Project Name
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}
      <div className="relative z-20 flex-1 overflow-y-auto px-3 py-4">
        <nav className="space-y-1.5">
          {/* HOME */}
          <Link
            href="/"
            className={`group flex h-11 items-center gap-3 rounded-xl px-4 text-sm font-medium transition-all duration-200 ${
              isHome
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20"
                : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <Home
              className={`h-[18px] w-[18px] ${
                isHome
                  ? "text-white"
                  : "text-slate-500 group-hover:text-blue-600"
              }`}
            />

            <span>Home</span>
          </Link>

          {/* EVALUATE CONTENT */}
          <Link
            href="/"
            className={`group flex h-11 items-center gap-3 rounded-xl px-4 text-sm font-medium transition-all duration-200 ${
              pathname === "/evaluate"
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20"
                : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <FileText
              className={`h-[18px] w-[18px] ${
                pathname === "/evaluate"
                  ? "text-white"
                  : "text-slate-500 group-hover:text-blue-600"
              }`}
            />

            <span>Evaluate Content</span>
          </Link>

          {/* HISTORY */}
          <Link
            href="/history"
            className={`group flex h-11 items-center gap-3 rounded-xl px-4 text-sm font-medium transition-all duration-200 ${
              isHistory
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20"
                : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <History
              className={`h-[18px] w-[18px] ${
                isHistory
                  ? "text-white"
                  : "text-slate-500 group-hover:text-blue-600"
              }`}
            />

            <span>History</span>
          </Link>

          {/* ABOUT */}
          <Link
            href="/about"
            className={`group flex h-11 items-center gap-3 rounded-xl px-4 text-sm font-medium transition-all duration-200 ${
              isAbout
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20"
                : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <Info
              className={`h-[18px] w-[18px] ${
                isAbout
                  ? "text-white"
                  : "text-slate-500 group-hover:text-blue-600"
              }`}
            />

            <span>About</span>
          </Link>
        </nav>
      </div>

      {/* =====================================================
          BOTTOM AREA
      ===================================================== */}
      <div className="relative z-20 border-t border-slate-200 bg-white">
        <div className="px-3 py-3">
          <nav className="space-y-1.5">
            {bottomNav.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex h-11 items-center gap-3 rounded-xl px-4 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Icon className="h-[18px] w-[18px] text-slate-500 transition group-hover:text-blue-600" />

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ===================================================
            UNIVERSITY / CULTURAL IMAGE
        =================================================== */}
        <div className="relative h-[190px] overflow-hidden border-t border-slate-100">
          {/* Background Image */}
          <img
            src="/images/cultural-sidebar.png"
            alt="Chinese cultural landscape"
            className="absolute inset-0 h-full w-full object-cover object-bottom opacity-75"
          />

          {/* Soft white overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/10" />

          {/* University Text */}
          <div className="absolute inset-x-0 bottom-5 z-10 px-4 text-center">
            <div className="mx-auto mb-2 h-px w-12 bg-blue-300/70" />

            <p className="text-[12px] font-bold tracking-wide text-slate-800">
              Your University
            </p>

            <p className="mt-1 text-[10px] text-slate-500">
              Your City, Country
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}