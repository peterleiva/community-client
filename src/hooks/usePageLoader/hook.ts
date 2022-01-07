import { Reducer, useCallback, useReducer, useState } from "react";
import type { Connection, PageInfo } from "types";
import type { Action, State } from "./types";
import reducer from "./reducer";
import initializer, { InitArgs } from "./initializer";
import Operations from "./operations.enum";

export default function usePageLoader<T extends Connection<any>, K>({
  cursor: startCursor,
  data = [],
  page,
  map,
}: InitArgs<T> & { page?: PageInfo; map?: (data: T) => K } = {}) {
  const [loaded, setLoaded] = useState<K[]>(map(data));
  const [pageInfo, setPageInfo] = useState<PageInfo | undefined>(page);
  const [batches, setBatches] = useState<T[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);

  const next = useCallback(() => {
    const nextBatch = batches.shift();

    if (nextBatch && hasNextPage) {
      console.log("next", nextBatch, batches);
      const data = map?.(nextBatch) ?? nextBatch;

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
    // clear,
  };
}
