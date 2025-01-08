import { appRoutes } from '@/config/routes.config';
import { redirect } from 'next/navigation';

export default function IndexPage() {
  return redirect(appRoutes.DASHBOARD);
}
