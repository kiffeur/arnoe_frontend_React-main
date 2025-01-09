import { FaFacebookF, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaPhoneVolume } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#132676] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="space-y-6">
            <img 
              src="/img/Logo-arnoe.png"
              alt="Arnoe" 
              className="h-32 md:h-40 mb-4"
            />
            <p className="text-white/80">
              Votre partenaire de confiance pour vos déplacements au Cameroun. 
              Service de voiture avec chauffeur professionnel disponible 24/7.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-xl font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-[#FF4D30] transition-colors">À Propos</a></li>
              <li><a href="#services" className="hover:text-[#FF4D30] transition-colors">Services</a></li>
              <li><a href="#fleet" className="hover:text-[#FF4D30] transition-colors">Notre Flotte</a></li>
            </ul>
          </div>

          {/* Régions desservies */}
          <div>
            <h3 className="text-xl font-bold mb-6">Régions Desservies</h3>
            <ul className="space-y-4">
              <li>Littoral</li>
              <li>Centre</li>
              <li>Sud-Ouest</li>
              <li>Nord-Ouest</li>
              <li>Sud</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhoneVolume className="text-xl" />
                <div>
                  <p>+237 699 597 698</p>
                  <p>+237 699 543 001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-xl" />
                <div>
                  <a href="https://wa.me/237699597698" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4D30]">
                    +237 699 597 698
                  </a>
                  <br />
                  <a href="https://wa.me/237699543001" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4D30]">
                    +237 699 543 001
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <HiMail className="text-xl" />
                <a href="mailto:contact@arnoe.cm" className="hover:text-[#FF4D30]">contact@arnoe.cm</a>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/Arnoe Travel Agency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D30] transition-colors"
                >
                  <FaFacebookF className="text-xl" />
                </a>
                <a 
                  href="https://www.youtube.com/@ARNOETRAVELAGENCY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D30] transition-colors"
                >
                  <FaYoutube className="text-xl" />
                </a>
                <a 
                  href="https://www.tiktok.com/@ata.sarl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D30] transition-colors"
                >
                  <FaTiktok className="text-xl" />
                </a>
                <a 
                  href="https://wa.me/237699597698" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D30] transition-colors"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            {new Date().getFullYear()} Arnoe. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
