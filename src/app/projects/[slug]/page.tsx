import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudy } from "@/components/project/ProjectCaseStudy";

import {
  getProjectNumber,
  isProjectSlug,
  projectSlugs,
} from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isProjectSlug(slug)) {
    return {
      title: "Project — Danilo Escobar",
    };
  }

  return {
    title: `Project ${getProjectNumber(slug)} — Danilo Escobar`,
    description:
      "Technical engineering case study by Danilo Escobar.",
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  if (!isProjectSlug(slug)) {
    notFound();
  }

  return (
    <ProjectCaseStudy slug={slug} />
  );
}