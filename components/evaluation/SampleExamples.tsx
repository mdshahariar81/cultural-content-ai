"use client";

import { Lightbulb } from "lucide-react";
import { sampleExamples } from "@/lib/data/samples";

type SampleExamplesProps = {
  onSelect: (content: string, contentType: string) => void;
};

export default function SampleExamples({
  onSelect,
}: SampleExamplesProps) {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
          <Lightbulb className="h-5 w-5 text-amber-500" />
        </div>

        <h2 className="text-xl font-bold text-slate-900">
          Sample Examples
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {sampleExamples.map((sample) => (
          <article
            key={sample.id}
            className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <p className="min-h-[90px] text-sm leading-6 text-slate-700">
              “{sample.content}”
            </p>

            <div className="mt-4">
              <p className="text-xs font-medium text-slate-500">
                {sample.contentType}
              </p>

              <p className="mt-1 text-xs font-medium text-amber-600">
                {sample.tag}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                onSelect(sample.content, sample.contentType)
              }
              className="mt-4 rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Use Example
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}