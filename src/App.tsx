import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from './components/SectionTitle';
import { dataEn, dataEs } from './data';

const translations = {
  en: {
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    prevSection: 'Go to previous section',
    nextSection: 'Go to next section',

    techEye: 'Technologies',
    techTitle: 'Stack & Skills',
    aboutWork: 'About my work',
    aboutWorkSub:
      'I build web solutions focused on communication, performance, and scalability.',
    aboutBullet1: 'Frontend development with React, Vue, and clean architecture',
    aboutBullet2: 'Backend integration and APIs with Django for full-stack workflows',
    aboutBullet3: 'Experience with messaging products, PDFs, and real-time operations',
    photoAlt: 'Alan Suarez Profile',

    expEye: 'Career Path',
    expTitle: 'Professional Experience',
    prevExp: 'View previous experience',
    nextExp: 'View next experience',

    featuredProj: 'Featured Project',
    visitSite: 'Visit site',
    focusEye: 'Focus',
    focusTitle: 'How I work',
    focusDesc:
      'I work on end-to-end digital products: ideation, design, development, optimization, and deployment.',
    moreWorkEye: 'More work',
    moreWorkTitle: 'Other Projects',
    prevProj: 'View previous project',
    nextProj: 'View next project',

    eduEye: 'Background',
    eduTitle: 'Education',
    coursesTitle: 'Courses & certifications',
    contactEye: 'Contact',
    contactTitle: "Let's work together",
    contactDesc:
      "If you have an idea, let's bring it to life and launch it to production. Let's talk via email or LinkedIn.",
    sendEmail: 'Email me',
    viewLinkedin: 'View LinkedIn',
    call: 'Call',
  },
  es: {
    home: 'Inicio',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
    lightMode: 'Modo claro',
    darkMode: 'Modo oscuro',
    prevSection: 'Ir a la sección anterior',
    nextSection: 'Ir a la siguiente sección',

    techEye: 'Tecnologías',
    techTitle: 'Stack y Skills',
    aboutWork: 'Sobre mi trabajo',
    aboutWorkSub:
      'Construyo soluciones web enfocadas en comunicación, rendimiento y escalabilidad.',
    aboutBullet1: 'Desarrollo frontend con React, Vue y arquitectura limpia',
    aboutBullet2: 'Integración backend y APIs con Django para flujos completos',
    aboutBullet3:
      'Experiencia en productos para mensajería, PDF y operación en tiempo real',
    photoAlt: 'Foto de Alan Suarez',

    expEye: 'Trayectoria',
    expTitle: 'Experiencia Profesional',
    prevExp: 'Ver experiencia anterior',
    nextExp: 'Ver siguiente experiencia',

    featuredProj: 'Proyecto Destacado',
    visitSite: 'Visitar sitio',
    focusEye: 'Enfoque',
    focusTitle: 'Cómo trabajo',
    focusDesc:
      'Trabajo en productos digitales de punta a punta: idea, diseño, desarrollo, mejora y despliegue.',
    moreWorkEye: 'Más trabajo',
    moreWorkTitle: 'Otros Proyectos',
    prevProj: 'Ver proyecto anterior',
    nextProj: 'Ver siguiente proyecto',

    eduEye: 'Formación',
    eduTitle: 'Educación',
    coursesTitle: 'Cursos y certificaciones',
    contactEye: 'Contacto',
    contactTitle: 'Trabajemos juntos',
    contactDesc:
      'Si tienes una idea, la aterrizamos y la llevamos a producción. Hablemos por correo o LinkedIn.',
    sendEmail: 'Enviar correo',
    viewLinkedin: 'Ver LinkedIn',
    call: 'Llamar',
  },
} as const;

