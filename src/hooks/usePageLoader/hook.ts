import { Reducer, useCallback, useReducer, useState } from "react";
import type { Connection, Cursor, PageInfo } from "types";
// import type { Action, State } from "./types";
// import reducer from "./reducer";
import initializer, { InitArgs } from "./initializer";
// import Operations from "./operations.enum";

export default function usePageLoader<T, U extends Connection<any>>({
  data,
  map,
}: InitArgs<T, U>) {
  const [loaded, setLoaded] = useState<T[]>(data ? map(data) : []);
  const [pageInfo, setPageInfo] = useState<PageInfo | undefined>(
    data?.pageInfo
  );
  const [batches, setBatches] = useState<U[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);

  const next = useCallback(() => {
    const nextBatch = batches.shift();

    if (nextBatch && hasNextPage) {
      const data = map(nextBatch) ?? nextBatch;

      setLoaded(prev => prev.concat(data));
      setPageInfo(nextBatch.pageInfo);
      setHasNextPage(nextBatch.pageInfo.hasNextPage);
      setBatches(prev => {
        prev.shift();
        return prev;
      });
    }
  }, [batches, setLoaded, setPageInfo, setHasNextPage, hasNextPage, map]);

  return {
    cursor: pageInfo?.endCursor,
    setBatches,
    data: loaded,
    next,
    hasNextPage,
  };
}
