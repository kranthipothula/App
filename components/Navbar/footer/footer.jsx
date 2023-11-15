import Container from "postcss/lib/container";
import FooterList from "./footerlist";

import { MdFacebook } from 'react-icons/md'; // Correct path for MdFacebook
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'; // Correct path for AiFillTwitterCircle and others



const Footer = () => {
    return (
        <footer className="bg-slate-700 text-slate-200 text-sm- mt-16">
         <Container>
            <div className="flex flex-col md:lex-row justify-between pt-16 pb-8">
        <FooterList>
                    <h3 className="text-base font-bold mb-2">Shope categories</h3>
                    <link href="#">Phones</link>
                    <link href="#">Desktops</link>
                    <link href="#">Watches</link>
                    <link href="#">TV</link>
                    <link href="#">Accessories</link>
        </FooterList>
        <FooterList>
                    <h3 className="text-base font-bold mb-2">Customer service</h3>
                    <link href="#">Contact Us</link>
                    <link href="#">Shipping policy</link>
                    <link href="#">Retuns & Exchanges</link>
                    <link href="#">FAQ</link>
        </FooterList>
        <FooterList>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-base font-bold mb-2">abount Us </h3>
                <p className="mb-2">An About Us page isn't just where you share the story of your brand. 
                                    Its also where you tell your customer what you do for them and how you work to meet their needs in that area. 
                                    It isnt so much “Heres what were about,” but more like “Heres who we are, why we started, and what we can do for you.”</p>
                <p>&copy; {new Date().getFullYear()} Shope Now.All rights reserved</p>
            </div>
        </FooterList>    
        <FooterList>
                <h3 className="text-base font-bold mb-2">Fllow Us</h3>
            <div className="flex gap-2">
                <link href="#">
                <MdFacebook size={24}/></link>
                <link href="#">
                <AiFillTwitterCircle size={24}/></link>
                <link href="#">
                <AiFillInstagram size={24}/></link>
                <link href="#">
                <AiFillYoutube size={24}/></link>
            </div>
        </FooterList>
        </div>
        </Container>
    </footer>);
}
 
export default Footer;