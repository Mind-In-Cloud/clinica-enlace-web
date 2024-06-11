import { lazy, Suspense } from "preact/compat";

const MobileMenu = lazy(() => import('./MobileMenu.jsx'));
const DesktopMenu = lazy(() => import('./DesktopMenu.jsx'));

import useScreenSize from '@utils/useScreenSize';


const SusMenu = () => {

  const { width } = useScreenSize();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {width <= 768 && <MobileMenu/>}
      {width > 768 && <DesktopMenu/>}
    </Suspense>
  )
}
export default SusMenu
