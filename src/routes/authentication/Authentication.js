 import Signup from '../../components/signup/Signup';
import Signin from '../../components/signin/Signin';
import './authentication.scss'
 
const Authentication = () => {
return (
    <div className='authentication-container'>
      <Signin />
      <Signup />
    </div>
  )
}

export default Authentication;
