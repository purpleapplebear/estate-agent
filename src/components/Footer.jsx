import './footer.css'
import facebook from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
function Footer() {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <h2>Footer Content</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos inventore ab iusto totam unde impedit temporibus, aspernatur qui, nostrum itaque fugiat. Doloribus dolorem eligendi minima magni! Odio est quasi ipsa.</p>
                </div>
                <div className="footer-content">
                    <h2>Links</h2>
                    <ul>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h2>Socials</h2>
                    <img src={facebook} />
                    <img src={insta} />
                    {/* <img src="/src/assets/twitter.png" />   */}
                    <img src={whatsapp} />
                </div>

            </div>

        </footer>
    )

}

export default Footer