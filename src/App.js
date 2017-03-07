import React, { Component } from 'react';
import './static/css/style.css';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Edge from './components/Edge';
import SectionTitle from './components/SectionTitle';
import List from './components/List';
import Rating from './components/Rating';
import Position from './components/Position';
import Course from './components/Course';
import Project from './components/Project';
import SectionSubTitle from './components/SectionSubTitle';
import Category from './components/Category';
import Input from './components/Input';
import Textarea from './components/Textarea';
import Button from './components/Button';


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
        <section className='tabsContainer clearfix'>
          <Edge />
          <div className='innerBg'>
            <article id='about' className='clearfix'>
              <Section name='introduction'>
                <SectionTitle>/ Sobre mí</SectionTitle>
                <p>Me llamo Juan Manuel Ortiz y soy programador web de Sevilla.
                Soy freelance de sitios web, trabajo de calidad y profesional para crear tu página web o incorporar a tu proyecto como webmaster.</p>
                <ul className='info'>
                  <List label='Nombre' value='Juanma Ortiz'/>
                  <List label='Email' value='info@jmprogramadorweb.es' />
                </ul>
                <ul className='info'>
                  <List label='Linkedin' value='Ver perfil' />
                  <List label='Teléfono' value='605 230 463' />
                </ul>
              </Section>
              <Section name='skills'>
                <div id='skills1'>
                  <SectionTitle>/ Mis habilidades</SectionTitle>
                  <ul id='graphics'>
                    <Rating name='HTML5-CSS3' value='r1' />
                    <Rating name='PHP' value='r3' />
                    <Rating name='JavaScript' value='r3' />
                  </ul>
                </div>
                <div id='skills2'>
                  <SectionTitle>&nbsp;</SectionTitle>
                  <ul id='programming'>
                    <Rating name='SEO' value='r3' />
                    <Rating name='Prestashop' value='r4' />
                    <Rating name='Wordpress' value='r3' />
                  </ul>
                </div>
              </Section>
              <Section name='experience'>
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
              </Section>
              <Section name='education'>
                <SectionTitle>/ Formación</SectionTitle>
                <Course
                  name='CF Superior en Administración de Sistemas Informáticos - IES Antonio Machado'
                  date='2007-2009'
                />
              </Section>
              <Section name='education'>
                <SectionTitle>/ Cursos independientes</SectionTitle>
                {this.state.courses.length > 0 && this.state.courses.map(courses => (
                    <Course key={courses.name} name={courses.name} date={courses.date} />
                ))}
              </Section>
            </article>
            <article id='portfolio' className='clearfix'>
              <SectionTitle>/ Portfolio</SectionTitle>
              <ul id='category' className='filter'>
                <Category class='current all' name='Todo'/>
                <Category class='WebDesign' name='Programación a medida'/>
                <Category class='Animation' name='Tienda virtual'/>
                <Category class='Wordpress' name='Wordpress'/>
              </ul>
              <Section name='works'>
                <ul id='items' className='portfolio'>
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
              </Section>
            </article>
            <article id='contact' className='clearfix'>
              <SectionTitle>/ Contacto</SectionTitle>
              <Section name='personalInfo'>
                <SectionSubTitle subtitle='Información de contacto' />
                <ul className='personal'>
                  <List label='Tel' value='605 230 463' />
                  <List label='Skype' value='pending' />
                </ul>
                <ul className='personal'>
                  <List label='Email' value='pending' />
                </ul>
              </Section>
              <Section name='contactForm'>
                <SectionSubTitle subtitle='Rellena el formulario y en breve recibirás tu respuesta.' />
                <form className='contactForm' method='post'>
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
              </Section>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