export function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activePanel, setActivePanel] = useState(0);

  const activeData = lang === 'en' ? dataEn : dataEs;
  const { profile, skills, experiences, education, certifications, projects } =
    activeData;

  const primaryProject = projects[0];
  const secondaryProjects = projects.slice(1);

  const t = translations[lang];
  const panelIds = ['inicio', 'experiencia', 'proyectos', 'contacto'] as const;
  const panelLabels = [t.home, t.experience, t.projects, t.contact] as const;

  const railRef = useRef<HTMLDivElement>(null);
  const experienceSliderRef = useRef<HTMLDivElement>(null);
  const projectsSliderRef = useRef<HTMLDivElement>(null);

  const moveSlider = (
    sliderRef: { current: HTMLDivElement | null },
    direction: 'next' | 'prev',
  ) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const offset = slider.clientWidth * 0.85;
    slider.scrollBy({
      left: direction === 'next' ? offset : -offset,
      behavior: 'smooth',
    });
  };

  const scrollToPanel = (index: number) => {
    const rail = railRef.current;
    if (!rail) return;

    const safeIndex = Math.max(0, Math.min(index, panelIds.length - 1));
    rail.scrollTo({
      left: safeIndex * rail.clientWidth,
      behavior: 'smooth',
    });
    setActivePanel(safeIndex);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return () => document.body.classList.remove('dark-theme');
  }, [isDarkTheme]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onScroll = () => {
      const panelWidth = rail.clientWidth;
      if (!panelWidth) return;
      const current = Math.round(rail.scrollLeft / panelWidth);
      setActivePanel(current);
    };

    rail.addEventListener('scroll', onScroll, { passive: true });
    return () => rail.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page">
      <header className="navbar">
        <div className="brand-wrap">
          <button
            type="button"
            className="brand nav-link"
            onClick={() => scrollToPanel(0)}
          >
            Alan Suarez
          </button>
          <img
            className={`nav-avatar ${activePanel > 0 ? 'is-visible' : ''}`}
            src="/Alan.png"
            alt="Alan Suarez"
          />
        </div>
        <nav>
          <button
            type="button"
            className="nav-link"
            onClick={() => scrollToPanel(1)}
          >
            {t.experience}
          </button>
          <button
            type="button"
            className="nav-link"
            onClick={() => scrollToPanel(2)}
          >
            {t.projects}
          </button>
          <button
            type="button"
            className="nav-link"
            onClick={() => scrollToPanel(3)}
          >
            {t.contact}
          </button>
          <button
            type="button"
            className="nav-link theme-toggle"
            onClick={() => setIsDarkTheme((prev) => !prev)}
          >
            {isDarkTheme ? t.lightMode : t.darkMode}
          </button>
          <button
            type="button"
            className="nav-link lang-toggle"
            onClick={() => setLang((prev) => (prev === 'en' ? 'es' : 'en'))}
            aria-label="Cambiar idioma / Change language"
          >
            🌐 {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>
      </header>

      <div className="rail-controls">
        <button
          type="button"
          className="rail-btn"
          onClick={() => scrollToPanel(activePanel - 1)}
          aria-label={t.prevSection}
        >
          ←
        </button>
        <button
          type="button"
          className="rail-btn"
          onClick={() => scrollToPanel(activePanel + 1)}
          aria-label={t.nextSection}
        >
          →
        </button>
      </div>

      <main className="rail" ref={railRef}>
        <section className="panel" id="inicio">
          <div className="container">
            <section className="hero card hero-viewport">
              <div>
                <p className="eyebrow">Build. Ship. Repeat.</p>
                <h1>{profile.fullName}</h1>
                <h2>{profile.headline}</h2>
                <p className="summary">{profile.summary}</p>

                <div className="hero-meta">
                  <span>{profile.location}</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </div>

                <div className="hero-skills">
                  <SectionTitle eyebrow={t.techEye} title={t.techTitle} />
                  <div className="chip-grid">
                    {skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hero-side">
                <figure className="hero-photo">
                  <img src="/Alan.png" alt={t.photoAlt} />
                </figure>

                <div className="hero-panel">
                  <p>{t.aboutWork}</p>
                  <h3>{t.aboutWorkSub}</h3>
                  <ul>
                    <li>{t.aboutBullet1}</li>
                    <li>{t.aboutBullet2}</li>
                    <li>{t.aboutBullet3}</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="panel" id="experiencia">
          <div className="container">
            <section className="experience-block card-shell">
              <div className="carousel-header">
                <SectionTitle eyebrow={t.expEye} title={t.expTitle} />
                <div className="carousel-controls">
                  <button
                    type="button"
                    className="carousel-btn"
                    onClick={() => moveSlider(experienceSliderRef, 'prev')}
                    aria-label={t.prevExp}
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="carousel-btn"
                    onClick={() => moveSlider(experienceSliderRef, 'next')}
                    aria-label={t.nextExp}
                  >
                    →
                  </button>
                </div>
              </div>

              <div
                className="slider-track experience-slider"
                ref={experienceSliderRef}
              >
                {experiences.map((item) => (
                  <article
                    key={`${item.company}-${item.role}`}
                    className="experience-card card"
                  >
                    <header>
                      <h3>{item.role}</h3>
                      <p>
                        {item.company} · {item.period}
                      </p>
                    </header>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="panel" id="proyectos">
          <div className="container">
            <section className="card featured-project">
              <SectionTitle eyebrow={t.featuredProj} title={primaryProject.title} />
              <p>{primaryProject.description}</p>
              {primaryProject.link && (
                <a
                  className="project-link"
                  href={primaryProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.visitSite}
                </a>
              )}
              <div className="chip-row">
                {primaryProject.stack.map((tech) => (
                  <span className="chip small" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="card">
              <SectionTitle eyebrow={t.focusEye} title={t.focusTitle} />
              <p className="support-copy">{t.focusDesc}</p>
            </section>

            <section className="card">
              <div className="carousel-header">
                <SectionTitle eyebrow={t.moreWorkEye} title={t.moreWorkTitle} />
                <div className="carousel-controls">
                  <button
                    type="button"
                    className="carousel-btn"
                    onClick={() => moveSlider(projectsSliderRef, 'prev')}
                    aria-label={t.prevProj}
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="carousel-btn"
                    onClick={() => moveSlider(projectsSliderRef, 'next')}
                    aria-label={t.nextProj}
                  >
                    →
                  </button>
                </div>
              </div>

              <div
                className="slider-track project-slider"
                ref={projectsSliderRef}
              >
                {secondaryProjects.map((project) => (
                  <article className="project" key={project.title}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="chip-row">
                      {project.stack.map((tech) => (
                        <span className="chip small" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="panel" id="contacto">
          <div className="container">
            <section className="card split">
              <div>
                <SectionTitle eyebrow={t.eduEye} title={t.eduTitle} />
                <ul className="list-clean">
                  {education.map((item) => (
                    <li key={`${item.institution}-${item.degree}`}>
                      <strong>{item.degree}</strong>
                      <p>
                        {item.institution} · {item.period}
                      </p>
                      {item.details && (
                        <p className="education-details">{item.details}</p>
                      )}
                    </li>
                  ))}
                </ul>

                <h4 className="subsection-title">{t.coursesTitle}</h4>
                <ul className="cert-list">
                  {certifications.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionTitle eyebrow={t.contactEye} title={t.contactTitle} />
                <p>{t.contactDesc}</p>
                <div className="contact-links">
                  <a href={`mailto:${profile.email}`}>{t.sendEmail}</a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    {t.viewLinkedin}
                  </a>
                  <a href={`tel:${profile.phone}`}>{t.call}</a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <nav className="mobile-tabs" aria-label="Navegacion movil">
        {panelLabels.map((label, index) => (
          <button
            key={label}
            type="button"
            className={`mobile-tab ${activePanel === index ? 'is-active' : ''}`}
            onClick={() => scrollToPanel(index)}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
