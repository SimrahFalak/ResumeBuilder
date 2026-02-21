import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface PersonalInfoData {
  name: string;
  job: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  indeed: string;
  behance: string;
  website: string;
  photo: string | null;
}

export interface WorkExperienceEntry {
  id: number;
  jobTitle: string;
  designation: string;
  company: string;
  from: string;
  to: string;
  onwards: boolean;
}

export interface EducationEntry {
  id: number;
  institution: string;
  degree: string;
  year: string;
}

export interface LanguageEntry {
  id: number;
  language: string;
  proficiency: string;
}

export interface ReferenceEntry {
  id: number;
  name: string;
  position: string;
  phone: string;
  email: string;
}

export interface FormData {
  personalInfo: PersonalInfoData;
  aboutMe: string;
  workExperience: WorkExperienceEntry[];
  education: EducationEntry[];
  areasOfExpertise: string;
  languages: LanguageEntry[];
  references: ReferenceEntry[];
}

interface FormContextType {
  formData: FormData;
  updatePersonalInfo: (data: Partial<PersonalInfoData>) => void;
  updateAboutMe: (text: string) => void;
  updateWorkExperience: (data: WorkExperienceEntry[]) => void;
  updateEducation: (data: EducationEntry[]) => void;
  updateAreasOfExpertise: (text: string) => void;
  updateLanguages: (data: LanguageEntry[]) => void;
  updateReferences: (data: ReferenceEntry[]) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const initialFormData: FormData = {
  personalInfo: {
    name: '',
    job: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    indeed: '',
    behance: '',
    website: '',
    photo: null,
  },
  aboutMe: '',
  workExperience: [],
  education: [],
  areasOfExpertise: '',
  languages: [],
  references: [],
};

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updatePersonalInfo = (data: Partial<PersonalInfoData>) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...data },
    }));
  };

  const updateAboutMe = (text: string) => {
    setFormData(prev => ({ ...prev, aboutMe: text }));
  };

  const updateWorkExperience = (data: WorkExperienceEntry[]) => {
    setFormData(prev => ({ ...prev, workExperience: data }));
  };

  const updateEducation = (data: EducationEntry[]) => {
    setFormData(prev => ({ ...prev, education: data }));
  };

  const updateAreasOfExpertise = (text: string) => {
    setFormData(prev => ({ ...prev, areasOfExpertise: text }));
  };

  const updateLanguages = (data: LanguageEntry[]) => {
    setFormData(prev => ({ ...prev, languages: data }));
  };

  const updateReferences = (data: ReferenceEntry[]) => {
    setFormData(prev => ({ ...prev, references: data }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updatePersonalInfo,
        updateAboutMe,
        updateWorkExperience,
        updateEducation,
        updateAreasOfExpertise,
        updateLanguages,
        updateReferences,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
