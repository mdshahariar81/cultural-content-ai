"use client";

import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";

const processSteps = [
  {
    number: "01",
    title: "Submit Content",
    text: "Enter a Chinese cultural statement, paragraph, or other cultural content intended for an international audience.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Analyze",
    text: "The evaluator examines cultural accuracy, generalization, bias, stereotypes, clarity, and misunderstanding risks.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Evaluate",
    text: "Multiple evaluation dimensions are presented through scores, risk levels, explanations, and improvement suggestions.",
    icon: Target,
  },
  {
    number: "04",
    title: "Improve",
    text: "Potentially problematic content can be revised using clear and culturally responsible recommendations.",
    icon: CheckCircle2,
  },
];

const purposes = [
  "Identify potentially problematic cultural claims",
  "Reduce unnecessary generalization and stereotypes",
  "Improve cross-cultural clarity",
  "Provide actionable revision suggestions",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* TOP HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-slate-200 bg-white">
        <div className="flex h-full items-center justify-between px-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
              <Globe2 className="h-5 w-5" />
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

          {/* Header Right */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100"
            >
              <span className="text-lg">☾</span>
            </button>

            <button
              type="button"
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100"
            >
              <span className="text-lg">♧</span>
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="ml-1 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
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

              <span className="text-slate-400">⌄</span>
            </div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="flex min-h-screen pt-[72px]">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN */}
        <main className="min-w-0 flex-1">
          {/* HERO */}
          <section className="border-b border-slate-200 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/30">
            <div className="mx-auto max-w-[1500px] px-8 py-14 xl:px-10">
              <div className="max-w-4xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI Research Platform
                </div>

                <h2 className="text-4xl font-bold tracking-tight text-slate-900 xl:text-5xl">
                  About Cultural Content Evaluator
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                  An AI-assisted platform designed to evaluate Chinese cultural
                  content for international communication and identify
                  potential cultural risks, generalizations, stereotypes, and
                  misunderstandings.
                </p>
              </div>
            </div>
          </section>

          {/* CONTENT */}
          <section className="px-8 py-10 xl:px-10">
            <div className="mx-auto max-w-[1200px] space-y-8">
              {/* INTRO + PURPOSE */}
              <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
                {/* WHAT */}
                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
                  <div className="mb-5 flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <Globe2 className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        What is this platform?
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        AI-assisted cultural content evaluation
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5 text-sm leading-7 text-slate-600">
                    <p>
                      Cultural content intended for international audiences
                      may sometimes contain over-generalized statements,
                      stereotypes, unclear expressions, or information that
                      lacks cultural context.
                    </p>

                    <p>
                      This platform provides an AI-assisted first-level
                      evaluation of cultural content. It analyzes a submitted
                      statement or paragraph and provides structured insights
                      across multiple evaluation dimensions.
                    </p>

                    <p>
                      The goal is not to replace human experts. Instead, AI is
                      used as an initial screening and decision-support tool
                      before cultural content is communicated internationally.
                    </p>
                  </div>
                </div>

                {/* PURPOSE */}
                <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 shadow-[0_4px_20px_rgba(37,99,235,0.06)]">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-blue-100">
                    <Target className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Our Purpose
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    To support clearer, more accurate, and culturally
                    responsible communication of Chinese culture to
                    international audiences.
                  </p>

                  <div className="mt-6 space-y-3">
                    {purposes.map((purpose) => (
                      <div
                        key={purpose}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <span>{purpose}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PROCESS */}
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
                <div className="mb-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                    Evaluation Process
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    How the evaluator works
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    A simple evaluation flow from content input to
                    AI-assisted analysis and improvement.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {processSteps.map((step) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.number}
                        className="group rounded-xl border border-slate-200 bg-slate-50/60 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-200">
                            <Icon className="h-5 w-5" />
                          </div>

                          <span className="text-xs font-bold text-slate-300">
                            {step.number}
                          </span>
                        </div>

                        <h4 className="mt-5 font-bold text-slate-900">
                          {step.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {step.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* DIMENSIONS */}
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                  <div>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                      <ShieldCheck className="h-5 w-5" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      Evaluation Dimensions
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      The interface presents a structured view of the key
                      factors considered when evaluating cultural content.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Cultural Accuracy",
                      "Generalization",
                      "Bias & Stereotypes",
                      "Cross-cultural Clarity",
                      "Misunderstanding Risk",
                      "Communication Quality",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                          {index + 1}
                        </span>

                        <span className="text-sm font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOTTOM NOTE */}
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <ArrowRight className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      AI-assisted, human-centered
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      The evaluator is designed as a first-level screening and
                      decision-support interface. Human judgment remains
                      important for final cultural validation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}