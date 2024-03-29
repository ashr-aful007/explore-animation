import './KeyFreamAnimation.css'

function KeyFreamAnimation() {
  return (
    <div className='main-1'>
          <div className='grid grid-cols-4'>
          <div className='animation-1 ml-6'>box-1</div>
          <div className='animation-2'>box-2</div>
          </div>
          <div className='main-2 my-6'>
               <div className='loadingAnimation'>
                    <div className='glass'></div>
                    <div className='animation-box'></div>
               </div>
          </div>
    </div>
  )
}

export default KeyFreamAnimation