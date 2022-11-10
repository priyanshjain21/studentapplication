import './Register.css';

function Register() {
  return (
    <div className="main-container">
      <div className="content-container">
        <div className='tab-content'>
          <div className='login'>
            <span className='page-header'> 
              <span> Registration </span>
            </span>
            <form>
                <div className='input-field-container'>
                    <span className='radio-field'>
                        <label>
                            <input type="radio" />
                            Teacher
                        </label>
                    </span>
                    <span>
                        <label>
                            <input type="radio" />
                            Student
                        </label>
                    </span>
                </div>
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
              <div className='input-field-password-container'>
              <span>
                  <label>Confirm Password</label>
                  <span className='input-field-wrapper'>
                  <input type="password" className="input-control"/>
                  </span>
                </span>
              </div>
            </form>
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

export default Register;
