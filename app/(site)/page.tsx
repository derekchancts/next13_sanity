import { getProjects } from "@/sanity/sanity-utils";
// import { Project } from '@/types/Project';
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const projects = await getProjects();

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <>
      {/* <div className="max-w-5xl mx-auto py-20"> */}
      <div>
        <h1 className="text-7xl font-extrabold">
          Hello I&apos;m{" "}
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Derek
          </span>
        </h1>

        <p className="mt-3 text-xl text-gray-600">
          Please check out my projects below!
        </p>

        <div className="mt-24 font-bold text-gray-700 text-3xl">
          My Projects
        </div>

        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* we are returning the type at "sanity-utils.ts" file under sanity, schemas instead */}
          {/* {projects.map((project: Project) => ( */}
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition ease-in-out duration-300 "
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}
              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
