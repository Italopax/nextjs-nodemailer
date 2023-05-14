import React from "react"


export default function index () {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function handleSubmit (e: any) {
    e.preventDefault();
    const data = {
      name,
      email,
      message
    };
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resJson = await response.json();
    console.log(resJson);
  };

  return(
    <div className='min-h-screen w-full flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='bg-slate-300 p-5 rounded flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <label htmlFor="nameId">Name:</label>
          <input id='nameId' className='py-1 px-2 rounded flex-1' type="text" value={name} onChange={({target}) => setName(target.value)} />        
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor="emailId">Email:</label>
          <input id='emailId' className='py-1 px-2 rounded flex-1' type="text" value={email} onChange={({target}) => setEmail(target.value)} />              
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor="messageId">Message:</label>
          <input id='messageId' className='py-1 px-2 rounded flex-1' type="text" value={message} onChange={({target}) => setMessage(target.value)} /> 
        </div>
          <button className='bg-slate-200 py-1 px-2'>Enviar</button>       
      </form>
    </div>
  );
}