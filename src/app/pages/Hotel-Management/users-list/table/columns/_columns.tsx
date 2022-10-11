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
    Header: (props) => <UserCustomHeader tableProps={props} title='Hotel Title' className='xmin-w-125p' />,
    id: 'image',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Features' className='min-w-125px' />
    ),
    id: 'features',
    Cell: ({...props}) => <Email email={props.data[props.row.index].features} />,
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title=' Location ' className='min-w-125px' />
    ),
    id: 'location',
    Cell: ({...props}) => <PhoneNumber phone_number={props.data[props.row.index].location} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Price' className='min-w-125px' />
    ),
    id: 'price',
    Cell: ({...props}) => <PhoneNumber phone_number={props.data[props.row.index].price} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Hotel Description' className='min-w-125px' />
    ),
    id: 'description_title',
    Cell: ({...props}) => <PhoneNumber phone_number={props.data[props.row.index].description_title} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Hotel Contact Details' className='min-w-125px' />
    ),
    id: 'phone',
    Cell: ({...props}) => <PhoneNumber phone_number={props.data[props.row.index].phone} />,
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
