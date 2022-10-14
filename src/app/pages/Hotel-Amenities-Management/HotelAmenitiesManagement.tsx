import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {PermissionsListWrapper} from './users-list/PermissionList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Hotel Amenities-Management',
    path: '/hotel_amenities',
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

const HotelAmenitiesManagement = () => {
  return (
    // <Routes>
    //   <Route element={<Outlet />}>
    //     <Route
    //       path='staff'
    //       element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Hotel Amenities-Management</PageTitle>
              <PermissionsListWrapper />
            </>
    //       }
    //     />
    //   </Route>
    //   <Route index element={<Navigate to='/apps/staff-management/staff' />} />
    // </Routes>
  )
}

export default HotelAmenitiesManagement
