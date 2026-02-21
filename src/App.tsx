import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { TemplateSelector } from './components/TemplateSelector';
import { PersonalInfo } from './components/PersonalInfo';
import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import { Language } from './components/Language';
import { WorkExperience } from './components/WorkExperience';
import { AreasOfExpertise } from './components/AreasOfExpertise';
import { References } from './components/References';
import { FormProvider } from './contexts/FormContext';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('personal-info');

  const sectionTitles = {
    'personal-info': 'Personal info',
    'about-me': 'About me',
    'education': 'Education',
    'language': 'Language',
    'work-experience': 'Work experience',
    'areas-of-expertise': 'Areas of expertise',
    'references': 'References',
  };

  const sections = ['personal-info', 'about-me', 'education', 'language', 'work-experience', 'areas-of-expertise', 'references'];

  const goToNextSection = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'personal-info':
        return <PersonalInfo key={activeSection} onNext={goToNextSection} />;
      case 'about-me':
        return <AboutMe key={activeSection} onNext={goToNextSection} />;
      case 'education':
        return <Education key={activeSection} onNext={goToNextSection} />;
      case 'language':
        return <Language key={activeSection} onNext={goToNextSection} />;
      case 'work-experience':
        return <WorkExperience key={activeSection} onNext={goToNextSection} />;
      case 'areas-of-expertise':
        return <AreasOfExpertise key={activeSection} onNext={goToNextSection} />;
      case 'references':
        return <References key={activeSection} onNext={goToNextSection} />;
      default:
        return <PersonalInfo key={activeSection} onNext={goToNextSection} />;
    }
  };

  return (
    <FormProvider>
      <div className="flex flex-col h-screen">
        <Header />
        
        <div className="flex flex-1">
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          
          <main className="flex-1 my-5 bg-white rounded-xl shadow-sm overflow-y-auto">
            <div className="max-w-4xl mx-auto ">
                <div className="p-6 border-b border-gray-200">
                  <h2
                      className="mb-2 text-base font-medium leading-normal"

                  >
                      {sectionTitles[activeSection as keyof typeof sectionTitles]}
                  </h2>
                  <p
                      className="text-sm font-normal leading-normal"
                      style={{
                          color: 'var(--text-base-secondary, rgba(15, 19, 36, 0.60))',
                      }}
                  >
                      Fill details here
                  </p>
              </div>
              
              {renderSection()}
            </div>
          </main>
          
          <TemplateSelector />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
