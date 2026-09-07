"use client";

import { useState } from "react";
import {
  Bell,
  ChevronDown,
  Globe,
  Moon,
} from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";
import EvaluationForm from "@/components/evaluation/EvaluationForm";
import SampleExamples from "@/components/evaluation/SampleExamples";
import EvaluationResults from "@/components/evaluation/EvaluationResults";

export default function Home() {
  const [content, setContent] = useState("");
  const [evaluated, setEvaluated] = useState(false);

  const handleEvaluate = () => {
    if (!content.trim()) return;
    setEvaluated(true);
  };

  const handleReset = () => {
    setContent("");
    setEvaluated(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f8fc] text-slate-900">
      {/* TOP HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="flex h-full items-center px-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-200">
              <Globe className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-[15px] font-bold tracking-tight text-slate-900">
                Cultural Content Evaluator
              </h1>

              <p className="text-[11px] text-slate-500">
                Evaluate cultural content and get AI-powered insights
              </p>
            </div>
          </div>

          {/* Header Actions */}
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-all hover:bg-blue-50 hover:text-blue-600"
            >
              <Moon className="h-[18px] w-[18px]" />
            </button>

            <button
              type="button"
              aria-label="Notifications"
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-all hover:bg-blue-50 hover:text-blue-600"
            >
              <Bell className="h-[18px] w-[18px]" />

              <span className="absolute right-[7px] top-[6px] h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            {/* Profile */}
            <div className="ml-2 flex cursor-pointer items-center gap-2.5 rounded-xl px-2 py-1.5 transition hover:bg-slate-50">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-xs font-bold text-white shadow-sm">
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
        </div>
      </header>

      {/* APP BODY */}
      <div className="flex min-h-screen pt-[72px]">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN */}
        <main className="min-w-0 flex-1">
          {/* PAGE HERO */}
          <section className="border-b border-slate-200/70 bg-gradient-to-r from-white via-[#f8faff] to-blue-50/40">
            <div className="px-8 py-8 xl:px-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-200" />

                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                      AI Research Platform
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 xl:text-[34px]">
                    Chinese Cultural Content Evaluation
                  </h2>

                  <p className="mt-2 text-[15px] text-slate-600">
                    AI-powered analysis for international communication
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-400">
                    <span>Understand</span>
                    <span className="text-blue-300">•</span>
                    <span>Evaluate</span>
                    <span className="text-blue-300">•</span>
                    <span>Improve</span>
                    <span className="text-blue-300">•</span>
                    <span>Connect</span>
                  </div>
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-medium text-blue-600 shadow-sm lg:flex">
                  <span>Bridging Cultures with AI</span>
                  <Globe className="h-4 w-4" />
                </div>
              </div>
            </div>
          </section>

          {/* CONTENT */}
          <section className="px-8 py-8 xl:px-10">
            <div className="mx-auto max-w-[1500px]">
              <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                {/* LEFT COLUMN */}
                <div className="min-w-0 space-y-6">
                  <EvaluationForm
                    content={content}
                    onContentChange={setContent}
                    onEvaluate={handleEvaluate}
                  />

                  <SampleExamples
                    onSelect={(selectedContent) => {
                      setContent(selectedContent);
                      setEvaluated(false);
                    }}
                  />
                </div>

                {/* RIGHT COLUMN */}
                <div className="min-w-0">
                  <EvaluationResults
                    evaluated={evaluated}
                    content={content}
                    onReset={handleReset}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}