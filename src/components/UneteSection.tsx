import '../assets/css/unetesection.css'
import '../index.css'
import BtnLink from '../common/BtnLink'
import SliderUnete from './SliderUnete'
const UneteSection = () => {
  return (
    <section className="unete--section">
        <h1 className='h1--big text-outline black--stroke'>únete</h1>
        <p className='p-unete'>Tenemos muchas formas para involucrarnos en la oración ininterrumpida, la misión y la justicia</p>
        <div className="unete--options">
            <BtnLink text='Ora' />
            <BtnLink text='Ve' />
            <BtnLink text='Hazlo' />
        </div>
        <SliderUnete />
    </section>
  )
}
export default UneteSection
