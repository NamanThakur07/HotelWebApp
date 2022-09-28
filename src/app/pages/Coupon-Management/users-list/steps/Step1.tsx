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
  const validateEmail = async (value: string) => {
    let error
    var re = /\S+@\S+\.\S+/
    let correct = re.test(value)
    if (value != '' && correct && !values.id) {
      await checkEmail(value)
        .then((data: any) => {
          if (data.data == 'Email already exists') {
            error = data.data
            // setFieldError('email', data.data)
          } else {
            error = null
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }

    return error
  }

  // const [startDate, setStartDate] = useState();
  const [showPassword, setPasswordShow] = useState(false)

  // const handleCheckInDate = (date) => {
  //   setStartDate(date);
  // };

  return (
    <div className='w-100'>
      <div className='fv-row mb-7'>
        <label className='d-block form-label'>Coupon Thumbnail</label>
        <div className='image-input image-input-outline' data-kt-image-input='true'>
          <div className=''>
            <img
              src={
                values?.profile_image?.name
                  ? URL.createObjectURL(values?.profile_image)
                  : values?.profile_image != null
                  ? values?.profile_image
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
                setFieldValue('profile_image', e.currentTarget.files[0])
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
              onClick={() => setFieldValue('profile_image', null)}
            >
              <i className='bi bi-x fs-2'></i>
            </button>
          )}
        </div>
        <div className='form-text'>Allowed file types: png, jpg, jpeg.</div>
      </div>

      <div className='d-flex flex-wrap gap-5 mb-10'>
        <div className='fv-row w-100 flex-md-root'>
          <label className='form-label required'>Coupon Name</label>

          <Field name='Coupon_Name' className='form-control mb-2' placeholder={'Enter Coupon Name'} />
          <div className='text-danger mt-2'>
            <ErrorMessage name='Coupon_Name' />
          </div>
        </div>
        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'> Details </span>
          </label>

          <Field name='details' className='form-control mb-2' placeholder={'Enter Coupon Details'} />
          <div className='text-danger mt-2'>
            <ErrorMessage name='details' />
          </div>
        </div>
      </div>

      <div className='d-flex flex-wrap gap-5 mb-10'>
        <div className='fv-row w-100 flex-md-root'>
          <label className='fs-6 fw-bold form-label required'>Minimum Order Value</label>

          <Field
            name='Minimum_Order_Value'
            className='form-control mb-2'
            placeholder={'Enter Minimum Order Value'}
          />
          <div className='text-danger mt-2'>
              <ErrorMessage name='Minimum_Order_Value' />
            </div>
     
        </div>

        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Applicable Cards</span>
          </label>

          <Field
            name='Applicable_Cards'
            className='form-control mb-2'
            placeholder={'Enter Applicable Cards'}
          />
          <div className='text-danger mt-2'>
            <ErrorMessage name='Applicable_Cards' />
          </div>
        </div>

        <div className='fv-row w-100 flex-md-root'>
          <label className='d-flex align-items-center form-label'>
            <span className='required'>Coupon Validity</span>
          </label>

          <Field
            name='Validity'
            type='datetime-local'
            className='form-control mb-2'
            placeholder={'Enter Coupon Validity'}
          />

        {/* <DatePicker 
          selected={startDate} 
          onChange={date => handleCheckInDate(date)} /> */}
          <div className='text-danger mt-2'>
            <ErrorMessage name='Validity' />
          </div>
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Coupon Code</span>
        </label>
        <div style={{flexDirection: 'row', display: 'flex'}} className='mb-2 gap-5'>
          <div className='position-relative w-100'>
            <Field
              name='Coupon_Code'
              className='form-control mb-2'
              placeholder={'Enter Coupon Code Or Generate Coupon Code'}
            />
            <button
              type='button'
              onClick={() => setPasswordShow(!showPassword)}
              className='btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2'
              data-kt-password-meter-control='visibility'
            >
             
            </button>
          </div>
          <button
            type='button'
            className='btn btn-lg btn-light-primary w-50 p-0 fs-15'
            onClick={() => {
              setFieldValue(
                'Coupon_Code',
                Math.random()
                  .toString(36)
                  .slice(2)
              )
            }}
          >
            Generate Coupen Code
          </button>
        </div>
        {/* <PasswordStrengthBar password={values?.Coupon_Code} /> */}
        <div className='text-danger'>
          <ErrorMessage name='Coupon_Code' />
        </div>
      </div>

      <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-15'>
        <Field className='form-check-input' type='checkbox' name='admin' />
        <span className='form-check-label fs-15 fw-bold'>Administrator</span>
      </label>
    </div>
  )
}

export {Step1}
