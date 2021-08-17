import Layout from "../components/Layout";

export default function _error({ statusCode }) {
    return (
        <Layout>
            <h2>Error {statusCode}</h2>
            <p className="text-center"> No se puede cargar la pagina</p>
        </Layout>
    )
}