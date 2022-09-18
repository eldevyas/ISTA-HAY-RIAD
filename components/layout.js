import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import dynamic from "next/dynamic"


const ClientNavBar = dynamic(() => import("./layout/navbar"), {
    // Do not import in server side
    ssr: false,
})

export default function Layout({ children }) {
    return (
      <>
        <ClientNavBar />
            <main>{children}</main>
        <Footer />
      </>
    )
}