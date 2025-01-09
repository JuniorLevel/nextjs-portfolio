'use client';
import DashboardBlock from '@/components/Dashboard/DashboardBlock/DashboardBlock';
import DashboardCoinsBarChart from '@/components/Dashboard/DashboardCoinsBarChart/DashboardCoinsBarChart';
import DashboardCoinsExchanges from '@/components/Dashboard/DashboardCoinsExchanges/DashboardCoinsExchanges';
import DashboardCoinsSlider from '@/components/Dashboard/DashboardCoinsSlider/DashboardCoinsSlider';
import DashboardCoinsTable from '@/components/Dashboard/DashboardCoinsTable/DashboardCoinsTable';
import DashboardPreviewChart from '@/components/Dashboard/DashboardPreviewChart/DashboardPreviewChart';
import DashboardPreviewInfo from '@/components/Dashboard/DashboardPreviewInfo/DashboardPreviewInfo';
import { Grid2 as Grid } from '@mui/material';
import useSWR from 'swr';
import Loader from 'ui/Loader/Loader';
import BgImage from '../../../public/preview.webp';
import styles from './dashboard.module.scss';

const getCoinsData = async (url: string) => {
  const options: any = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_COINSTATS_API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    // console.error(error);
    // throw error;
  }
};

export default function DashboardPage() {
  const { data, isLoading } = useSWR(
    'https://openapiv1.coinstats.app/coins',
    getCoinsData
  );

  if (isLoading) return <Loader />;

  return (
    <section className={styles.container}>
      <Grid container rowSpacing={4}>
        <Grid size={12} container spacing={4}>
          <Grid size={{ xl: 6, lg: 6, md: 12, sm: 12, xs: 12 }}>
            <DashboardBlock bgImage={BgImage.src}>
              <DashboardPreviewInfo />
            </DashboardBlock>
          </Grid>
          <Grid size={{ xl: 6, lg: 6, md: 12, sm: 12, xs: 12 }}>
            <DashboardBlock>
              <DashboardPreviewChart data={data as any} />
            </DashboardBlock>
          </Grid>
        </Grid>
        <Grid size={12}>{<DashboardCoinsSlider data={data as any} />}</Grid>
        <Grid size={12} container spacing={4}>
          <Grid size={{ xl: 4, lg: 6, md: 12, sm: 12, xs: 12 }}>
            <DashboardBlock>
              <DashboardCoinsExchanges />
            </DashboardBlock>
          </Grid>
          <Grid size={{ xl: 4, lg: 6, md: 12, sm: 12, xs: 12 }}>
            <DashboardBlock>
              <DashboardCoinsTable data={data as any} />
            </DashboardBlock>
          </Grid>
          <Grid size={{ xl: 4, lg: 12, md: 12, sm: 12, xs: 12 }}>
            <DashboardBlock>
              <DashboardCoinsBarChart data={data as any} />
            </DashboardBlock>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
