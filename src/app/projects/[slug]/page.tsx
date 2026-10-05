import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudy } from "@/components/project/ProjectCaseStudy";

import {
  getProjectContent,
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
      title: "Project",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const project =
    getProjectContent(
      slug,
      "en",
    );

  const title =
    `${project.title} — ${project.overview.type}`;

  const description =
    project.summary;

  return {
    title,
    description,

    alternates: {
      canonical:
        `/projects/${slug}`,
    },

    openGraph: {
      title:
        `${title} | Danilo Escobar`,
      description,
      type: "article",
      url:
        `/projects/${slug}`,
      siteName: "Danilo Escobar",
    },

    twitter: {
      card: "summary",
      title:
        `${title} | Danilo Escobar`,
      description,
    },
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
    <ProjectCaseStudy
      slug={slug}
    />
  );
}
