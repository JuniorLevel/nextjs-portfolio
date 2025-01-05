import { useState } from 'react';

export const useCalcPaginationPages = (list: any[], countPage: number) => {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const ITEMS_PER_PAGE = countPage;
  const totalPages = Math.ceil(list.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = list.slice(startIndex, endIndex);

  return { currentItems, totalPages, handleChange };
};
