import '../assets/css/blogsection.css'
import BlogSectionCom from '../common/BlogSectionCom'
import BlogSectionDown from '../common/BlogSectionDown'
const BlogSection = () => {
  return (
    <section className="blog--section">
        <h1 className="h1--big color--black"><span className="text-outline black--stroke"> Lo más</span>  reciente</h1>
        <p>Las últimas historias, blogs y artículos de actualidad seleccionados y escritos por colaboradores y amigos de 24-7...</p>
        <div className="blog--section__line">
            <BlogSectionCom
            category='Blog'
            title='Colombia Discierne y Ora'
            link='/Blog'
            image='../../public/img/image-2.jpg'
            lec={5}/>

            <BlogSectionCom
            category='Oración'
            title='Colombia Discierne y Ora'
            link='/Blog'
            image='../../public/img/image-2.jpg'
            lec={5}/>

            <BlogSectionCom
            category='Noticia'
            title='Colombia Discierne y Ora'
            link='/Blog'
            image='../../public/img/image.jpg'
            lec={5}/>
        </div>
        <BlogSectionDown /> 
    </section>
  )
}
export default BlogSection