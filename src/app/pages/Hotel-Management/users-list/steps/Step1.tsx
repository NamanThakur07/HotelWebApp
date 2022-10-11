import React, {FC, useEffect, useState} from 'react'
import {Field, ErrorMessage, Formik} from 'formik'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import PasswordStrengthBar from 'react-password-strength-bar'
import {checkEmail} from '../core/_requests'
import DatePicker from 'react-datepicker'

type Props = {
  setFieldValue: any
  values: any
  touched: any
  setFieldError: any
  errors: any
}

const Step1: FC<Props> = ({setFieldValue, values, touched, setFieldError, errors}) => {
  console.log(touched, 'touched', errors)
  // const validateEmail = async (value: string) => {
  //   let error
  //   var re = /\S+@\S+\.\S+/
  //   let correct = re.test(value)
  //   if (value != '' && correct && !values.id) {
  //     await checkEmail(value)
  //       .then((data: any) => {
  //         if (data.data == 'Email already exists') {
  //           error = data.data
  //           // setFieldError('email', data.data)
  //         } else {
  //           error = null
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }

  //   return error
  // }

  // const [startDate, setStartDate] = useState();
  const [showPassword, setPasswordShow] = useState(false)

  // const handleCheckInDate = (date) => {
  //   setStartDate(date);
  // };

  return (
    <div className='w-100'>
      <div className='fv-row mb-7'>
        <label className='d-block form-label'>Hotel Image</label>
        <div className='image-input image-input-outline' data-kt-image-input='true'>
          <div className=''>
            <img
              src={
                values?.image?.name
                  ? URL.createObjectURL(values?.image)
                  : values?.image != null
                  ? values?.image
                  : toAbsoluteUrl('/media/svg/avatars/blank.svg')
              }
              alt='avatar'
              className='image-input-wrapper w-125px h-125px'
            />
          </div>
          <label
            className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
            data-kt-image-input-action='change'
            data-bs-toggle='tooltip'
            title='Change avatar'
          >
            <i className='bi bi-pencil-fill fs-7'></i>
            <input
              type='file'
              name='profile_image'
              accept='.png, .jpg, .jpeg'
              onChange={(e: any) => {
                setFieldValue('image', e.currentTarget.files[0])
              }}
            />
            <input type='hidden' name='avatar_remove' />
          </label>
          {values.profile_image !== null && (
            <button
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='remove'
              data-bs-toggle='tooltip'
              title='Remove avatar'
              type='button'
              onClick={() => setFieldValue('image', null)}
            >
              <i className='bi bi-x fs-2'></i>
            </button>
          )}
        </div>
        <div className='form-text'>Allowed file types: png, jpg, jpeg.</div>
      </div>

      <div className='d-flex flex-wrap gap-5 mb-10'>
        <div className='fv-row w-100 flex-md-root'>
          <label className='form-label required'>Hotel Title</label>

          <Field name='Hotel_Title' className='form-control mb-2' placeholder={'Enter Hotel Name'} />
          <div className='text-danger mt-2'>
            <ErrorMessage name='Hotel_Title' />
          </div>
        </div>
        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'> Hotel Features </span>
          </label>

          <Field name='features' className='form-control mb-2' placeholder={'Enter Hotel Features / Ratings / Reviews / Feedbacks'} />
          <div className='text-danger mt-2'>
            <ErrorMessage name='features' />
          </div>
        </div>
      </div>

      <div className='d-flex flex-wrap gap-5 mb-10'>
        <div className='fv-row w-100 flex-md-root'>
          <label className='fs-6 fw-bold form-label required'>Hotel Price</label>

          <Field
            name='price'
            className='form-control mb-2'
            placeholder={'Enter Price Requirement'}
          />
          <div className='text-danger mt-2'>
              <ErrorMessage name='price' />
            </div>
     
        </div>

        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Location</span>
          </label>

          <Field
            name='location'
            className='form-control mb-2'
            placeholder={'Enter Your Required Location'}
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='location' />
          </div>
        </div>
      </div>

      <div className='d-flex flex-wrap gap-5 mb-10'>
        <div className='fv-row w-100 flex-md-root'>
          <label className='fs-6 fw-bold form-label required'>Country</label>
          <Field
            name='country'
            className='form-control mb-2'
            placeholder={'Enter Required Country'}
          />
          <div className='text-danger mt-2'>
              <ErrorMessage name='country' />
            </div>
     
        </div>

        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Rooms Description</span>
          </label>

          <Field
            name='rooms'
            className='form-control mb-2'
            placeholder={'Enter Rooms Description'}
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='rooms' />
          </div>
        </div>
      </div>

{/* 
      <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-15'>
        <Field className='form-check-input' type='checkbox' name='admin' />
        <span className='form-check-label fs-15 fw-bold'>Administrator</span>
      </label> */}
    </div>
  )
}

export {Step1}
