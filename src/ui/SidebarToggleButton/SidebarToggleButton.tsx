import { MenuOpen } from '@mui/icons-material';
import styles from './sidebar.toggle.button.module.scss';

type Props = {
  onClick: () => void;
};

export default function SidebarToggleButton({ onClick }: Readonly<Props>) {
  return (
    <button className={styles.button} aria-label='Open sidebar menu'>
      <MenuOpen fontSize='large' onClick={onClick} />
    </button>
  );
}
