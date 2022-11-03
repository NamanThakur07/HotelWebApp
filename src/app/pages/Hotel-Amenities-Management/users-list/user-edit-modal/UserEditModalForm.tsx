import {FC, useEffect, useRef, useState} from 'react'
import * as Yup from 'yup'
import {Form, Formik, FormikValues , useFormik} from 'formik'
import {isNotEmpty, KTSVG} from '../../../../../_metronic/helpers'
import {createAccountSchemas, initialRole, Role} from '../core/_models'
import {useListView} from '../core/ListViewProvider'
import {UsersListLoading} from '../components/loading/UsersListLoading'
import {checkEmail, createUser, updateUser} from '../core/_requests'
import {useQueryResponse} from '../core/QueryResponseProvider'
import Swal from 'sweetalert2'
import {StepperComponent} from '../../../../../_metronic/assets/ts/components'
import {Step1} from '../steps/Step1'


type Props = {
  isUserLoading: boolean
  role: Role
}

const UserEditModalForm: FC<Props> = ({role, isUserLoading}) => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()
  const [isSubmitButton, setSubmitButton] = useState(false)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [roleForEdit, setRoleForEdit] = useState<Role>({
    ...role,
    Hotel_Title: role?.Hotels?.Hotel_Title || initialRole?.Hotels?.Hotel_Title,
    image: role.image || initialRole.image,
    features: role.features || initialRole.features,
    country: role.country || initialRole.country,
    location: role.location || initialRole.location,
    price: role.price || initialRole.price,
    rooms:role.rooms || initialRole.rooms,
    event_capacity:role.event_capacity || initialRole.event_capacity,
    description_title:role.description_title || initialRole.description_title,
    short_description:role.short_description || initialRole.short_description,
    hotel_description:role.hotel_description || initialRole.hotel_description,
    map:role.map || initialRole.map,
    address:role.address || initialRole.address,
    hotel_bgimage:role.hotel_bgimage || initialRole.hotel_bgimage,
    background_url:role.background_url || initialRole.background_url,
    content_type:role.content_type || initialRole.content_type,
    hotel_bgvideo:role.hotel_bgvideo || initialRole.hotel_bgvideo,
    phone:role.phone || initialRole.phone,
    email:role.email || initialRole.email,
    hotel_offer:role.hotel_offer || initialRole.hotel_offer,
    status:role.status || initialRole.status,
    lang:role.lang || initialRole.lang


    // admin: role.admin || initialRole.admin,
    // role_id: role.role_id || initialRole.role_id,
    // permissions: role.permissions || initialRole.permissions,
  })



  useEffect(() => {
    if (!stepperRef.current) {
      return
    }
  console.log("Amenities Hotel Data",roleForEdit);


    loadStepper()
  }, [stepperRef])

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = async (values: Role, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      try {
        if (isNotEmpty(values.id)) {
          await updateUser(values)
        } else {
          // console.log("Create User",values);
          await createUser(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        // setSubmitting(true)
        actions.resetForm()
        cancel(true)
        Swal.fire({
          title: 'Success!',
          text: `Coupon ${values.id ? 'Updated' : 'Created'}!`,
          icon: 'success',
          confirmButtonText: 'Okay',
        })
      }
    }
  }



  return (
    <>
      <div
        ref={stepperRef}
        className='stepper stepper-links d-flex flex-column'
        id='kt_create_account_stepper'
      >
        <div className='stepper-nav mb-5'>
          <div className='stepper-item current' data-kt-stepper-element='nav'>
            <h3 className='stepper-title'>Amenity Details</h3>
          </div>
        </div>

        <Formik
          validationSchema={currentSchema}
          initialValues={roleForEdit}
          onSubmit={submitStep}
          validateOnChange={false}
        >
          {({setFieldValue, values, touched, setFieldError, errors}) => (
            <Form className='mx-auto mw-700px w-100 pt-5 pb-10' id='kt_create_account_form'>
              <div className='current' data-kt-stepper-element='content'>
                <Step1
                  setFieldValue={setFieldValue}
                  values={values}
                  touched={touched}
                  setFieldError={setFieldError}
                  errors={errors}
                />
              </div>


              <div className='d-flex flex-stack pt-15'>
                <div className='mr-2'>
                  <button
                    onClick={prevStep}
                    type='button'
                    className='btn btn-lg btn-light-primary me-3'
                      data-kt-stepper-action='previous'
                    >
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr063.svg'
                        className='svg-icon-4 me-1'
                      />
                      Back
                    </button>
                  </div>

                  <div>
                    <button type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                        {!isSubmitButton && 'Continue'}
                      {isSubmitButton && 'Submit'}
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr064.svg'
                        className='svg-icon-3 ms-2 me-0'
                      />
                    </span>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {isUserLoading && <UsersListLoading />}
    </>
  )
}

export {UserEditModalForm}