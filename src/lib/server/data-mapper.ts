import type { CafeCactusData } from "$lib/model/cafe-cactus-data-model";
import type { DocumentData } from "firebase/firestore";

export function mapDocDataToCafeCactusData(docData: DocumentData): CafeCactusData {
  return {
    headerImage: docData.headerImages ?? null,
  };
}
