
import '../assets/css/comoorar.css'
import '../index.css'
import imgComoorar from '../../public/img/como-orar.webp'
const ComoorarSection = () => {
  return (
    <section className='como--orar--section'>
        <div className="como--orar__text">
            <h1 className="h1--big">Cómo  <br />  <span className="text-outline white--stroke">orar</span> </h1>
            <p>La oración es un poder sobrenatural que puede transformar naciones enteras. Orar es sencillo, es tener disposición para hablar con Dios, para escuchar sus palabras y para obedecer. <br /><br /> Aquí te enseñaremos algunos elementos importantes para que puedas orar y tu vida se transforme, ayudes a tranformar el pais y ademas la oración sea eficiente. </p>    
        </div>
        <div className="como--orar__img">
            <img 
            className='como--orar__img__img'
            src={imgComoorar} 
            alt="" />
            <div className="como--orar__img__text slider2-text">
              <h2>Ayúdame</h2>
              <p> Deja tu voz en la oración Y nosotros te ayudaremos</p>
              <a href="#" className="como--orar__link">Comenzar ahora</a>
            </div>
        </div>
    </section>
  )
}
export default ComoorarSection