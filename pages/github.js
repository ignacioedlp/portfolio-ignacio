
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import _error from "./_error";

export async function getServerSideProps() {

    const res = await fetch('https://api.github.com/users/ignacioedlp');
    const data = await res.json();

    const statusCode = res.status > 200 ? res.status : false;

    return {
        props: {
            user: data,
            statusCode
        }
    }
}

export default function Github({ user, statusCode }) {

    if (statusCode) {
        return <_error statusCode={statusCode} />;
    }

    return (
        <Layout>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h2>
                            {user.login}
                        </h2>
                        <img src={user.avatar_url} />
                        <p>{user.bio}</p>
                        <a href={user.html_url} target="_blank" className="btn btn-secondary">Go to Github</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

