"use client";

import { useState } from "react";
import {
  FileText,
  Link2,
  Sparkles,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

const contentTypes = [
  "General Post",
  "Social Media Post",
  "Advertisement",
  "Tourism Content",
  "Website Content",
  "Educational Material",
  "Festival Content",
  "Food & Cuisine",
  "Traditional Arts",
  "Customs & Traditions",
];

const targetAudiences = [
  "International Audience",
  "International Students",
  "Tourists",
  "General Public",
  "Academic Audience",
];

type EvaluationFormProps = {
  content?: string;
  onContentChange?: (content: string) => void;
  onEvaluate?: () => void;
};

export default function EvaluationForm({
  content = "",
  onContentChange,
  onEvaluate,
}: EvaluationFormProps) {
  const [inputMode, setInputMode] = useState<"text" | "url">("text");
  const [url, setUrl] = useState("");
  const [contentType, setContentType] = useState("General Post");
  const [targetAudience, setTargetAudience] = useState(
    "International Audience"
  );

  const maxLength = 2000;

  const handleContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value.slice(0, maxLength);
    onContentChange?.(value);
  };

  const canEvaluate =
    inputMode === "text"
      ? content.trim().length > 0
      : url.trim().length > 0;

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
      {/* Top Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500" />

      <div className="p-6 xl:p-7">
        {/* Header */}
        <div className="mb-6 flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100">
            <FileText className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Evaluate Chinese Cultural Content
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Enter cultural content for AI-powered evaluation and insights.
            </p>
          </div>
        </div>

        {/* Input Mode */}
        <div className="mb-5 flex rounded-xl border border-slate-200 bg-slate-100/80 p-1">
          {/* Text Input */}
          <button
            type="button"
            onClick={() => setInputMode("text")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
              inputMode === "text"
                ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200"
                : "text-slate-500 hover:bg-white/70 hover:text-slate-700"
            }`}
          >
            <FileText
              className={`h-4 w-4 transition-colors ${
                inputMode === "text"
                  ? "text-blue-600"
                  : "text-slate-400"
              }`}
            />

            <span>Text Input</span>
          </button>

          {/* URL Input */}
          <button
            type="button"
            onClick={() => setInputMode("url")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
              inputMode === "url"
                ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200"
                : "text-slate-500 hover:bg-white/70 hover:text-slate-700"
            }`}
          >
            <Link2
              className={`h-4 w-4 transition-colors ${
                inputMode === "url"
                  ? "text-blue-600"
                  : "text-slate-400"
              }`}
            />

            <span>URL Input</span>
          </button>
        </div>

        {/* Text Input */}
        {inputMode === "text" && (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-800">
                Enter Cultural Content
              </label>

              <span className="text-xs text-slate-400">
                Short statement or longer paragraph
              </span>
            </div>

            <textarea
              value={content}
              onChange={handleContentChange}
              placeholder="Type or paste a cultural statement or paragraph here..."
              className="min-h-[205px] w-full resize-none rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-sm leading-6 text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />

            <div className="mt-2 flex items-center justify-between text-xs">
              <span className="text-slate-400">
                Example: Chinese people always drink tea every day.
              </span>

              <span
                className={
                  content.length >= maxLength
                    ? "font-semibold text-red-500"
                    : "text-slate-400"
                }
              >
                {content.length}/{maxLength}
              </span>
            </div>
          </div>
        )}

        {/* URL Input */}
        {inputMode === "url" && (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-800">
                Analyze Content from URL
              </label>

              <span className="text-xs text-slate-400">
                Website, article or public post
              </span>
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <Link2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/cultural-content"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <button
                type="button"
                className="h-12 rounded-xl border border-blue-200 bg-blue-50 px-5 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
              >
                Fetch
              </button>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              Paste a publicly accessible URL containing cultural content.
            </p>
          </div>
        )}

        {/* Select Fields */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* Content Type */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Content Type
            </label>

            <div className="relative">
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              >
                {contentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          {/* Target Audience */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-800">
              Target Audience
            </label>

            <div className="relative">
              <select
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm text-slate-700 outline-none transition hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              >
                {targetAudiences.map((audience) => (
                  <option key={audience} value={audience}>
                    {audience}
                  </option>
                ))}
              </select>

              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-5 flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/60 px-3.5 py-2.5">
          <ShieldCheck className="h-4 w-4 shrink-0 text-blue-600" />

          <p className="text-xs leading-5 text-blue-700">
            AI evaluates cultural accuracy, generalization, bias and
            cross-cultural communication risks.
          </p>
        </div>

        {/* Evaluate Button */}
        <button
          type="button"
          onClick={onEvaluate}
          disabled={!canEvaluate}
          className={`mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold shadow-sm transition-all duration-200 ${
            canEvaluate
              ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md active:scale-[0.99]"
              : "cursor-not-allowed bg-slate-200 text-slate-400"
          }`}
        >
          <Sparkles className="h-4 w-4" />
          Evaluate Content
        </button>
      </div>
    </section>
  );
}