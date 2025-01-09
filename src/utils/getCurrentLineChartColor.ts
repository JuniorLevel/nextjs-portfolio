import { DARK_COLORS_CHART, LIGHT_COLORS_CHART } from '@/config/colors.config';
import { darkTheme } from '@/context/ThemeProvider/ThemeProvider';

type ColorsChart = Record<number, string>;

export const getCurrentLineChartColor = (colorId: number) => {
  const currentTheme = document.body.getAttribute('data-app-theme');
  const darkColors = DARK_COLORS_CHART as ColorsChart;
  const lightColors = LIGHT_COLORS_CHART as ColorsChart;
  if (currentTheme === darkTheme) return darkColors[colorId];
  else return lightColors[colorId];
};
