import {ID, Response} from '../../../../../_metronic/helpers'
import * as Yup from 'yup'

export type Role = {
  id?: ID
  Hotel_Title: string
  image: string
  features: string,
  country:string,
  rooms:string,
  price: string
  location: string
  event_capacity:string,
  description_title: string,
  short_description: string,
  hotel_description: string,
  map:string,
  address:string,
  hotel_bgimage:string,
  background_url:string,
  content_type:any,
  hotel_bgvideo:any,
  phone:string,
  email:string,
  hotel_offer:any,
  status:any,
  lang:string,
  amenities:any,
  Hotels:any,
  icons:any
  // role_id: any
  // permissions: any
}

export type PermissionQueryResponse = Response<Array<Role>>

export const initialRole: Role = {
  id: undefined,
  Hotel_Title: '',
  image: '',
  features: '',
  price: '',
  location: '',
  country:'',
  rooms:'',
  description_title: '',
  short_description: '',
  hotel_description:'',
  map:'',
  address:'',
  hotel_bgimage:'',
  background_url:'',
  content_type:'',
  hotel_bgvideo:'',
  phone:'',
  email:'',
  hotel_offer:'',
  status:'',
  lang:'',
  event_capacity:'',
  amenities:'',
  Hotels:'',
  icons:''

  // permissions: [],
  // role_id: null,
}

const createAccountSchemas = [
  Yup.object({
    amenities: Yup.string()
      .required('Hotel Amenity Is required')
      .label('Hotel Amenity'),
    icons: Yup.string()
    .required('Amenity Icon Is required')
    .label('Amenity Icon'),
    // features:Yup.string()
    //   .required('Hotel Features Is Required')
    //   .label('Hotel Features'),
    // country: Yup.string()
    // .required('Country Are required')
    // .label('Hotel country'),
    // rooms: Yup.string()
    // .required('Rooms Are required')
    // .label('Hotel rooms'),
    // location: Yup.string()
    //   .required('Location Are required')
    //   .label('Hotel Location'),
    // price: Yup.string()
    //   .required(' Price is required')
    //   .label('Hotel Price'),
    // description_title: Yup.string()
    //   .required('Description Title Are required')
    //   .label('Hotel Description Title'),
    // short_description: Yup.string()
    // .required('Description Title Are required')
    // .label('Hotel Short Title'),
    // hotel_description: Yup.string()
    // .required('Description Title Are required')
    // .label('Hotel Desc_Title'),
    // map: Yup.string()
    // .required('Map Location Are required')
    // .label('Hotel Map'),
    // address: Yup.string()
    // .required('Address Are required')
    // .label('Hotel Address'),
    // hotel_bgimage: Yup.string()
    // .required('Hotel Background Image Are required')
    // .label('Hotel hotel_bgimage'),
    // background_url: Yup.string()
    // .required('Background URL Are required')
    // .label('Hotel background_url'),
    // content_type: Yup.string()
    // .required('Content Type Are required')
    // .label('Hotel Content Type'),
    // hotel_bgvideo: Yup.string()
    // .required('Hotel Background Video Are required')
    // .label('Hotel background_url'),
    // phone: Yup.string()
    // .required('Phone Number Are required')
    // .label('Hotel phone'),
    // email: Yup.string()
    // .required('Email Are required')
    // .label('Hotel email'),
    // hotel_offer: Yup.string()
    // .required('Hotel Offers Are required')
    // .label('Hotel hotel_offer'),
    // status: Yup.string()
    // .required('Status Are required')
    // .label('Hotel status'),
    // lang: Yup.string()
    // .required('Languages Are required')
    // .label('Hotel lang'),
    // event_capacity: Yup.string()
    // .required('Event Capacity Are required')
    // .label('Hotel event_capacity'),
    // profile_image: Yup.object().label('profile_image')
  }),
  Yup.object({
    // role_id: Yup.string()
    //   .required('Please select role')
    //   .label('role'),
  }),
]

export {createAccountSchemas}
