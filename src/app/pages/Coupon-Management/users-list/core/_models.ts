import {ID, Response} from '../../../../../_metronic/helpers'
import * as Yup from 'yup'

export type Role = {
  id?: ID
  Coupon_Name: string
  coupon_thumbnail: string
  details: string,
  Minimum_Order_Value: string
  Applicable_Cards: string
  Validity: any
  Coupon_Code: string
  role_id: any
  permissions: any
}

export type PermissionQueryResponse = Response<Array<Role>>

export const initialRole: Role = {
  id: undefined,
  Coupon_Name: '',
  details: '',
  Minimum_Order_Value: '',
  Applicable_Cards: '',
  Coupon_Code: '',
  Validity: null,
  coupon_thumbnail: '',
  permissions: [],
  role_id: null,
}

const createAccountSchemas = [
  Yup.object({
    Coupon_Name: Yup.string()
      .required('Coupon Name Are required')
      .label('Coupon Name'),
    Coupon_Code:Yup.string()
      .required('Coupon Code Is Required')
      .label('Coupon Code'),
    // coupon_thumbnail:Yup.string()
    //   .required('Coupon Thumbnail Is Required')
    //   .label('Coupon Thumbnail'),
    details: Yup.string()
      .required('Details Are required')
      .label('Details'),
    Minimum_Order_Value: Yup.string()
      .required('Minimum Order Value is required')
      .label('Minimum Order Value'),
    Applicable_Cards: Yup.string()
      .required('Applicable Cards Are required')
      .label('Applicable Cards'),
    Validity:Yup.date()
      .required('Validity Are Required')
      .label('Validity')
    // profile_image: Yup.object().label('profile_image')
  }),
  Yup.object({
    role_id: Yup.string()
      .required('Please select role')
      .label('role'),
  }),
]

export {createAccountSchemas}
