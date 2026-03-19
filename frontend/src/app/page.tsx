import dynamic from 'next/dynamic';
import { getImageUrl } from '@/utils/imageUtils';

const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <div className="h-screen bg-terra-900 animate-pulse" />,
  ssr: false
});

// Mock data para mostrar mientras resolvemos la conexión
const mockProjects = [
  { id: 1, attributes: { title: "Proyecto Industrial", description: "Construcción de planta manufacturera", category: "Industrial", location: "Texas" } },
  { id: 2, attributes: { title: "Centro Comercial", description: "Desarrollo comercial moderno", category: "Comercial", location: "Houston" } },
  { id: 3, attributes: { title: "Hospital Regional", description: "Centro médico de última generación", category: "Salud", location: "Austin" } },
  { id: 4, attributes: { title: "Planta Energética", description: "Facilidad de energía renovable", category: "Energía", location: "Dallas" } },
  { id: 5, attributes: { title: "Complejo Educativo", description: "Campus universitario moderno", category: "Educación", location: "San Antonio" } },
];

const mockServices = [
  { id: 1, attributes: { title: "Construcción General", description: "Gestión integral de proyectos desde planificación hasta entrega" } },
  { id: 2, attributes: { title: "Diseño-Construcción", description: "Soluciones integradas de diseño y construcción" } },
  { id: 3, attributes: { title: "Gestión de Proyectos", description: "Administración experta de proyectos complejos" } },
  { id: 4, attributes: { title: "Consultoría", description: "Asesoramiento especializado en construcción" } },
  { id: 5, attributes: { title: "Mantenimiento", description: "Servicios de mantenimiento y operación" } },
];

const mockPerspectives = [
  { id: 1, attributes: { title: "Innovación en Construcción Sostenible", category: "Sostenibilidad", readingTime: 5 } },
  { id: 2, attributes: { title: "Tecnología y Digitalización", category: "Tecnología", readingTime: 7 } },
  { id: 3, attributes: { title: "Seguridad en Obras", category: "Seguridad", readingTime: 4 } },
  { id: 4, attributes: { title: "Futuro de la Construcción", category: "Innovación", readingTime: 6 } },
];

