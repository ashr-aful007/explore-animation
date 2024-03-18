import './ClipPathAnimation.css'

function ClipPathAnimation() {
  return (
    <div className='clipPath-main'>
     <div className='card'>
          <h1 className='text-lg font-bold'>Heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur<br></br> 
             adipisicing elit. Ab commodi hic, 
          </p>
     </div>
     <div>
     <div className="letter-image">
  <div className="animated-mail">
    <div className="back-fold"></div>
    <div className="letter">
      <div className="letter-border"></div>
      <div className="letter-title"></div>
      <div className="letter-context"></div>
      <div className="letter-stamp">
        <div className="letter-stamp-inner"></div>
      </div>
    </div>
    <div className="top-fold"></div>
    <div className="body"></div>
    <div className="left-fold"></div>
  </div>
  <div className="shadow"></div>
</div>
     </div>
    </div>
  )
}

export default ClipPathAnimation