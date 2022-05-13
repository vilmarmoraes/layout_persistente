import Conteudo from '../components/Conteudo'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Tolbar from '../components/Tolbar'

export default function Contact() {
  return (
    <section>
      <h2>Layout Example (Contact)</h2>
      <p>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we're returning a
        function, we can have complex nested layouts if desired.
      </p>
    </section>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <div>
      <Tolbar />
      <Layout>
        <Sidebar />
        <Conteudo>{page}</Conteudo>
      </Layout>
    </div>
  )
}