// IMPORTS
// ------------------------------------------------------------
import BaseLayout from 'layouts/BaseLayout'
import DefaultBaseView from 'layouts/BaseLayout/views/DefaultBaseView'
import DashLayout from 'layouts/DashLayout'
import HomeDashView from 'layouts/DashLayout/views/HomeDashView'
import PageDashView from 'layouts/DashLayout/views/PageDashView'
import LandingLayout from 'layouts/LandingLayout'
import DefaultLandingView from 'layouts/LandingLayout/views/DefaultLandingView'
import FourOhFourView from 'layouts/LandingLayout/views/FourOhFourView'
import { Route, Routes } from 'react-router-dom'

// Lazy load example for pages not needed by default (aka authorized only pages)
// const OverviewView = Loadable(lazy(() => import('views/dash/OverviewView')))

// MAIN ROUTE COMPONENT
// ------------------------------------------------------------
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<DefaultLandingView />} />
        <Route path="*" element={<FourOhFourView />} />
      </Route>
      <Route path="/base" element={<BaseLayout />}>
        <Route index element={<DefaultBaseView />} />
        <Route path="*" element={<FourOhFourView />} />
      </Route>
      <Route path="/dash" element={<DashLayout />}>
        <Route index element={<HomeDashView />} />
        <Route path="/dash/alpha" element={<PageDashView />} />
        <Route path="/dash/beta" element={<PageDashView />} />
        <Route path="/dash/gamma" element={<PageDashView />} />
        <Route path="/dash/delta" element={<PageDashView />} />
        <Route path="/dash/epsilon" element={<PageDashView />} />
        <Route path="/dash/zeta" element={<PageDashView />} />
        <Route path="/dash/eta" element={<PageDashView />} />
        <Route path="*" element={<FourOhFourView />} />
      </Route>
    </Routes>
  )
}

// EXPORTS
// ------------------------------------------------------------
export default AppRoutes
