import React from 'react'
import './page_styles/signup.css';  

class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          subject: 'React',
          firstname: '',
          lastname: '',
          email: '',
        };

  
    //   this.handleChange = this.handleSubjectChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubjectChange= event =>{
      this.setState({subject: event.target.value});
    }

    handleFirstNameChange = event => {
        this.setState({firstname : event.target.value})
    }

    handleLastNameChange = event => {
        this.setState({lastname : event.target.value})
    }

    handleEmailChange = event => {
        this.setState({email : event.target.value})
    }

    handleSubmit = event => {
        alert(`First Name : ${this.state.firstname} \n Last Name: ${this.state.lastname}\nEmail: ${this.state.email}\n Subject: ${this.state.subject}`)
        event.preventDefault()
    }
   
  
    render() {
      return (
        <div className="register-form">
            <form onSubmit={this.handleSubmit} className = 'registrationform'>
            <h1 className="title">Registration</h1>



            <div class="input-container ic1">
                <input id="firstname" class="input" type="text" placeholder=" " value={this.state.firstname} onChange={this.handleFirstNameChange}/>
                <div class="cut"></div>
                <label for="firstname" class="placeholder">First name</label>
            </div>
            <div class="input-container ic2">
                <input id="lastname" class="input" type="text" placeholder=" " value={this.state.lastname} onChange = {this.handleLastNameChange}/>
                <div class="cut"></div>
                <label for="lastname" class="placeholder">Last name</label>
            </div>

            <div className="input-container ic2">
                <input id="email" className="input" type="text" placeholder=" " value={this.state.email} onChange = {this.handleEmailChange}/>
                <div className="cut cut-short"></div>
                <label for="email" className="placeholder">Email</label>
            </div>
            
          <div className="input-container ic2">
            <select value={this.state.subject} onChange={this.handleSubjectChange} className="input">
              <option value='react'>React</option>
              <option value="Angular">Angular</option>
              <option value="Node Js">Node Js</option>
              <option value="Java">Java</option>
            </select>
          </div>
          <input type="submit" value="Register" className='submit'/>
        </form>
        </div>
      );
    }
  }
 
 export default SignUp

//  <div class="form">
//  <div class="title">Welcome</div>
//  <div class="subtitle">Let's create your account!</div>
//  <div class="input-container ic1">
//    <input id="firstname" class="input" type="text" placeholder=" " />
//    <div class="cut"></div>
//    <label for="firstname" class="placeholder">First name</label>
//  </div>
//  <div class="input-container ic2">
//    <input id="lastname" class="input" type="text" placeholder=" " />
//    <div class="cut"></div>
//    <label for="lastname" class="placeholder">Last name</label>
//  </div>
//  <div class="input-container ic2">
//    <input id="email" class="input" type="text" placeholder=" " />
//    <div class="cut cut-short"></div>
//    <label for="email" class="placeholder">Email</>
//  </div>
//  <button type="text" class="submit">submit</button>
// </div>