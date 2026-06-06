import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import StickyMobileCTA from './StickyMobileCTA';

function Layout() {
  return (
    <div className="min-h-screen bg-cream-50 text-ink-900">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default Layout;