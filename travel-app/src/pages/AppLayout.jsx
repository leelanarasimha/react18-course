import AppNav from '../components/AppNav';
import PageNav from '../components/PageNav';

export default function AppLayout() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <div>App Layout</div>
    </div>
  );
}
