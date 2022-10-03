import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {PhoneNumber} from './PhoneNumber'
import {Admin} from './admin'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {Role} from '../../core/_models'
import {Email} from './Email'

const usersColumns: ReadonlyArray<Column<Role>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Coupon Name' className='xmin-w-125p' />,
    id: 'Coupon_Name',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Details' className='min-w-125px' />
    ),
    id: 'details',
    Cell: ({...props}) => <Email email={props.data[props.row.index].details} />,
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title=' Minimum Order Value ' className='min-w-125px' />
    ),
    id: 'Minimum_Order_value',
    Cell: ({...props}) => <PhoneNumber phone_number={props.data[props.row.index].Minimum_Order_Value} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Coupon Code' className='min-w-125px' />
    ),
    id: 'Coupon_Code',
    Cell: ({...props}) => <PhoneNumber phone_number={props.data[props.row.index].Coupon_Code} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Validity' className='min-w-125px' />
    ),
    id: 'Validity',
    Cell: ({...props}) => <PhoneNumber phone_number={props.data[props.row.index].Validity} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
