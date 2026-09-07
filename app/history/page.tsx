"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Eye,
  FileText,
  Filter,
  Search,
  ShieldAlert,
  Trash2,
  TrendingUp,
  X,
} from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";

type RiskLevel = "Low Risk" | "Moderate Risk" | "High Risk";

type HistoryItem = {
  id: number;
  title: string;
  content: string;
  type: string;
  audience: string;
  score: number;
  risk: RiskLevel;
  date: string;
};

const initialHistory: HistoryItem[] = [
  {
    id: 1,
    title: "Traditional Chinese Tea Culture",
    content:
      "Chinese people always drink tea. It is a simple and traditional habit.",
    type: "General Post",
    audience: "International Audience",
    score: 78,
    risk: "Moderate Risk",
    date: "Sep 7, 2026 · 21:42",
  },
  {
    id: 2,
    title: "Spring Festival Traditions",
    content:
      "The Spring Festival is an important traditional festival in China, and many families celebrate it together.",
    type: "Festival Content",
    audience: "International Students",
    score: 94,
    risk: "Low Risk",
    date: "Sep 6, 2026 · 18:25",
  },
  {
    id: 3,
    title: "Chinese Cuisine",
    content:
      "Chinese cuisine is mainly based on rice, noodles, and spicy food, and most Chinese people eat these foods every day.",
    type: "Food & Cuisine",
    audience: "Tourists",
    score: 52,
    risk: "High Risk",
    date: "Sep 5, 2026 · 14:10",
  },
  {
    id: 4,
    title: "Chinese Calligraphy",
    content:
      "Chinese calligraphy is a traditional art form that combines writing, culture, and visual expression.",
    type: "Traditional Arts",
    audience: "General Public",
    score: 91,
    risk: "Low Risk",
    date: "Sep 4, 2026 · 20:05",
  },
  {
    id: 5,
    title: "Chinese Mathematics Stereotype",
    content: "All Chinese people are good at mathematics.",
    type: "General Post",
    audience: "International Audience",
    score: 38,
    risk: "High Risk",
    date: "Sep 3, 2026 · 16:32",
  },
];

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>(initialHistory);
  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState("All Risk Levels");
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);

  const filteredHistory = useMemo(() => {
    return history.filter((item) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        item.title.toLowerCase().includes(searchValue) ||
        item.content.toLowerCase().includes(searchValue) ||
        item.type.toLowerCase().includes(searchValue) ||
        item.audience.toLowerCase().includes(searchValue);

      const matchesRisk =
        riskFilter === "All Risk Levels" || item.risk === riskFilter;

      return matchesSearch && matchesRisk;
    });
  }, [history, search, riskFilter]);

  const averageScore = useMemo(() => {
    if (history.length === 0) return 0;

    const total = history.reduce((sum, item) => sum + item.score, 0);

    return Math.round(total / history.length);
  }, [history]);

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this evaluation?"
    );

    if (!confirmed) return;

    setHistory((current) => current.filter((item) => item.id !== id));

    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* =========================================================
          TOP HEADER
      ========================================================= */}
      <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="flex h-full items-center justify-between px-6">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-200">
              <BarChart3 className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-[15px] font-bold tracking-tight text-slate-900">
                Cultural Content Evaluator
              </h1>

              <p className="text-[11px] text-slate-500">
                Evaluation history and insights
              </p>
            </div>
          </Link>

          {/* Profile */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-xs font-bold text-white shadow-sm">
              SH
            </div>

            <div className="hidden leading-tight sm:block">
              <p className="text-xs font-semibold text-slate-900">
                Shahariar Hossen
              </p>

              <p className="mt-0.5 text-[10px] text-slate-500">
                Research Team
              </p>
            </div>

            <ChevronDown className="ml-1 h-4 w-4 text-slate-400" />
          </div>
        </div>
      </header>

      {/* =========================================================
          BODY
      ========================================================= */}
      <div className="flex min-h-screen pt-[72px]">
        {/* =======================================================
            COMMON SIDEBAR
        ======================================================= */}
        <Sidebar />

        {/* =======================================================
            MAIN
        ======================================================= */}
        <main className="min-w-0 flex-1">
          {/* Page Header */}
          <section className="border-b border-slate-200/70 bg-gradient-to-r from-white via-blue-50/30 to-cyan-50/40">
            <div className="px-6 py-8 md:px-8 xl:px-10">
              <Link
                href="/"
                className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-blue-600"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />

                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      Evaluation Records
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    Evaluation History
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    Review previous cultural content evaluations, scores, and
                    risk assessments.
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                    <p className="text-[11px] font-medium text-slate-400">
                      Total Evaluations
                    </p>

                    <p className="mt-1 text-xl font-bold text-slate-900">
                      {history.length}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-3">
                    <p className="text-[11px] font-medium text-emerald-600">
                      Average Score
                    </p>

                    <p className="mt-1 text-xl font-bold text-emerald-700">
                      {averageScore}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              CONTENT
          ===================================================== */}
          <section className="px-6 py-7 md:px-8 xl:px-10">
            <div className="mx-auto max-w-[1450px]">
              {/* Filter Bar */}
              <div className="mb-6 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <div className="flex flex-col gap-3 md:flex-row">
                  {/* Search */}
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search evaluation history..."
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  {/* Risk Filter */}
                  <div className="relative md:w-[220px]">
                    <Filter className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <select
                      value={riskFilter}
                      onChange={(e) => setRiskFilter(e.target.value)}
                      className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-10 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    >
                      <option>All Risk Levels</option>
                      <option>Low Risk</option>
                      <option>Moderate Risk</option>
                      <option>High Risk</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Result Count */}
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium text-slate-500">
                  Showing{" "}
                  <span className="font-bold text-slate-800">
                    {filteredHistory.length}
                  </span>{" "}
                  evaluation
                  {filteredHistory.length !== 1 ? "s" : ""}
                </p>

                {(search || riskFilter !== "All Risk Levels") && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setRiskFilter("All Risk Levels");
                    }}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              {/* History List */}
              <div className="space-y-4">
                {filteredHistory.length > 0 ? (
                  filteredHistory.map((item) => (
                    <HistoryCard
                      key={item.id}
                      item={item}
                      onView={() => setSelectedItem(item)}
                      onDelete={() => handleDelete(item.id)}
                    />
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                      <Search className="h-6 w-6 text-slate-400" />
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      No evaluations found
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Try changing your search or risk filter.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* =========================================================
          VIEW DETAILS MODAL
      ========================================================= */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Evaluation Details
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  {selectedItem.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
              <p className="text-xs font-semibold text-blue-700">
                Analyzed Content
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-700">
                {selectedItem.content}
              </p>
            </div>

            {/* Score + Risk */}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                <p className="text-xs font-semibold text-emerald-700">
                  Overall Score
                </p>

                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-emerald-700">
                    {selectedItem.score}
                  </span>

                  <span className="text-sm font-semibold text-emerald-600">
                    / 100
                  </span>
                </div>
              </div>

              <RiskBadge risk={selectedItem.risk} />
            </div>

            {/* Metadata */}
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <InfoBox label="Content Type" value={selectedItem.type} />

              <InfoBox
                label="Target Audience"
                value={selectedItem.audience}
              />

              <InfoBox label="Evaluated" value={selectedItem.date} />
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* =============================================================
   HISTORY CARD
============================================================= */

function HistoryCard({
  item,
  onView,
  onDelete,
}: {
  item: HistoryItem;
  onView: () => void;
  onDelete: () => void;
}) {
  const riskStyles = {
    "Low Risk": {
      badge: "border-emerald-100 bg-emerald-50 text-emerald-700",
      icon: "bg-emerald-50 text-emerald-600",
    },

    "Moderate Risk": {
      badge: "border-amber-100 bg-amber-50 text-amber-700",
      icon: "bg-amber-50 text-amber-600",
    },

    "High Risk": {
      badge: "border-red-100 bg-red-50 text-red-700",
      icon: "bg-red-50 text-red-600",
    },
  };

  const style = riskStyles[item.risk];

  const scoreColor =
    item.score >= 80
      ? "text-emerald-600"
      : item.score >= 60
        ? "text-amber-600"
        : "text-red-600";

  return (
    <article className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        {/* Icon */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.icon}`}
        >
          {item.risk === "Low Risk" ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : (
            <ShieldAlert className="h-5 w-5" />
          )}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-bold text-slate-900">
              {item.title}
            </h3>

            <span
              className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${style.badge}`}
            >
              {item.risk}
            </span>
          </div>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
            {item.content}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-400">
            <span>{item.type}</span>

            <span>•</span>

            <span>{item.audience}</span>

            <span>•</span>

            <span>{item.date}</span>
          </div>
        </div>

        {/* Score */}
        <div className="flex items-center gap-6 lg:ml-auto">
          <div className="min-w-[90px]">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Score
            </p>

            <div className="mt-1 flex items-baseline gap-1">
              <span className={`text-2xl font-bold ${scoreColor}`}>
                {item.score}
              </span>

              <span className="text-xs font-medium text-slate-400">
                /100
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              title="View evaluation"
              onClick={onView}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <Eye className="h-4 w-4" />
            </button>

            <button
              type="button"
              title="Delete evaluation"
              onClick={onDelete}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =============================================================
   RISK BADGE
============================================================= */

function RiskBadge({ risk }: { risk: RiskLevel }) {
  const styles = {
    "Low Risk": "border-emerald-100 bg-emerald-50 text-emerald-700",
    "Moderate Risk": "border-amber-100 bg-amber-50 text-amber-700",
    "High Risk": "border-red-100 bg-red-50 text-red-700",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold text-slate-500">Risk Level</p>

      <span
        className={`mt-2 inline-flex rounded-full border px-3 py-1.5 text-xs font-bold ${styles[risk]}`}
      >
        {risk}
      </span>
    </div>
  );
}

/* =============================================================
   INFO BOX
============================================================= */

function InfoBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-xs font-semibold leading-5 text-slate-700">
        {value}
      </p>
    </div>
  );
}