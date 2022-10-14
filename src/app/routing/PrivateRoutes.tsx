import {lazy, FC, Suspense, PropsWithChildren} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
// import CouponManagement from '../pages/Coupon-Management/CouponManagement'

const PrivateRoutes = () => {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  // const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const StaffPage = lazy(() => import('../pages/staff-management/StaffPage'))
  const PermissionPage = lazy(() => import('../pages/permissions/PermissionPage'))
  const RolesPage = lazy(() => import('../pages/role-management/RolesPage'))
  const UsersPage = lazy(() => import('../pages/user-management/UsersPage'))
  const SettingPage = lazy(() => import('../pages/settings/SettingPage'))
  const CouponManagement = lazy(() => import('../pages/Coupon-Management/CouponManagement'))
  const HotelManagement = lazy(() => import('../pages/Hotel-Management/HotelManagement'))
  const HotelAmenitiesManagement = lazy(() => import('../pages/Hotel-Amenities-Management/HotelAmenitiesManagement'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        {/* <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        /> */}
        {/* <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        /> */}
        <Route
          path='staff'
          element={
            <SuspensedView>
              <StaffPage />
            </SuspensedView>
          }
        />
         <Route
          path='coupon'
          element={
            <SuspensedView>
              <CouponManagement />
            </SuspensedView>
          }
        />
         <Route
          path='hotels'
          element={
            <SuspensedView>
              <HotelManagement />
            </SuspensedView>
          }
        />
        <Route
          path='hotel_amenities'
          element={
            <SuspensedView>
              <HotelAmenitiesManagement />
            </SuspensedView>
          }
        />
        <Route
          path='users'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        <Route
          path='permissions'
          element={
            <SuspensedView>
              <PermissionPage />
            </SuspensedView>
          }
        />
        <Route
          path='roles'
          element={
            <SuspensedView>
              <RolesPage />
            </SuspensedView>
          }
        />
        <Route
          path='settings/*'
          element={
            <SuspensedView>
              <SettingPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

interface HeaderProps {
  children: any;
}


const SuspensedView: FC<PropsWithChildren<HeaderProps>> = ({children}:any) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
