"use server";
import { Metadata } from "next";
import AromasHeader from "./_components/AromasHeader";
import AromasContent from "./_components/AtomasContent";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fragranceCategoriesAPI, fragrancesAPI } from "@/services/api";

export async function loader() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["fragrances"],
    queryFn: fragrancesAPI.getAll,
  });

  await queryClient.prefetchQuery({
    queryKey: ["fragrancesCategories"],
    queryFn: fragranceCategoriesAPI.getAll,
  });

  return {
    dehydratedState: dehydrate(queryClient),
  };
}

export default async function AromasPage() {
  const { dehydratedState } = await loader();
  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <AromasHeader />
        <AromasContent />
      </HydrationBoundary>
    </>
  );
}
