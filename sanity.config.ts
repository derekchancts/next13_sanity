import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import project from './sanity/schemas/project-schema';
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "c1o6l00r",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-06-26",
  basePath: "/admin",
  plugins: [deskTool()],
  // schema: { types: [project] }
  schema: { types: schemas },
});

export default config;
