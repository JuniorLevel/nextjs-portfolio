import { CircularProgress } from '@mui/material';

type Props = { height?: number };

export default function Loader({ height = 300 }: Readonly<Props>) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: `${height}px`,
      }}
    >
      <CircularProgress color='secondary' />
    </div>
  );
}
