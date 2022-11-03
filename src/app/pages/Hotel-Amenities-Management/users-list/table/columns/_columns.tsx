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
    Header: (props) => <UserCustomHeader tableProps={props} title='Identify Document' className='xmin-w-125p' />,
    id: 'id',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },

  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Identify Document' className='min-w-125px' />
  //   ),
  //   id: 'id',
  //   Cell: ({...props}) => <Email email={props.data[props.row.index].id} />,
  // },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Hotel Assignable Amenities' className='min-w-125px' />
    ),
    id: 'amenities',
    Cell: ({...props}) => <PhoneNumber phone_number={props.data[props.row.index].amenities} />,
  },


  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Hotel Amenities Icons' className='min-w-125px' />
    ),
    id: 'pid',
    Cell: ({...props}) =>     <Email email={props.data[props.row.index].icons} />,

    //  <i className={`${props.data[props.row.index].icons}`}/>
    
  },


  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Amenities Created At' className='min-w-125px' />
    ),
    id: 'createdAt',
    Cell: ({...props}) => <PhoneNumber phone_number={props.data[props.row.index].createdAt.slice(0,10)} />,
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
