import "../css/Footer.css";

import { pin, email, mobile, gps } from "../assets";
import {
   facebookBlack,
   googleBlack,
   vkBlack,
   youtubeBlack,
   linkedinBlack,
   diggBlack,
   xblack,
} from "../assets";

function Index() {
   return (
      <>
         <footer>
            <div className="logo">
               <div className="head">
                  <h1>Start Your Jorney</h1>
                  <h2>Contact Us</h2>
               </div>
               <div className="logo-img">
                  <img src={pin} alt="" width={50} />
               </div>
               <div className="content">
                  <div className="contact-mail">
                     <img src={email} alt="" />
                     <div className="mail-text">
                        <h1>EMail</h1>
                        <h2>free@address.com</h2>
                        <h2>free@address.com</h2>
                     </div>
                  </div>
                  <div className="contact-us">
                     <img src={mobile} alt="" />
                     <div className="contact-text">
                        <h1>Call Us!</h1>
                        <h2>+123 456 789</h2>
                        <h2>+123 456 789</h2>
                     </div>
                  </div>
                  <div className="contact-add">
                     <img src={gps} alt="" />
                     <div className="add-text">
                        <h1>Address</h1>
                        <h2>123, Main Road City,</h2>
                        <h2>My Country 123456</h2>
                     </div>
                  </div>
               </div>
            </div>
            <div className="social-media-icons">
               <a href="https://www.facebook.com/"><img src={facebookBlack} alt="" /></a>
               <a href="https://www.google.com/"><img src={googleBlack} alt="" /></a>
               <a href="https://vk.com/"><img src={vkBlack} alt="" /></a>
               <a href="https://www.youtube.com/"><img src={youtubeBlack} alt="" /></a>
               <a href="https://www.linkedin.com/"><img src={linkedinBlack} alt="" /></a>
               <a href="https://digg.com/"><img src={diggBlack} alt="" /></a>
               <a href="https://x.com/"><img src={xblack} alt="" /></a>
            </div>
            <div className="designedby">
               <h1>Designed by PSDFreebies.com</h1>
               <h1>Copyright 2020, All Right Reserved</h1>
            </div>
         </footer>
      </>
   );
}
export default Index;
