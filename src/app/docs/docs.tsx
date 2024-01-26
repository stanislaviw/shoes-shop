import { useRouter } from "next/router";
import { TermsOfUse } from "@/app/docs/terms-of-use";
import { Documents } from "@/app/definitions";

export const Docs = (): JSX.Element => {
  const router = useRouter();
  const { type } = router.query;

  return <>{Documents.TermOfUse === type && <TermsOfUse />}</>;
};
