import React, {FC, useEffect, useState} from 'react'
import {Field, ErrorMessage} from 'formik'
import {getPermissions, getRoles} from '../core/_requests'

type Props = {
  values: any
  setFieldValue: any
}

const Step4: FC<Props> = ({values, setFieldValue}) => {
  console.log(values, 'values')
  return (
    <div className='w-100'>
    <div className='d-flex flex-wrap gap-5 mb-10'>
      <div className='fv-row w-100 flex-md-root'>
        <label className='form-label required'>Hotel Contact / Phone Number</label>

        <Field name='phone' className='form-control mb-2' placeholder={'Enter Contact / Phone Number'} />
        <div className='text-danger mt-2'>
          <ErrorMessage name='phone' />
        </div>
      </div>

      <div className='fv-row w-100 flex-md-root'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'> Hotel Email / Gmail Address </span>
        </label>

        <Field name='email' className='form-control mb-2' placeholder={'Enter Hotel Email / Gmail Address'} />
        <div className='text-danger mt-2'>
          <ErrorMessage name='email' />
        </div>
      </div>
    </div>

    <div className='d-flex flex-wrap gap-5 mb-10'>
      <div className='fv-row w-100 flex-md-root'>
        <label className='fs-6 fw-bold form-label required'>Hotel Communication Language</label>

        <Field
          name='lang'
          className='form-control mb-2'
          placeholder={'Enter Hotel Communication Language'}
        />
        <div className='text-danger mt-2'>
            <ErrorMessage name='lang' />
          </div>
   
      </div>

      <div className='fv-row w-100 flex-md-root'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Hotel Event Capacity</span>
        </label>

        <Field
          name='event_capacity'
          className='form-control mb-2'
          placeholder={'Hotel Event Capacity'}
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='event_capacity' />
        </div>
      </div>


    </div>

    {/* <div className='d-flex flex-wrap gap-5 mb-10'>
      <div className='fv-row w-100 flex-md-root'>
        <label className='fs-6 fw-bold form-label required'>Hotel Main Address</label>

        <Field
          name='address'
          className='form-control mb-2'
          placeholder={'Enter Hotel Main Address'}
        />
        <div className='text-danger mt-2'>
            <ErrorMessage name='address' />
          </div>
   
      </div>

      <div className='fv-row w-100 flex-md-root'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Hotel Valid Offers</span>
        </label>

        <Field
          name='hotel_offer'
          className='form-control mb-2'
          placeholder={'Enter Hotel Valid Offers'}
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='hotel_offer' />
        </div>
      </div>


    </div> */}

  </div>

  )
}

export {Step4}
