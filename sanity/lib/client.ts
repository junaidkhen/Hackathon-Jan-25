import { apiVersion, dataset, projectId } from '../env'
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "bgsp3uks",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});