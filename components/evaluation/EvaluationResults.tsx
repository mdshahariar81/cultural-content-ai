"use client";

import {
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  Copy,
  Download,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

type EvaluationResultsProps = {
  evaluated: boolean;
  content?: string;
  onReset?: () => void;
};

export default function EvaluationResults({
  evaluated,
  content,
  onReset,
}: EvaluationResultsProps) {
  const handleCopy = async () => {
    const result = `Overall Score: 78/100
Risk Level: Moderate Risk

Cultural Accuracy: 85
Avoids Generalization: 70
Bias & Stereotypes: 60
Cross-cultural Clarity: 80
Misunderstanding Risk: 65
Communication Quality: 90`;

    try {
      await navigator.clipboard.writeText(result);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
      {/* TOP ACCENT */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500" />

      <div className="p-6 xl:p-7">
        {/* HEADER */}
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
              <BarChart3 className="h-5 w-5 text-emerald-600" />
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Evaluation Results
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                AI-powered cultural content analysis
              </p>
            </div>
          </div>

          <span
            className={`whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-medium ${
              evaluated
                ? "bg-emerald-50 text-emerald-600"
                : "bg-slate-100 text-slate-400"
            }`}
          >
            {evaluated ? "Evaluation complete" : "Awaiting input"}
          </span>
        </div>

        {!evaluated ? (
          /* EMPTY STATE */
          <div className="flex min-h-[560px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-gradient-to-b from-slate-50/80 to-white px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 ring-8 ring-blue-50/50">
              <BarChart3 className="h-7 w-7 text-blue-500" />
            </div>

            <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900">
              Ready to evaluate
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Enter cultural content on the left and click{" "}
              <span className="font-semibold text-slate-700">
                Evaluate Content
              </span>{" "}
              to see the AI-powered analysis.
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-500 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-200" />
              AI evaluator is ready
            </div>
          </div>
        ) : (
          /* RESULTS */
          <div className="space-y-5">
            {/* ANALYZED CONTENT */}
            <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-600" />

                <span className="text-xs font-bold text-blue-700">
                  Analyzed Content
                </span>
              </div>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-700">
                {content || "No content provided."}
              </p>
            </div>

            {/* SCORE + RISK */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5">
                <p className="text-xs font-semibold text-emerald-700">
                  Overall Score
                </p>

                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-emerald-700">
                    78
                  </span>

                  <span className="text-sm font-semibold text-emerald-600">
                    / 100
                  </span>
                </div>

                <p className="mt-2 text-xs text-emerald-600">
                  Good with some improvements needed
                </p>
              </div>

              <div className="rounded-xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-5">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />

                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                    Moderate Risk
                  </span>
                </div>

                <p className="mt-3 text-xs text-amber-700">
                  Some cultural issues detected
                </p>
              </div>
            </div>

            {/* DIMENSION SCORES */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">
                  Dimension Scores
                </h3>

                <span className="text-[11px] text-slate-400">
                  AI assessment
                </span>
              </div>

              <div className="space-y-4">
                <ScoreBar label="Cultural Accuracy" score={85} />
                <ScoreBar label="Avoids Generalization" score={70} />
                <ScoreBar label="Bias & Stereotypes" score={60} />
                <ScoreBar label="Cross-cultural Clarity" score={80} />
                <ScoreBar label="Misunderstanding Risk" score={65} />
                <ScoreBar label="Communication Quality" score={90} />
              </div>
            </div>

            {/* AI ANALYSIS */}
            <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/70 to-white p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                </div>

                <h3 className="text-sm font-bold text-slate-900">
                  AI Analysis
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                The content correctly mentions tea as a traditional part of
                Chinese culture, which is accurate. However, the phrase
                “Chinese people always drink tea” is too general and may not
                apply to everyone. A more specific and inclusive expression is
                recommended.
              </p>
            </div>

            {/* SUGGESTION */}
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50">
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                </div>

                <h3 className="text-sm font-bold text-slate-900">
                  Suggestions for Improvement
                </h3>
              </div>

              <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3.5">
                <p className="text-sm leading-6 text-blue-800">
                  Consider using a more nuanced statement, such as:
                  <span className="font-semibold">
                    {" "}
                    “Many Chinese people enjoy drinking tea, which is a
                    traditional and popular part of Chinese culture.”
                  </span>
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Download className="h-4 w-4" />
                Download Report
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Copy className="h-4 w-4" />
                Copy Result
              </button>

              <button
                type="button"
                onClick={onReset}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <RotateCcw className="h-4 w-4" />
                Evaluate Another
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* SCORE BAR */

function ScoreBar({
  label,
  score,
}: {
  label: string;
  score: number;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-600">
          {label}
        </span>

        <span className="text-xs font-bold text-slate-700">
          {score}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-700"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}