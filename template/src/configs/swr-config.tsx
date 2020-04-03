import { DefaultFetcher } from "utilities/default-fetcher";

export const SWR_CONFIG = {
  refreshInterval: 3000,
  fetcher: DefaultFetcher
  suspense: true,
  errorRetryInterval: 1000
};
