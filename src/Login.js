import './Login.css';
import Register from "./Register";

function Login() {
  const loginClickHandler=()=>{

  }
  return (
    <div className="main-container">
      <div className="content-container">
        <div className='tab-content'>
          <div className='login'>
            <span className='page-header'> 
              <span> Log In </span>
            </span>
            <form>
              <div className='input-field-container'>
                <span>
                  <label>E-mail</label>
                  <span className='input-field-wrapper'>
                  <input type="text" className="input-control"/>
                  </span>
                </span>

              </div>
              <div className='input-field-password-container'>
              <span>
                  <label>Password</label>
                  <span className='input-field-wrapper'>
                  <input type="password" className="input-control"/>
                  </span>
                </span>
              </div>
              <button className='button' onClick={loginClickHandler}>
                <span> LOG IN </span>
              </button>
            </form>
            <div className='separator'>
              <hr/>
              <span> OR </span>
              <hr/>
            </div>
            <div className='center-content'>
              <span> </span>
            </div>
            <a className="linkBtn center-content" href="/register" data-automation-id="create-account"><span>CREATE ACCOUNT</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
