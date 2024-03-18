import './AnimationWith.css'

function AnimationWithJs() {
     const name = 'bangladesh';

     const nameArr = name.split('');
  return (
     <div>
              <div className='js-main'>
          <div className='container'>
               {
                    nameArr.map((item, i) =>(<span className='alphabet'
                    style={{transitionDelay: `${i * 10}ms`}}
                     key={i}>{item}</span>))
               }
          </div>
    </div>
     </div>
  )
}

export default AnimationWithJs