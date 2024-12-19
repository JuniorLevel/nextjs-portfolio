import DashboardBlock from '@/components/Dashboard/DashboardBlock/DashboardBlock';
import React from 'react';
import styles from './dashboard.module.scss';
import DashboardCoinsSlider from '@/components/Dashboard/DashboardCoinsSlider/DashboardCoinsSlider';
import { Grid2 as Grid } from '@mui/material';
import DashboardCoinsTable from '@/components/Dashboard/DashboardCoinsTable/DashboardCoinsTable';

export default function DashboardPage() {
  return (
    <section className={styles.container}>
      <Grid container rowSpacing={4}>
        <Grid size={12} container spacing={4} sx={{ height: '290px' }}>
          <Grid size={6}>
            <DashboardBlock>
              <div>Item-1</div>
            </DashboardBlock>
          </Grid>
          <Grid size={6}>
            <DashboardBlock>
              <div>Item-2</div>
            </DashboardBlock>
          </Grid>
        </Grid>
        <Grid size={12}>
          <DashboardCoinsSlider />
        </Grid>
        <Grid size={12} container spacing={4} sx={{ height: '290px' }}>
          <Grid size={{ xl: 5 }}>
            <DashboardBlock>
              <div>Item-1</div>
            </DashboardBlock>
          </Grid>
          <Grid size={{ xl: 3 }}>
            <DashboardBlock>
              <div>Item-2</div>
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
