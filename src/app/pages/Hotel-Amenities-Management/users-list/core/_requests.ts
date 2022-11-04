import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../_metronic/helpers'
import {Role, PermissionQueryResponse} from './_models'

// const API_URL = `https://preview.keenthemes.com/theme-api/api`
const API_URL = 'http://localhost:2001'
const API_URL1 = 'http://localhost:3003'
const ROLE_URL = `${API_URL}/staff`

const getUsers = (query: string): Promise<PermissionQueryResponse> => {
  return axios
    .post(`http://localhost:2004/user/All-Hotels-Amenities?${query}`)
    .then((d: AxiosResponse<PermissionQueryResponse>) => d.data)
}

const GetAmenities = () : Promise<PermissionQueryResponse> => {
  return axios
  .get(`http://localhost:2004/user/ `)
  .then((d: AxiosResponse<PermissionQueryResponse>) => d.data)
}

const getRoles = (): Promise<PermissionQueryResponse> => {
  return axios.get(`${ROLE_URL}/roles`).then((d: AxiosResponse<PermissionQueryResponse>) => d.data)
}

const getPermissions = (): Promise<PermissionQueryResponse> => {
  return axios
    .get(`${API_URL1}/role/permissions`)
    .then((d: AxiosResponse<PermissionQueryResponse>) => d.data)
}

const checkEmail = (email: string): Promise<PermissionQueryResponse> => {
  return axios
    .get(`${ROLE_URL}/checkEmail?email=${email}`)
    .then((d: AxiosResponse<PermissionQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<Role | undefined> => {
  return axios
    .get(`http://localhost:2004/user/Get-Hotel-Amenities/${id}`)
    .then((response: AxiosResponse<Response<Role>>) => response.data)
    .then((response: Response<Role>) => response.data)
}

const createUser = (role: Role): Promise<Role | undefined> => {
  const fd = new FormData()
  // const admin: any = role.admin
  fd.append('amenities', role.amenities)
  fd.append('icons',role.icons)
  // fd.append('icons', role.icons)
  // fd.append('features', role.features)
  // fd.append('country', role.country)
  // fd.append('location', role.location)
  // fd.append('price', role.price)
  // fd.append('rooms',role.rooms)
  // fd.append('event_capacity', role.event_capacity)
  // fd.append('description_title', role.description_title)
  // fd.append('short_description', role.short_description)
  // fd.append('hotel_description', role.hotel_description)
  // fd.append('map', role.map)
  // fd.append('address', role.address)
  // fd.append('hotel_bgimage',role.hotel_bgimage)
  // fd.append('content_type', role.content_type)
  // fd.append('hotel_bgvideo', role.hotel_bgvideo)
  // fd.append('phone',role.phone)
  // fd.append('email', role.email)
  // fd.append('hotel_offer', role.hotel_offer)
  // fd.append('status',role.status)
  // fd.append('lang', role.lang)
  // fd.append('profile_image', role.profile_image)
  // fd.append('admin', admin)
  // fd.append('role_id', role.role_id)
  // fd.append('permissions', JSON.stringify(role.permissions))
  console.log("Form Data For Create-Coupon",role);

  return axios
    .post('http://localhost:2004/user/Create-Amenities', role)
    .then((response: AxiosResponse<Response<Role>>) => response.data)
    .then((response: Response<Role>) => response.data)
}

const updateUser = (role: Role): Promise<Role | undefined> => {

  const fd = new FormData()
  // const admin: any = role.admin
  // fd.append('Hotel_Title', role.Hotel_Title)
  // fd.append('image', role.image)
  // fd.append('features', role.features)
  // fd.append('country', role.country)
  // fd.append('location', role.location)
  // fd.append('price', role.price)
  // fd.append('rooms',role.rooms)
  // fd.append('event_capacity', role.event_capacity)
  // fd.append('description_title', role.description_title)
  // fd.append('short_description', role.short_description)
  // fd.append('hotel_description', role.hotel_description)
  // fd.append('map', role.map)
  // fd.append('address', role.address)
  // fd.append('hotel_bgimage',role.hotel_bgimage)
  // fd.append('content_type', role.content_type)
  // fd.append('hotel_bgvideo', role.hotel_bgvideo)
  // fd.append('phone',role.phone)
  // fd.append('email', role.email)
  // fd.append('hotel_offer', role.hotel_offer)
  // fd.append('status',role.status)
  // fd.append('lang', role.lang)

  fd.append('amenities', role.amenities)
  fd.append('icons',role.icons)



  // fd.append('admin', admin)
  // fd.append('role_id', role.role_id)
  // fd.append('permissions', JSON.stringify(role.permissions))

  console.log("Form Data For Update-Amenities",role);
  return axios
    .put(`http://localhost:2004/user/Update-Amenities/${role.id}`, role)
    .then((response: AxiosResponse<Response<Role>>) => response.data)
    .then((response: Response<Role>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`http://localhost:2004/user/Delete-Amenities/${userId}`).then(() => {})
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`http://localhost:2004/user/Delete-Amenities/${id}`))
  return axios.all(requests).then(() => {})
}

export {
  getUsers,
  deleteUser,
  deleteSelectedUsers,
  getUserById,
  createUser,
  updateUser,
  getPermissions,
  getRoles,
  checkEmail,
  GetAmenities
}
