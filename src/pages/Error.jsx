import { Link } from "react-router-dom";
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import "../styles/Error.css"
export default function Error() {
    return (
        <body>
            <header>
                <Banner />
            </header>
            <main className="errorPage">
                <div className="errorText">
                    <p>404</p>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <div>
                    <Link className="indexRedirect" to="/">Retourner sur la page d'accueil</Link>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </body>
    )
}