/* eslint-disable jsx-a11y/anchor-is-valid */
import axios, {AxiosResponse} from 'axios'
import clsx from 'clsx'
import React, {FC, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Dropdown1, ChatInner} from '../../../../_metronic/partials'
import {API_URL} from './ApiUrl'
import {Button} from './Button'
import {SettingsName} from './SettingsName'

const Whatsapp: FC = () => {
  const [values, setValue] = useState<any>({
    sender_id: '',
    key: '',
    dlt_template_id: '',
    campaign_name: '',
    active: '0',
  })

  useEffect(() => {
    getInfo()
  }, [])

  const [errors, setErrors] = useState<any>({
    sender_id: '',
    key: '',
    active: '',
    dlt_template_id: '',
    campaign_name: '',
  })

  const getInfo = async () => {
    await axios
      .get(`${API_URL}/whatsapp`)
      .then((data: AxiosResponse<any>) => {
        if (data.data != null) {
          const newvalues = JSON.parse(data.data.value)
          setValue(newvalues)
        }
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  const onChange = (e: any) => {
    const {name, value} = e.target
    setValue({...values, [name]: value})
    setErrors({...errors, [name]: ''})
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()

    if (values.sender_id == '') {
      setErrors({...errors, sender_id: 'Sender Id is required'})
      return
    }
    if (values.key == '') {
      setErrors({...errors, key: 'Key is required'})
      return
    }

    if (values.active == '') {
      setErrors({...errors, active: 'Active is required'})
      return
    }

    const payload = {
      name: 'whatsapp',
      value: JSON.stringify(values),
      auto_load: 0,
    }
    await axios
      .post(API_URL, payload)
      .then((data: AxiosResponse<any>) => {
        getInfo()
        Swal.fire({
          title: 'Success!',
          text: `Settings Updated!`,
          icon: 'success',
          confirmButtonText: 'Okay',
        })
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  return (
    <div className='d-flex flex-column flex-lg-row'>
      <SettingsName active={'whatsapp'} />
      <div className='flex-lg-row-fluid ms-lg-7 ms-xl-10'>
        <div className='card p-10' id='kt_chat_messenger'>
          <h4>Whatsapp</h4>
          <span className='text-muted'>
            Whatsapp SMS integration is two way messaging, means that your customers will be able to
            reply to the message.
          </span>
          <div className='separator separator-dashed my-5'></div>
          {/* </div> */}
          <form noValidate className='form' onSubmit={onSubmit}>
            <div className='fv-row w-100 mb-10'>
              <label className='required fw-bold fs-6 mb-2'>Sender ID</label>
              <input
                name='sender_id'
                onChange={onChange}
                value={values.sender_id}
                className={clsx('form-control mb-3 mb-lg-0', {
                  'is-invalid': errors.sender_id != '',
                })}
                autoComplete='off'
                placeholder='Enter a sender Id'
              />
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert' className='text-danger'>
                    {errors.sender_id}
                  </span>
                </div>
              </div>
            </div>
            <div className='fv-row w-100 mb-10'>
              <label className='required fw-bold fs-6 mb-2'>
                DLT TEMPLATE ID (Mandatory for Indian Numbers only)
              </label>
              <input
                name='dlt_template_id'
                onChange={onChange}
                value={values.dlt_template_id}
                className={clsx('form-control mb-3 mb-lg-0', {
                  'is-invalid': errors.dlt_template_id != '',
                })}
                autoComplete='off'
                placeholder='Enter a template Id'
              />
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert' className='text-danger'>
                    {errors.dlt_template_id}
                  </span>
                </div>
              </div>
            </div>
            <div className='fv-row w-100 mb-10'>
              <label className='required fw-bold fs-6 mb-2'>Campaign Name</label>
              <input
                name='campaign_name'
                onChange={onChange}
                value={values.campaign_name}
                className={clsx('form-control mb-3 mb-lg-0', {
                  'is-invalid': errors.campaign_name != '',
                })}
                autoComplete='off'
                placeholder='Enter a campaign name'
              />
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert' className='text-danger'>
                    {errors.campaign_name}
                  </span>
                </div>
              </div>
            </div>
            <div className='fv-row w-100 mb-10'>
              <label className='required fw-bold fs-6 mb-2'>Key</label>
              <input
                placeholder='Enter a key'
                name='key'
                onChange={onChange}
                value={values.key}
                className={clsx('form-control mb-3 mb-lg-0', {'is-invalid': errors.key != ''})}
                autoComplete='off'
              />
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert' className='text-danger'>
                    {errors.key}
                  </span>
                </div>
              </div>
            </div>

            <div className='fv-row w-100 mb-10'>
              <label className='required fw-bold fs-6 mb-2'>Active</label>
              <div className='form-check form-check-custom form-check-solid gap-3'>
                <input
                  name='active'
                  onChange={onChange}
                  checked={values.active == '1'}
                  type={'radio'}
                  value='1'
                  id='active_yes'
                  className={clsx('form-check-input mb-3 mb-lg-0')}
                  autoComplete='off'
                />
                <label className='form-check-label' htmlFor='active_yes'>
                  <div className='fw-bolder text-gray-800'>Yes</div>
                </label>
                <input
                  name='active'
                  type={'radio'}
                  onChange={onChange}
                  checked={values.active == '0'}
                  value='0'
                  id='active_no'
                  className={clsx('form-check-input mb-3 mb-lg-0')}
                  autoComplete='off'
                />
                <label className='form-check-label' htmlFor='active_no'>
                  <div className='fw-bolder text-gray-800'>No</div>
                </label>
              </div>
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert' className='text-danger'>
                    {errors.active}
                  </span>
                </div>
              </div>
            </div>
            <Button />
          </form>
        </div>
      </div>
    </div>
  )
}

export {Whatsapp}
