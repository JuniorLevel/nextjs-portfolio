import { useMemo, useState } from 'react';

export const useCalcPaginationPages = (list: any[], countPage: number) => {
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = countPage;

  const totalPages = useMemo(() => {
    return Math.ceil(list.length / ITEMS_PER_PAGE);
  }, [list.length, ITEMS_PER_PAGE]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const startIndex = useMemo(() => {
    return (page - 1) * ITEMS_PER_PAGE;
  }, [page, ITEMS_PER_PAGE]);

  const endIndex = useMemo(() => {
    return startIndex + ITEMS_PER_PAGE;
  }, [startIndex, ITEMS_PER_PAGE]);

  const currentItems = useMemo(() => {
    return list.slice(startIndex, endIndex);
  }, [list, startIndex, endIndex]);

  return { currentItems, totalPages, handleChange };
};
