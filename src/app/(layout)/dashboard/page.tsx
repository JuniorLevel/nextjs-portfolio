'use client';

import DashboardBlock from '@/components/Dashboard/DashboardBlock/DashboardBlock';
import DashboardCoinsPieChart from '@/components/Dashboard/DashboardCoinsBarChart/DashboardCoinsBarChart';
import DashboardCoinsExchanges from '@/components/Dashboard/DashboardCoinsExchanges/DashboardCoinsExchanges';
import DashboardCoinsSlider from '@/components/Dashboard/DashboardCoinsSlider/DashboardCoinsSlider';
import DashboardCoinsTable from '@/components/Dashboard/DashboardCoinsTable/DashboardCoinsTable';
import DashboardPreviewChart from '@/components/Dashboard/DashboardPreviewChart/DashboardPreviewChart';
import DashboardPreviewInfo from '@/components/Dashboard/DashboardPreviewInfo/DashboardPreviewInfo';
import { Grid2 as Grid } from '@mui/material';
import BgImage from '../../../../public/preview.webp';
import styles from './dashboard.module.scss';

export default function DashboardPage() {
  return (
    <section className={styles.container}>
      <Grid container rowSpacing={4}>
        <Grid size={12} container spacing={4} sx={{ height: '290px' }}>
          <Grid size={6}>
            <DashboardBlock bgImage={BgImage.src}>
              <DashboardPreviewInfo />
            </DashboardBlock>
          </Grid>
          <Grid size={6}>
            <DashboardBlock>
              <DashboardPreviewChart />
            </DashboardBlock>
          </Grid>
        </Grid>
        <Grid size={12}>
          <DashboardCoinsSlider />
        </Grid>
        <Grid size={12} container spacing={4} sx={{ height: '290px' }}>
          <Grid size={{ xl: 4 }}>
            <DashboardBlock>
              <DashboardCoinsExchanges />
            </DashboardBlock>
          </Grid>
          <Grid size={{ xl: 4 }}>
            <DashboardBlock>
              <DashboardCoinsPieChart />
            </DashboardBlock>
          </Grid>
          <Grid size={{ xl: 4 }}>
            <DashboardBlock>
              <DashboardCoinsTable />
            </DashboardBlock>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
