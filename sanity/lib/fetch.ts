import { createClient } from "next-sanity";

const client = createClient({
  projectId: "bgsp3uks",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true
});

export async function sanityFetch({query, params = {}}: {query : string, params? :any}){
  return await client.fetch(query, params)
}