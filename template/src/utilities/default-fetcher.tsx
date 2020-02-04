export const DefaultFetcher = (
  input: RequestInfo,
  init?: RequestInit | undefined
) => fetch(input, init).then(res => res.json());
