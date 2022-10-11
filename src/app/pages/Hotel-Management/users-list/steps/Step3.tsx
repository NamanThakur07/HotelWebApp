import React, {FC, useEffect, useState} from 'react'
import {Field, ErrorMessage} from 'formik'
import {getPermissions, getRoles} from '../core/_requests'

type Props = {
  values: any
  setFieldValue: any
}

const Step3: FC<Props> = ({values, setFieldValue}) => {
  console.log(values, 'values')
  return (
    <div className='w-100'>
    <div className='d-flex flex-wrap gap-5 mb-10'>
      <div className='fv-row w-100 flex-md-root'>
        <label className='form-label required'>Hotel Background Image</label>

        <Field name='hotel_bgimage' className='form-control mb-2' placeholder={'Enter Hotel Background Image'} />
        <div className='text-danger mt-2'>
          <ErrorMessage name='hotel_bgimage' />
        </div>
      </div>

      <div className='fv-row w-100 flex-md-root'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'> Hotel Background URL </span>
        </label>

        <Field name='background_url' className='form-control mb-2' placeholder={'Enter Hotel Background URL '} />
        <div className='text-danger mt-2'>
          <ErrorMessage name='background_url' />
        </div>
      </div>
    </div>

    <div className='d-flex flex-wrap gap-5 mb-10'>
      <div className='fv-row w-100 flex-md-root'>
        <label className='fs-6 fw-bold form-label required'>Hotel Background Content Type</label>

        <Field
          name='content_type'
          className='form-control mb-2'
          placeholder={'Enter Hotel Background Content Type'}
        />
        <div className='text-danger mt-2'>
            <ErrorMessage name='content_type' />
          </div>
   
      </div>

      <div className='fv-row w-100 flex-md-root'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Hotel Background Video</span>
        </label>

        <Field
          name='hotel_bgvideo'
          className='form-control mb-2'
          placeholder={'Enter Hotel Background Video'}
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='hotel_bgvideo' />
        </div>
      </div>
    </div>
  </div>
  )
}

export {Step3}
