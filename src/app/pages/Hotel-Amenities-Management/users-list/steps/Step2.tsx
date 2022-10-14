import React, {FC, useEffect, useState} from 'react'
import {Field, ErrorMessage} from 'formik'
import {getPermissions, getRoles} from '../core/_requests'

type Props = {
  values: any
  setFieldValue: any
}

const Step2: FC<Props> = ({values, setFieldValue}) => {
  console.log(values,"Values")
  // console.log(setFieldValue,"Field Value Of Hotel Component")
  

  return (
    <div className='w-100'>
    <div className='d-flex flex-wrap gap-5 mb-10'>
      <div className='fv-row w-100 flex-md-root'>
        <label className='form-label required'>Hotel Description Title</label>

        <Field name='description_title' className='form-control mb-2' placeholder={'Enter Hotel Description Title'} />
        <div className='text-danger mt-2'>
          <ErrorMessage name='description_title' />
        </div>
      </div>

      <div className='fv-row w-100 flex-md-root'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'> Hotel Short Description </span>
        </label>

        <Field name='short_description' className='form-control mb-2' placeholder={'Enter Hotel Short Description'} />
        <div className='text-danger mt-2'>
          <ErrorMessage name='short_description' />
        </div>
      </div>
    </div>

    <div className='d-flex flex-wrap gap-5 mb-10'>
      <div className='fv-row w-100 flex-md-root'>
        <label className='fs-6 fw-bold form-label required'>Hotel Main Description</label>

        <Field
          name='hotel_description'
          className='form-control mb-2'
          placeholder={'Enter >Hotel Main Description'}
        />
        <div className='text-danger mt-2'>
            <ErrorMessage name='hotel_description' />
        </div>
   
      </div>

      <div className='fv-row w-100 flex-md-root'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Map Location</span>
        </label>

        <Field
          name='map'
          className='form-control mb-2'
          placeholder={'Enter Hotel Map Location'}
        />

      
        <div className='text-danger mt-2'>
          <ErrorMessage name='map' />
        </div>
      </div>


    </div>

    <div className='d-flex flex-wrap gap-5 mb-10'>
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


    </div>

  </div>
  )
}

export {Step2}
