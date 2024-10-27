import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';


const Signup = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [backend, setBackend] = useState('');
    
  const handleInputChange = (e) => {
    console.log(e)
    const { name, value } = e.target;
    if (name === 'name') {
        setName(value);
    } else if (name === 'email') {
        setEmail(value);
    } else if (name === 'username') {
        setUsername(value);
    } else if (name === 'password') {
        setPassword(value);
    }
};

  const handleSelectChange = (e)=>{
    setBackend(e.target.value);
  };

  const onButtonClick = (e) => {
    e.preventDefault();
    console.log("Running environment: " + import.meta.env.MODE);
    // if(backend === "python"){
        console.log(name)
        console.log(email)
        const body = {
            id: 1,
            name : name,
            email : email,
            username: username,
            password: password
        }
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
          };
        axios.post(`${config.apiUrl}/signup`, body, axiosConfig)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })  
    // } else if (backend === 'go') {
    //     console.log(name)
    //     console.log(email)
    //     var body1 = {
    //         name : name,
    //         email : email
    //     }
    //       axios({
    //         method: 'POST',
    //         url: 'http://localhost:8082/signup',
    //         data: body1
            
    //     }).then(res => {
    //         console.log(res)
    //     }).catch(error => {
    //         console.error('Error:', error);
    //       });
    //     console.log('Submit form to Go backend');
    // } else {
    //     // handle form submission for default action
    //     console.log('Submit form to default action');
    // }
  }
    return (
        
            <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-50'>
                <p className='text-5xl font-semibold'>Sign Up Page</p>
                <div className='mt-8'>
                    <div>
                      <label className='text-lg font-medium'>Name</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' type='text' name='name' value={name} onChange={handleInputChange} placeholder='Name' />
                    </div>
                    {/* <div className='input'>
                        <label className='text-lg font-medium'>Email</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' type='email' name='email' value={email} onChange={handleInputChange} placeholder='Email' />
                    </div> */}
                    <div className='input'>
                        <label className='text-lg font-medium'>Email</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' type='email' name='email' value={email} onChange={handleInputChange} placeholder='Email' />
                    </div>
                    <div className='input'>
                        <label className='text-lg font-medium'>Username</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' type='email' name='username' value={username} onChange={handleInputChange} placeholder='Username' />
                    </div>
                    <div className='input'>
                        <label className='text-lg font-medium'>Password</label>
                        <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' type='email' name='password' value={password} onChange={handleInputChange} placeholder='Password' />
                    </div>
                </div>
                <div className="pt-6 ...">
                    <select id='backendSelect' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1' value={backend} onChange={handleSelectChange}>
                        <option value=''>Select Backend</option>
                        <option value='python'>Python</option>
                        <option value='go'>Go</option>
                    </select>
                </div>
                <div className='submit-container' >
                    <div className='mt-8 flex flex-col gap=-y-4'>
                        {/* <button className='active:scale-[.98] active:duration-75 py-3 rounded-xl bg-orange-500 text-white text-lg font-bold' type='submit'>Submit</button> */}
                        <input className={'active:scale-[.98] active:duration-75 py-3 rounded-xl bg-orange-500 text-white text-lg font-bold'} type="button" onClick={onButtonClick} value={'Log in'} />
                    </div>
                </div>
            </div>
        
    );
};

export default Signup;

