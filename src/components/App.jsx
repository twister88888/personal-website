import React, { Component } from 'react';
import '../static/css/style.css';
import '../static/css/app.css';
import '../static/css/font.css';
import Header from './Header';
import Edge from './Edge';
import SectionTitle from './SectionTitle';
import List from './List';
import Rating from './Rating';
import Position from './Position';
import Course from './Course';
import Project from './Project';
import SectionSubTitle from './SectionSubTitle';
import Category from './Category';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          id: 'id-1',
          name: 'Papandalus',
          type: 'Wordpress',
          path: 'papandalus.jpg',
          path_preview: 'papandalus.png'
        },
        {
          id: 'id-2',
          name: 'Easyworking',
          type: 'Wordpress',
          path: 'easy.jpg',
          path_preview: 'easy.png'
        },
        {
          id: 'id-3',
          name: 'Artealca',
          type: 'Animation',
          path: 'artealca.jpg',
          path_preview: 'artealca.png'
        },
        {
          id: 'id-4',
          name: 'Csimpe',
          type: 'WebDesign',
          path: 'csimpe.jpg',
          path_preview: 'csimpe.png'
        },
        {
          id: 'id-5',
          name: 'Ecjidiomas',
          type: 'WebDesign',
          path: 'ecj.jpg',
          path_preview: 'ecj.jpg'
        },
        {
          id: 'id-6',
          name: 'Miguel Ferrera',
          type: 'Animation',
          path: 'miguel.jpg',
          path_preview: 'miguel.jpg'
        },
        {
          id: 'id-7',
          name: 'Aseygen',
          type: 'WebDesign',
          path: 'aseygen.jpg',
          path_preview: 'aseygen.jpg'
        },
        {
          id: 'id-8',
          name: 'Club Padel Cantillana',
          type: 'WebDesign',
          path: 'cpc.jpg',
          path_preview: 'cpc.jpg'
        },
        {
          id: 'id-9',
          name: 'MlPadel',
          type: 'WebDesign',
          path: 'mlpadel.jpg',
          path_preview: 'mlpadel.jpg'
        }
      ],
      courses: [
        {
          name: 'Curso React JS - 30h - escuelaIT',
          date: '2016'
        },
        {
          name: 'Curso GIT - 10h - escuelaIT',
          date: '2015'
        },
        {
          name: 'Curso SEO - 20h - escuelaIT',
          date: '2014'
        },
        {
          name: 'Taller CSS Avanzado - 8h - escuelaIT',
          date: '2014'
        },
        {
          name: 'Curso 320andUp & LESS - 5h - escuelaIT',
          date: '2013'
        },
        {
          name: 'Responsive Web Design - 20h - escuelaIT',
          date: '2013'
        },
        {
          name: 'Analista Programador Java - Cibernos - 434h',
          date: '2010'
        }
      ]
    }
  }
  render() {
    return (
      <div id='wrapper' className='clearfix' itemScope='' itemType='http://data-vocabulary.org/Person'>
        <Header />
        <main className='page js-page clearfix' role='main'>
        {/*<section className='tabsContainer clearfix'>*/}
          <Edge />
          {/*quitar innerBg*/}
          <div className='content'>
            <article className='about js-about clearfix' id='about'>
              <section className='about__info clearfix'>
                <SectionTitle>/ Sobre mí</SectionTitle>
                <p>Me llamo Juan Manuel Ortiz y soy programador web de Sevilla.
                Soy freelance de sitios web, trabajo de calidad y profesional para crear tu página web o incorporar a tu proyecto como webmaster.</p>
                <ul className='about__info-list'>
                  <List label='Nombre' value='Juanma Ortiz'/>
                  <List label='Email' value='info@jmprogramadorweb.es' />
                </ul>
                <ul className='about__info-list'>
                  <List label='Linkedin' value='Ver perfil' />
                  <List label='Teléfono' value='605 230 463' />
                </ul>
              </section>
              <section className='about__skills clearfix'>
                <div className='about__skill'>
                  <SectionTitle>/ Mis habilidades</SectionTitle>
                  <ul className='about__list'>
                    <Rating name='HTML5-CSS3' value='about__rating--r1 r1' />
                    <Rating name='PHP' value='about__rating--r3 r3' />
                    <Rating name='JavaScript' value='about__rating--r3 r3' />
                  </ul>
                </div>
                <div className='about__skill'>
                  <SectionTitle>&nbsp;</SectionTitle>
                  <ul className='about__list'>
                    <Rating name='SEO' value='about__rating--r3 r3' />
                    <Rating name='Prestashop' value='about__rating--r4 r4' />
                    <Rating name='Wordpress' value='about__rating--r3 r3' />
                  </ul>
                </div>
              </section>
              <section className='about__experience clearfix'>
                <SectionTitle>/ Experiencia</SectionTitle>
                <Position
                  name='Programador web'
                  afiliation='Grupo Cortefiel'
                  date='2015 - Actualmente'
                />
                <ul>
                  <li>Implementar el plan de contenidos en las distintas tiendas: programación, pruebas y despliegue.</li>
                  <li>Apoyo en la codificación html en las comunicaciones de email de las marcas.</li>
                  <li>Coordinación con los Diseñadores web para la puesta en marcha de nuevos elementos creativos y nuevas áreas de contenidos.</li>
                  <li>Coordinación con el Responsable de operaciones, el IT Lead y los Diseñadores web para establecer los procesos de trabajo y la ejecución de cada proyecto, incluidas las fases de prueba y despliegue. </li>
                </ul>
                <br/>
                <Position
                  name='Responsable de tecnología'
                  afiliation='Open Ideas'
                  date='2015'
                />
                <ul>
                  <li>Encargado de la administración y gestión de los proyectos de la empresa.</li>
                  <li>Análisis y especificación de requisitos en los proyectos.</li>
                  <li>Gestión de alojamientos web.</li>
                  <li>Desarrollo de tiendas online con Prestashop.</li>
                  <li>Desarrollo de páginas web con WordPress y Joomla.</li>
                  <li>Desarrollo de páginas a medida en PHP.</li>
                </ul><br/>
                <Position
                  name='Programador Web'
                  afiliation='Natural Pixel'
                  date='2010-2015'
                />
                <ul>
                  <li>Análisis y especificación de requisitos en los proyectos.</li>
                  <li>Desarrollo y maquetación de páginas web.</li>
                  <li>Posicionamiento en buscadores.</li>
                  <li>Gestión de alojamientos web.</li>
                  <li>Desarrollo de tiendas online.</li>
                  <li>Desarrollo y actualización de páginas web en PHP con WordPress y Joomla.</li>
                  <li>Desarrollo de páginas a medida con PHP.</li>
                </ul>
              </section>
              <section className='about__education clearfix'>
                <SectionTitle>/ Formación</SectionTitle>
                <Course
                  name='CF Superior en Administración de Sistemas Informáticos - IES Antonio Machado'
                  date='2007-2009'
                />
              </section>
              <section className='about__education clearfix'>
                <SectionTitle>/ Cursos independientes</SectionTitle>
                {this.state.courses.length > 0 && this.state.courses.map(courses => (
                    <Course key={courses.name} name={courses.name} date={courses.date} />
                ))}
              </section>
            </article>
            <article className='portfolio js-portfolio clearfix' id='portfolio' >
              <SectionTitle>/ Portfolio</SectionTitle>
              <ul className='portfolio_categories filter'>
                <Category class='current all' name='Todo'/>
                <Category class='WebDesign' name='Programación a medida'/>
                <Category class='Animation' name='Tienda virtual'/>
                <Category class='Wordpress' name='Wordpress'/>
              </ul>
              <section className='portfolio__works clearfix'>
                <ul id='items' className='portfolio__list'>
                  {this.state.projects.length > 0 && this.state.projects.map(projects => (
                    <Project
                      key={projects.id}
                      id={projects.id}
                      type={projects.type}
                      name={projects.name}
                      path={projects.path}
                      path_preview={projects.path_preview} />
                  ))}
                </ul>
              </section>
            </article>
            <article className='contact js-contact clearfix' id='contact'>
              <SectionTitle>/ Contacto</SectionTitle>
              <section className='contact__personalinfo'></section>
              <section className='contact__personalinfo clearfix'>
                <SectionSubTitle subtitle='Información de contacto' />
                <ul className='personal'>
                  <List label='Tel' value='605 230 463' />
                  <List label='Skype' value='pending' />
                </ul>
                <ul className='personal'>
                  <List label='Email' value='pending' />
                </ul>
              </section>
              <section className='contact__area clearfix'>
                <SectionSubTitle subtitle='Rellena el formulario y en breve recibirás tu respuesta.' />
                <form className='contact__form contactForm' method='post'>
                  <Input
                    type='text'
                    name='name'
                    placeholder='Tu nombre'
                  />
                  <Input
                    type='email'
                    name='email'
                    placeholder='Tu email'
                  />
                  <Textarea name='message' placeholder='Tu mensaje' />
                  <Button value='Enviar tu mensaje' />
                </form>
              </section>
            </article>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
