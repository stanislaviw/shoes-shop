import { useRouter } from "next/router";
import { TermsOfUse } from "./terms-of-use";

enum DocPages {
  TermOfUse = "tos",
}

export const Docs = (): JSX.Element => {
  const router = useRouter();
  const { type } = router.query;

  return <>{DocPages.TermOfUse === type && <TermsOfUse />}</>;
};
