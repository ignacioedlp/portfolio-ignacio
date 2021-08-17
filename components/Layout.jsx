import NavBar from "./NavBar";
import Head from "next/Head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import Footer from "./Footer";

export default function Layout({ children, footer = true }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      window.scrollTo(0, 0);
    }
  }, [router.pathname]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      nProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>
        <meta
          name="description"
          content="Ignacio Cafiero Torrubia, Desarrollador Web Frontend & Backend"
        ></meta>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        ></link>
      </Head>
      <div>
        <NavBar />
        <main className="container py-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}
