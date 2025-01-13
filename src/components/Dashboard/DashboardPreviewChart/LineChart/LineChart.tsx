import { coins } from '@/api/fake.data';
import { DARK_COLORS_CHART } from '@/config/colors.config';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import CustomTooltip from './CustomTooltip/CustomTooltip';

type Props = { data: { result: any[] } };

export default function LinesChart({ data }: Readonly<Props>) {
  const hasAllScores =
    data?.result &&
    !!(
      data?.result[0]?.liquidityScore &&
      data?.result[0]?.volatilityScore &&
      data?.result[0]?.riskScore &&
      data?.result[0]?.marketCapScore
    );

  const currentData = hasAllScores ? data.result : coins.result;

  return (
    <ResponsiveContainer
      width='100%'
      height={185}
      initialDimension={{ width: 890, height: 185 }}
    >
      <LineChart
        data={currentData}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <Tooltip content={<CustomTooltip active payload />} />
        <XAxis dataKey='name' />
        {[
          'liquidityScore',
          'volatilityScore',
          'riskScore',
          'marketCapScore',
        ].map((item, idx) => (
          <Line
            key={idx}
            type='monotone'
            dataKey={item}
            stroke={DARK_COLORS_CHART[idx + 1]}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
