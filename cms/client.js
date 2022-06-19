import { createClient } from "next-sanity";

export default createClient({
  projectId: "y0nc1gqe",
  dataset: "production",
  apiVersion: "2022-06-16",
  useCdn: false,
});