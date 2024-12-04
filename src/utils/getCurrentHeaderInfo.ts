import { headerInfo, IHeaderInfo } from '../components/Header/header.info';

export const getCurrentHeaderInfo = (path: string): IHeaderInfo | undefined =>
  headerInfo.find((item) => item.path === path) || undefined;
