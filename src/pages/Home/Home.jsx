import './Home.css'

function Home() {
  return (
     <div>
      <div className="main grid grid-cols-4">
        <div className='box-1 text-white ml-5'>box-1</div>
        <div className='box-2 text-white'>box-2</div>
        <div className='reveal-box'>
         <div className='box-3 text-white'>box-3</div>
           <h1>Something Cool</h1>
       </div>
        <div className='box-4 text-white'>box-3</div>
      </div>
       <div className='rotate grid grid-cols-4 mt-8'>
          <div className='box-5 text-white ml-5'>box-5</div>
          <div className='box-6 text-white'>box-6</div>
          <div className='box-7 text-white'>box-7</div>
          <div className='box-8 text-white'>box-8</div>
       </div>
       <div className='skew grid grid-cols-4 mt-8'>
          <div className='box-9 text-white ml-5'>box-9</div>
          <div className='box-10 text-white'>box-10</div>
          <div className='box-11 text-white'>box-11</div>
          <div className='box-12 text-white'>box-12</div>
       </div>
     </div>
  )
}

export default Home