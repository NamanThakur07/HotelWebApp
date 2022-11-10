import React, { FC, useEffect, useState } from 'react'
import { Field, ErrorMessage, Formik } from 'formik'
import { GetAmenities } from '../core/_requests';
import { IconPicker } from 'react-fa-icon-picker'


type Props = {
  setFieldValue: any
  values: any
  touched: any
  setFieldError: any
  errors: any
}

const Step1: FC<Props> = ({ setFieldValue, values, touched, setFieldError, errors }) => {
  console.log(touched, 'touched', errors)
  console.log("Values For The Admired Role", values)
  const [selectedRole, setSelectedRole] = useState<any>()
  const [roles, setRoles] = useState<any[]>([])
  const [value, setValue] = useState<any>()


  console.log("Icon Values", value)


  console.log("Roles Here", roles)

  useEffect(() => {
    GetAmenities()
      .then((data) => {
        let newData: any
        newData = data
        console.log("NewData", newData);
        if (values.pid) {
          setSelectedRole(newData.find((x: any) => x.id == values.pid))
        }
        setRoles(newData)
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }, [])




  const onSelect = (e: any) => {
    setSelectedRole(roles.find((x) => x.id == e.target.value))
    setFieldValue('pid', parseInt(e.target.value))
  }

  return (
    <div className='w-100'>
      <div className='d-flex flex-wrap gap-5 mb-10'>
        <div className='fv-row w-100 flex-md-root'>
        <label className='form-label required'>Hotel Assignable Amenities</label>
          <Field name='amenities' className='form-control mb-2' placeholder={'Enter Hotel Amenities'} />
          <div className='text-danger mt-2'>
            <ErrorMessage name='amenities' />
          </div>
        </div>

        <div className='fv-row w-100 flex-md-root'>
          <label className='form-label required'>Hotel Amenities Icons</label>
          <div className="d-flex">
            <IconPicker className="icon-pikerss border-primary" style={{ innerHeight: "10px", innerWidth: "0px", height: '4px!important', width: '43px!important' }} value={value} size={24} color="#000" onChange={(e: any) => setValue(e)} />
            {/* <Field name='icons' className='form-control mb-2 border-0' placeholder={'Enter Amenities Icon'}  value={value}/> */}
            <Field name="icons"  placeholder="icon"/>
          </div>
            <div className='text-danger mt-2'>
              <ErrorMessage name='icons' />
            </div>
        </div>
      </div>
    </div>
  )
}

export { Step1 }
