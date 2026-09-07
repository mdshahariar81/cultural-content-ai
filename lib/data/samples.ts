export type SampleExample = {
  id: string;
  content: string;
  contentType: string;
  targetAudience: string;
  tag: string;
};

export const sampleExamples: SampleExample[] = [
  {
    id: "sample-001",
    content:
      "Chinese people always drink tea. It is a simple and traditional habit.",
    contentType: "General Post",
    targetAudience: "International Audience",
    tag: "Potential Generalization",
  },
  {
    id: "sample-002",
    content:
      "The Spring Festival is an important traditional festival in China, and many families celebrate it together.",
    contentType: "Cultural Introduction",
    targetAudience: "International Audience",
    tag: "Cultural Introduction",
  },
  {
    id: "sample-003",
    content:
      "All Chinese people are good at mathematics.",
    contentType: "General Post",
    targetAudience: "International Audience",
    tag: "Potential Stereotype",
  },
];