export default function HomePage() {
  const projects = mockProjects;
  const services = mockServices;
  const perspectives = mockPerspectives;

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* "NOS ENCANTA CONSTRUIR" - ABOUT SECTION */}
      <section id="about" className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal-left">
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-terra-600 mb-6 px-4 py-2 bg-terra-600/10 rounded-full">
              Sobre Terra
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-terra-900 leading-[1.1] mb-8">
              UN SOCIO COLABORATIVO<br/>
              <span className="text-terra-600">DE CONFIANZA</span><br/>
              ENFOCADO EN SUS METAS
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Desde nuestros enfoques de seguridad y calidad líderes en la industria, hasta nuestra pasión por la entrega progresiva, la innovación y la tecnología, brindamos garantía centrándonos en lo que le importa a usted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-ripple inline-block bg-terra-600 hover:bg-terra-700 transition-colors px-8 py-3 text-sm font-bold uppercase tracking-[2px] rounded">
                Ver Proyectos
              </a>
              <a href="#contact" className="btn-ripple inline-block border-2 border-terra-600 text-terra-600 hover:bg-terra-600 hover:text-white transition-all px-8 py-3 text-sm font-bold uppercase tracking-[2px] rounded">
                Contáctanos
              </a>
            </div>
          </div>
          <div className="reveal-right relative">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
              alt="Equipo de construccion Terra"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-terra-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-black">160+</div>
              <div className="text-sm font-semibold">Años de Excelencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 reveal-scale">
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-terra-600 mb-6 px-4 py-2 bg-terra-600/10 rounded-full">
              Nuestro Trabajo
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-terra-900 leading-[1.1] mb-8">
              HEMOS HECHO UNA COSA<br/>
              <span className="text-terra-600">DURANTE CASI 160 AÑOS:</span><br/>
              CONSTRUIR
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Armamos equipos de alto desempeño listos para resolver cualquier desafío y lograr tus metas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any, index: number) => (
              <div 
                key={project.id} 
                className={`project-card group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 reveal delay-${(index + 1) * 100}`}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={getImageUrl(project.attributes.image, 'projects', index)}
                    alt={project.attributes.title}
                    className="project-img w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="project-overlay absolute inset-0 bg-gradient-to-t from-terra-900/90 via-terra-900/50 to-transparent"></div>
                  <div className="project-info absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className="inline-block text-xs font-bold uppercase tracking-[2px] text-terra-300 mb-3">
                      {project.attributes.category || 'Construcción'}
                    </span>
                    <h3 className="text-2xl font-black mb-3">
                      {project.attributes.title}
                    </h3>
                    <p className="text-terra-100 mb-4 line-clamp-2">
                      {project.attributes.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-terra-300">
                        {project.attributes.location || 'Estados Unidos'}
                      </span>
                      <button className="text-white hover:text-terra-300 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 reveal-scale">
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-terra-600 mb-6 px-4 py-2 bg-terra-600/10 rounded-full">
              Nuestro Enfoque
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-terra-900 leading-[1.1] mb-8">
              Solución de<br/>
              <span className="text-terra-600">Problemas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enfrentamos los desafíos más complejos con innovación y experiencia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => (
              <div 
                key={service.id} 
                className={`service-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl reveal delay-${(index + 1) * 100}`}
              >
                <div className="service-icon w-16 h-16 bg-terra-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-terra-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-terra-900 mb-4">
                  {service.attributes.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.attributes.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section id="community" className="relative py-24 lg:py-32 bg-terra-900 text-white overflow-hidden">
        <div className="parallax-bg absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Comunidad Terra"
            className="w-full h-[120%] object-cover opacity-30"
            style={{ marginTop: '-15%' }}
            loading="lazy"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="reveal-scale">
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-terra-300 mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              Oficinas
            </span>
            <h2 className="text-4xl lg:text-6xl font-black leading-[1.1] mb-8">
              Constructores<br/>
              <span className="text-terra-300">Nacionales</span>
            </h2>
            <p className="text-xl text-terra-100 max-w-3xl mx-auto mb-12">
              Con presencia en todo el país, llevamos la excelencia en construcción a cada comunidad, creando espacios que inspiran y perduran.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="reveal delay-100">
                <div className="text-4xl font-black text-terra-300 mb-2">15+</div>
                <div className="text-sm font-semibold text-terra-100">Oficinas Principales</div>
              </div>
              <div className="reveal delay-200">
                <div className="text-4xl font-black text-terra-300 mb-2">50+</div>
                <div className="text-sm font-semibold text-terra-100">Proyectos Activos</div>
              </div>
              <div className="reveal delay-300">
                <div className="text-4xl font-black text-terra-300 mb-2">5000+</div>
                <div className="text-sm font-semibold text-terra-100">Profesionales</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSPECTIVES SECTION */}
      <section id="perspectives" className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 reveal-scale">
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-terra-600 mb-6 px-4 py-2 bg-terra-600/10 rounded-full">
              Perspectivas
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-terra-900 leading-[1.1] mb-8">
              Conocimiento e<br/>
              <span className="text-terra-600">Innovación</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compartimos nuestra experiencia y visión del futuro de la construcción
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {perspectives.map((perspective: any, index: number) => (
              <article 
                key={perspective.id} 
                className={`perspective-card bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl reveal delay-${(index + 1) * 100}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={getImageUrl(perspective.attributes.image, 'perspectives', index)}
                    alt={perspective.attributes.title}
                    className="card-img w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-terra-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {perspective.attributes.category || 'Innovación'}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-gray-500 text-sm">
                      {perspective.attributes.readingTime || '5'} min lectura
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-terra-900 mb-4">
                    {perspective.attributes.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {perspective.attributes.excerpt || perspective.attributes.description}
                  </p>
                  <button className="text-terra-600 hover:text-terra-700 font-semibold flex items-center gap-2">
                    Leer más
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS CTA SECTION */}
      <section id="careers" className="relative py-24 lg:py-32 bg-gradient-to-r from-terra-600 to-terra-800 text-white overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="reveal-scale">
            <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-terra-300 mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              Carreras
            </span>
            <h2 className="text-4xl lg:text-6xl font-black leading-[1.1] mb-8">
              #Construyamos<br/>
              <span className="text-terra-300">Juntos</span>
            </h2>
            <p className="text-xl text-terra-100 max-w-3xl mx-auto mb-12">
              Únete a un equipo donde la excelencia, la innovación y el crecimiento personal son parte de nuestra cultura. Construye un futuro impactante con nosotros.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="reveal delay-100">
                <div className="counter text-4xl font-black text-terra-300 mb-2" data-target="5000">0</div>
                <div className="text-sm font-semibold text-terra-100">Profesionales</div>
              </div>
              <div className="reveal delay-200">
                <div className="counter text-4xl font-black text-terra-300 mb-2" data-target="50">0</div>
                <div className="text-sm font-semibold text-terra-100">Oficinas</div>
              </div>
              <div className="reveal delay-300">
                <div className="counter text-4xl font-black text-terra-300 mb-2" data-target="160">0</div>
                <div className="text-sm font-semibold text-terra-100">Años</div>
              </div>
              <div className="reveal delay-400">
                <div className="counter text-4xl font-black text-terra-300 mb-2" data-target="1000">0</div>
                <div className="text-sm font-semibold text-terra-100">Proyectos</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-ripple inline-block bg-white text-terra-900 hover:bg-terra-50 transition-colors px-10 py-4 text-sm font-bold uppercase tracking-[2px] rounded">
                Explorar Carreras
              </a>
              <a href="#contact" className="btn-ripple inline-block border-2 border-white text-white hover:bg-white hover:text-terra-900 transition-all px-10 py-4 text-sm font-bold uppercase tracking-[2px] rounded">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section id="contact" className="py-24 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="reveal-scale">
            <h2 className="text-4xl lg:text-6xl font-black text-terra-900 leading-[1.1] mb-8">
              Listo para<br/>
              <span className="text-terra-600">Construir</span> el Futuro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Hablemos de tu próximo proyecto. Nuestro equipo está listo para transformar tu visión en realidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@terra.com" className="btn-ripple inline-block bg-terra-600 hover:bg-terra-700 transition-colors px-10 py-4 text-sm font-bold uppercase tracking-[2px] rounded">
                Enviar Mensaje
              </a>
              <a href="tel:+1234567890" className="btn-ripple inline-block border-2 border-terra-600 text-terra-600 hover:bg-terra-600 hover:text-white transition-all px-10 py-4 text-sm font-bold uppercase tracking-[2px] rounded">
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-terra-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black mb-6">TERRA</h3>
              <p className="text-terra-100 mb-6 leading-relaxed">
                Más de 160 años construyendo el futuro con excelencia y compromiso.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-terra-400 transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-terra-400 transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-terra-400 transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.281-.073-1.689-.073-4.948 0-3.259.014-3.668.072-4.948.2-4.358 2.618-6.78 6.98-6.98 1.281-.059 1.69-.073 4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Servicios</h4>
              <ul className="space-y-3 text-terra-100">
                <li><a href="#" className="hover:text-white transition-colors">Construcción General</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gestión de Proyectos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Diseño-Construcción</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultoría</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Industrias</h4>
              <ul className="space-y-3 text-terra-100">
                <li><a href="#" className="hover:text-white transition-colors">Industrial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comercial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Institucional</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Infraestructura</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Contacto</h4>
              <ul className="space-y-3 text-terra-100">
                <li><a href="mailto:contact@terra.com" className="hover:text-white transition-colors">contact@terra.com</a></li>
                <li><a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a></li>
                <li className="text-terra-100">Houston, TX</li>
                <li className="text-terra-100">Estados Unidos</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <div className="text-sm text-terra-200 mb-4">
              © 2026 Terra Building Companies. Todos los derechos reservados.
            </div>
            <div className="flex justify-center gap-6 text-sm text-terra-200">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
