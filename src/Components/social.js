import foto9 from "../Source/facebook-icon.png"
import foto10 from "../Source/instagram-icon.png"
import foto11 from "../Source/linkedin-icon.png"
import foto12 from "../Source/whatsapp-icon.png"
import foto13 from "../Source/snapchat-icon.png"
export default function Social()
{
    return(
        <section id="social-media">
            <div className="container text-center">
            <p>Find Us On Social Media</p>
            <div className="social-icons" />
            <a href="https://www.facebook.com/"><img src={foto9} alt /></a>
            <a href="https://www.instagram.com/plm.qazplm/"><img src={foto10} alt /></a>
            <a href="https://www.linkedin.com/"><img src={foto11} alt /></a>
            <a href="https://www.whatsapp.com/"><img src={foto12} alt /></a>
            <a href="https://www.snapchat.com/"><img src={foto13} alt /></a>
            </div>
        </section>
    )
}