import {FC} from 'react'
import FontAwesome from 'react-fontawesome'

type Props = {
  email?: any
}

const Email: FC<Props> = ({email}) => (

  <div className='d-flex align-items-center'>
      <div className='d-flex flex-column'>
          {email}
          {/* <i className={email}>{email}</i> */}
          {/* <img src="https://th.bing.com/th/id/OIP.U0eJqMMa4V_0H3n3A6TZkwHaEV?pid=ImgDet&rs=1"/> */}
          {/* <FontAwesome name={email} /> */}
      </div>

    </div>
)

export {Email}

