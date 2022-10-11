import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {PermissionsListWrapper} from './users-list/PermissionList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Hotels Management',
    path: '/hotels',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const CouponManagement = () => {
  return (
    // <Routes>
    //   <Route element={<Outlet />}>
    //     <Route
    //       path='staff'
    //       element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Hotels List</PageTitle>
              <PermissionsListWrapper />
            </>
    //       }
    //     />
    //   </Route>
    //   <Route index element={<Navigate to='/apps/staff-management/staff' />} />
    // </Routes>
  )
}

export default CouponManagement
