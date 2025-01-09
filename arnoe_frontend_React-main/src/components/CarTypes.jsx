import { FaCarSide, FaCar, FaCarAlt, FaTruck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const CarTypes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleTypeClick = (carType) => {
    navigate('/search', { state: { carType } });
  };

  const carTypes = [
    { 
      id: 1, 
      name: 'Berline', 
      icon: FaCarSide,
      description: 'Confort et élégance',
      color: 'from-blue-500 to-blue-700'
    },
    { 
      id: 2, 
      name: 'SUV 5 places', 
      icon: FaCar,
      description: 'Polyvalence et espace',
      color: 'from-purple-500 to-purple-700'
    },
    { 
      id: 3, 
      name: 'SUV 7 places', 
      icon: FaCarAlt,
      description: 'Idéal pour les groupes',
      color: 'from-green-500 to-green-700'
    },
    { 
      id: 4, 
      name: 'Pickup', 
      icon: FaTruck,
      description: 'Robuste et pratique',
      color: 'from-red-500 to-red-700'
    },
    { 
      id: 5, 
      name: 'Premium', 
      icon: FaCar,
      description: 'Luxe et prestige',
      color: 'from-yellow-500 to-yellow-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#FF4D30] text-sm font-bold mb-4">NOS VÉHICULES</p>
          <h2 className="text-4xl font-bold text-[#2d2d2d] mb-4">
            Explorez Notre Flotte
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de véhicules adaptés à tous vos besoins, du confort à la performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {carTypes.map((type) => (
            <div 
              key={type.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
              onClick={() => handleTypeClick(type.name)}
              data-aos="fade-up"
              data-aos-delay={type.id * 100}
            >
              <div className={`bg-gradient-to-br ${type.color} p-8 h-full`}>
                <div className="relative z-10 flex flex-col items-center text-center text-white">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="text-6xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{type.name}</h3>
                  <p className="text-white/90">{type.description}</p>
                  
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                      Découvrir
                    </button>
                  </div>
                </div>
                
                {/* Élément décoratif */}
                <div className="absolute -right-8 -bottom-8 opacity-10 transform group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="text-9xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarTypes;
