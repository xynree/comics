import { createClient } from "next-sanity";

export default createClient({
  projectId: process.env.NEXT_PUBLIC_CLIENT_ID,
  dataset: "production",
  apiVersion: "2022-06-16",
  useCdn: false,
});