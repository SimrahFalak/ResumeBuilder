import React from 'react';
import { useFormContext } from '../contexts/FormContext';

export const TemplateSelector: React.FC = () => {
  const { previewData } = useFormContext();
  return (
    <div
      className="flex flex-col items-start m-5"
      style={{
        width: '450px',
        height: '896px',
        borderRadius: '10px',
        border: '1px solid #DEE0E3',
        background: '#FFF',
      }}
    >
      <div className="p-6 w-full border-b border-gray-200">
        <h2
          className="mb-2 text-base font-medium leading-normal"

        >
          Select to fill details
        </h2>
        <p
          className="text-[14px] font-normal leading-normal"
          style={{
            color: 'var(--text-base-secondary, rgba(15, 19, 36, 0.60))',
            fontWeight: 400,
          }}
        >
          Select and fill details individually.
        </p>
      </div>

      {/* Resume Preview */}
      <div className="p-6 w-full border-gray-200">
        <div
          className="overflow-hidden aspect-8.5/11"
          style={{
            background: '#FFF',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.25)',
          }}
        >
          <div className="h-full flex">
            {/* Left side - Black with orange accent */}
            <div className="w-2/5 relative flex flex-col" style={{ background: '#1F1F1F' }}>
              {/* Decorative vertical line SVG */}
              <img
                src="/Line.svg"
                alt="Decorative Line"
                className="absolute left-[20px] top-0 h-full z-20"
                style={{ pointerEvents: 'none' }}
              />
              <div className="absolute top-0 left-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="163" viewBox="0 0 146 149" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M145.336 0H0V148.243L145.336 0Z" fill="#EB632C" />
                </svg>
              </div>

              <div className="flex flex-col items-center mt-8 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 79 79" fill="none">
                  <defs>
                    <clipPath id="profile-shape">
                      <path fillRule="evenodd" clipRule="evenodd" d="M39.1877 1.42499C60.043 1.42499 76.9497 18.3315 76.9497 39.1869C76.9497 60.0424 60.043 76.9489 39.1877 76.9489H1.42578V39.1869C1.42578 18.3315 18.3324 1.42499 39.1877 1.42499Z" />
                    </clipPath>
                  </defs>
                  {previewData.personalInfo.photo ? (
                    <image 
                      href={previewData.personalInfo.photo}
                      x="0" 
                      y="0" 
                      width="79" 
                      height="79" 
                      clipPath="url(#profile-shape)"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  ) : (
                    <rect 
                      x="0" 
                      y="0" 
                      width="79" 
                      height="79" 
                      clipPath="url(#profile-shape)"
                      fill="#E5E7EB"
                    />
                  )}
                  <path fillRule="evenodd" clipRule="evenodd" d="M39.1877 1.42499C60.043 1.42499 76.9497 18.3315 76.9497 39.1869C76.9497 60.0424 60.043 76.9489 39.1877 76.9489H1.42578V39.1869C1.42578 18.3315 18.3324 1.42499 39.1877 1.42499Z" fill="none" stroke="white" strokeWidth="2.84996" />
                </svg>

              </div>
              <div className="mt-4 px-8">
                {/* Contact Me */}
                <div className="flex items-center gap-1 mb-3">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: '12px', height: '12px', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <img src="/icons/user.svg" alt="User" style={{ width: '8px', height: '8px', display: 'block' }} />
                  </div>
                  <span
                    style={{
                      color: '#FFF',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                    }}
                  >
                    Contact Me
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center',  marginBottom: '8px' }}>
                  <span style={{
                    width: '12px', height: '12px', background: previewData.personalInfo.phone ? '#FFF' : 'transparent', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px', flexShrink: 0
                  }}>
                    {previewData.personalInfo.phone && <img src="/icons/phone.svg" alt="Phone" style={{ width: '8px', height: '8px', display: 'block' }} />}
                  </span>
                  <span style={{ color: '#FFF', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>
                    {previewData.personalInfo.phone || '\u00A0'}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{
                    width: '12px', height: '12px', background: previewData.personalInfo.email ? '#FFF' : 'transparent', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px', flexShrink: 0
                  }}>
                    {previewData.personalInfo.email && <img src="/icons/web.svg" alt="Website" style={{ width: '8px', height: '8px', display: 'block' }} />}
                  </span>
                  <span style={{ color: '#FFF', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>
                    {previewData.personalInfo.email || '\u00A0'}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center',  marginBottom: '8px' }}>
                  <span style={{
                    width: '12px', height: '12px', background: previewData.personalInfo.address ? '#FFF' : 'transparent', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px', flexShrink: 0
                  }}>
                    {previewData.personalInfo.address && <img src="/icons/location.svg" alt="Address" style={{ width: '8px', height: '8px', display: 'block' }} />}
                  </span>
                  <span style={{ color: '#FFF', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>
                    {previewData.personalInfo.address || '\u00A0'}
                  </span>
                </div>

                {/* Dashed separator line */}
                <div style={{ width: '86px', margin: '0 auto 12px auto' }}>
                  <svg width="86" height="2" viewBox="0 0 86 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="86" y2="1" stroke="#FFF" strokeWidth="0.427" strokeDasharray="2 1" />
                  </svg>
                </div>

                  

                {/* References */}
                <div className="flex items-center gap-1 mb-3">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: '12px', height: '12px', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <img src="/icons/refrences.svg" alt="Reference" style={{ width: '8px', height: '8px', display: 'block' }} />
                  </div>
                  <span
                    style={{
                      color: '#FFF',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                    }}
                  >
                    References
                  </span>
                </div>

                {/* Reference List */}
                {previewData.references.length > 0 ? (
                  previewData.references.slice(0, 2).map((ref, index) => (
                    <div key={index} className="mb-2">
                      <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }}>
                        {ref.name || '\u00A0'} {ref.position && <span style={{ color: ' rgba(255, 255, 255, 0.50)', fontWeight: 400 }}>({ref.position})</span>}
                      </div>
                      <div style={{ color: '#A1A1A1', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>
                        Phone number: <span style={{ color: '#FFF', fontWeight: 400 }}>{ref.phone || '\u00A0'}</span>
                      </div>
                      <div style={{ color: '#A1A1A1', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>
                        Email: <span style={{ color: '#FFF', fontWeight: 400 }}>{ref.email || '\u00A0'}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="mb-2">
                      <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }}>
                        {'\u00A0'}
                      </div>
                      <div style={{ color: '#A1A1A1', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>
                        <span style={{ color: '#FFF', fontWeight: 400 }}>{'\u00A0'}</span>
                      </div>
                      <div style={{ color: '#A1A1A1', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>
                       <span style={{ color: '#FFF', fontWeight: 400 }}>{'\u00A0'}</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }}>
                        {'\u00A0'}
                      </div>
                      <div style={{ color: '#A1A1A1', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>
                       <span style={{ color: '#FFF', fontWeight: 400 }}>{'\u00A0'}</span>
                      </div>
                      <div style={{ color: '#A1A1A1', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>
                      <span style={{ color: '#FFF', fontWeight: 400 }}>{'\u00A0'}</span>
                      </div>
                    </div>
                  </>
                )}


                 {/* Dashed separator line */}
                <div style={{ width: '86px', margin: '0 auto 12px auto' }}>
                  <svg width="86" height="2" viewBox="0 0 86 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="86" y2="1" stroke="#FFF" strokeWidth="0.427" strokeDasharray="2 1" />
                  </svg>
                </div>
                {/* Social link */}
                <div className="flex items-center gap-1 mb-3">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: '12px', height: '12px', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <img src="/icons/social.svg" alt="Social" style={{ width: '8px', height: '8px', display: 'block' }} />
                  </div>
                  <span
                    style={{
                      color: '#FFF',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                    }}
                  >
                    Social Links
                  </span>
                </div>
                <div className="mb-2">
                  <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }} className='mb-1'>{previewData.personalInfo.linkedin ? 'LinkedIn URL' : '\u00A0'}</div>
                  <div style={{ color: '#FFF', fontSize: '5px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
                    {previewData.personalInfo.linkedin || '\u00A0'}
                  </div>
                </div>
                <div className="mb-2">
                  <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }} className='mb-1'>{previewData.personalInfo.indeed ? 'Indeed URL' : '\u00A0'}</div>
                  <div style={{ color: '#FFF', fontSize: '5px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
                    {previewData.personalInfo.indeed || '\u00A0'}
                  </div>
                </div>
                <div className="mb-2">
                  <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }} className='mb-1'>{previewData.personalInfo.behance ? 'Behance URL' : '\u00A0'}</div>
                  <div style={{ color: '#FFF', fontSize: '5px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
                    {previewData.personalInfo.behance || '\u00A0'}
                  </div>
                </div>
                <div className="mb-2">
                  <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }} className='mb-1'>{previewData.personalInfo.website ? 'Website URL' : '\u00A0'}</div>
                  <div style={{ color: '#FFF', fontSize: '5px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
                    {previewData.personalInfo.website || '\u00A0'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - White */}
            <div className="flex-1 bg-white relative">

               <img
                src="/Line-2.svg"
                alt="Decorative Line"
                className="absolute left-[20px] top-0 h-full z-20"
                style={{ pointerEvents: 'none' }}
              />

              <img
                src="/Shape.svg"
                alt="Shape"
                className="absolute right-0 bottom-0 z-20"
                style={{ pointerEvents: 'none' }}
                />
                {/* About me */}
                <div style={{ width: '230px', height: '52px', background: '#F0F0F0', borderRadius: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '18px', paddingTop: '4px', paddingBottom: '4px', marginBottom: '12px', position: 'absolute', left: '22px', top: '20px', zIndex: 10 }}>
                  <div style={{
                    color: '#333',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                  }}>
                    {previewData.personalInfo.name || '\u00A0'}
                  </div>
                  <div style={{
                    color: '#333',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '8px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}>
                    {previewData.personalInfo.job || '\u00A0'}
                  </div>
                </div>


              <div className="p-8 mt-[54px] space-y-4">
             
              <div>
                  <div className="flex items-center gap-1 text-xs mb-1">
                    <div style={{ width: '10px', height: '10px', background: '#EB632C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="/icons/about.svg" alt="About" style={{ width: '6px', height: '6px', display: 'block' }} />
                    </div>
                    <span style={{
                      color: '#333',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                    }}>About me</span>
                  </div>
                  <div style={{
                    color: 'var(--text-base-secondary, rgba(15, 19, 36, 0.60))',
                    fontSize: '6px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    minHeight: '12px',
                  }}>
                    {previewData.aboutMe
                      ? previewData.aboutMe
                      : <>
                          <div>{'\u00A0'}</div>
                          <div>{'\u00A0'}</div>
                          <div>{'\u00A0'}</div>
                        </>}
                  </div>
                </div>
                {/* Work Experience */}
                <div>
                  <div className="flex items-center gap-1 text-xs mb-2">
                    <div style={{ width: '10px', height: '10px', background: '#EB632C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="/icons/work.svg" alt="Work" style={{ width: '6px', height: '6px', display: 'block' }} />
                    </div>
                    <span style={{
                      color: '#333',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                    }}>Work Experience</span>
                  </div>
                  {previewData.workExperience.length > 0 ? (
                    previewData.workExperience.slice(0, 2).map((work, index) => (
                      <div key={index} className={index > 0 ? 'mt-2' : ''}>
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col">
                            <h3 style={{
                              color: '#333',
                              fontSize: '7px',
                              fontStyle: 'normal',
                              fontWeight: 700,
                              lineHeight: 'normal',
                            }}>{work.jobTitle}</h3>
                            <p style={{
                              color: '#333',
                              fontSize: '6px',
                              fontStyle: 'normal',
                              fontWeight: 400,
                              lineHeight: 'normal',
                            }}>{work.company}</p>
                            <p style={{
                              color: '#333',
                              fontSize: '6px',
                              fontStyle: 'normal',
                              fontWeight: 400,
                              lineHeight: 'normal',
                            }}>{work.designation}</p>
                          </div>
                          <h3 style={{
                            color: '#333',
                            textAlign: 'right',
                            fontSize: '6px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                          }}>{work.from} - {work.onwards ? 'Present' : work.to}</h3>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div >
                      <div style={{ color: '#333', fontSize: '7px', opacity: 0.1 }}>{'\u00A0'}</div>
                      <div style={{ color: '#333', fontSize: '5.5px', opacity: 0.1 }}>{'\u00A0'}</div>
                      <div style={{ color: '#333', fontSize: '6px', opacity: 0.1 , marginTop: '8px'}}>{'\u00A0'}</div>
                      <div style={{ color: '#333', fontSize: '7px', opacity: 0.1 }}>{'\u00A0'}</div>
                        <div style={{ color: '#333', fontSize: '5.5px', opacity: 0.1 , marginTop: '8px'}}>{'\u00A0'}</div>
                      <div style={{ color: '#333', fontSize: '6px', opacity: 0.1 }}>{'\u00A0'}</div>
                      
                    </div>
                  )}
                </div>
                {/* Education */}
                <div>
                  <div className="flex items-center gap-1 text-xs mb-2">
                    <div style={{ width: '10px', height: '10px', background: '#EB632C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="/icons/education.svg" alt="Education" style={{ width: '6px', height: '6px', display: 'block' }} />
                    </div>
                    <span style={{
                      color: '#333',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                    }}>Education</span>
                  </div>
                  {previewData.education.length > 0 ? (
                    previewData.education.slice(0, 2).map((edu, index) => (
                      <div key={index} className={`flex justify-between items-center ${index > 0 ? 'mt-[10px]' : ''}`}>
                        <div className="flex flex-col">
                          <h3 style={{
                            color: '#333',
                            fontSize: '7px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                          }}>{edu.institution}</h3>
                          <p style={{
                            color: '#333',
                            fontSize: '6px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal',
                          }}>{edu.degree}</p>
                        </div>
                        <h3 style={{
                          color: '#333',
                          textAlign: 'right',
                          fontSize: '6px',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: 'normal',
                        }}>{edu.year}</h3>
                      </div>
                    ))
                  ) : (
                    <div style={{ minHeight: '40px' }}>
                      <div style={{ color: '#333', fontSize: '7px', opacity: 0.1 }}>{'\u00A0'}</div>
                       <div style={{ color: '#333', fontSize: '6px', opacity: 0.1 }}>{'\u00A0'}</div>
                        <div style={{ color: '#333', fontSize: '7px', opacity: 0.1 , marginTop: '8px'}}>{'\u00A0'}</div>
                         <div style={{ color: '#333', fontSize: '6px', opacity: 0.1 }}>{'\u00A0'}</div>
                    </div>
                  )}
                </div>
                {/* Areas of expertise */}
                <div>
                  <div className="flex items-center gap-1 text-xs ">
                    <div style={{ width: '10px', height: '10px', background: '#EB632C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="/icons/areas.svg" alt="Expertise" style={{ width: '6px', height: '6px', display: 'block' }} />
                    </div>
                    <span style={{
                      color: '#333',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                    }}>Areas of expertise</span>
                  </div>
                  <div style={{
                    color: 'var(--text-base-secondary, rgba(15, 19, 36, 0.60))',
                    fontSize: '6px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    marginTop: '8px',
                    minHeight: '20px',
                  }}>
                    {previewData.areasOfExpertise || '\u00A0'}
                  </div>
                </div>
                {/* Language */}
                <div>
                  <div className="flex items-center gap-1 text-xs mb-2">
                    <div style={{ width: '10px', height: '10px', background: '#EB632C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src="/icons/areas.svg" alt="Language" style={{ width: '6px', height: '6px', display: 'block' }} />
                    </div>
                    <span style={{
                      color: '#333',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                    }}>Language</span>
                  </div>
                  {previewData.languages.length > 0 ? (
                    previewData.languages.slice(0, 2).map((lang, index) => (
                      <div key={index} className={`flex flex-col ${index > 0 ? 'mt-2' : ''}`}>
                        <h3 style={{
                          color: '#333',
                          fontSize: '7px',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: 'normal',
                        }}>
                          {lang.language.charAt(0).toUpperCase() + lang.language.slice(1)}
                        </h3>
                        <p style={{
                          color: '#333',
                          fontSize: '6px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: 'normal',
                        }}>
                          {lang.proficiency.charAt(0).toUpperCase() + lang.proficiency.slice(1)}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div style={{ minHeight: '35px' }}>
                      <div style={{ color: '#333', fontSize: '7px', opacity: 0.1 }}>{'\u00A0'}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template Options */}
      <div
        className="flex flex-col justify-center items-start self-stretch w-full"
        style={{
          padding: '12px 24px 24px 24px',
          gap: '19.342px',
        }}
      >
        <h3
          style={{
            color: '#14151A',
            fontFeatureSettings: '"liga" off, "clig" off',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
          }}
        >
          Select template
        </h3>
        <div className="flex gap-7 w-full">
          <div
            className="cursor-pointer overflow-hidden flex-1 p-3"
            style={{
              borderRadius: '6px',
              border: '2.198px solid #00318B',
              background: '#FFF',
              boxShadow: '0 2.198px 13.19px 0 rgba(0, 0, 0, 0.10)',
            }}
          >
            <img
              src="/template-1.png"
              alt="Template 1"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '67/94',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
          <div
            className="cursor-pointer overflow-hidden hover:border-primary flex-1 p-3"
            style={{
              borderRadius: '6px',
              border: '1.099px solid #E1E1E1',
              background: '#FFF',
              boxShadow: '0 2.198px 13.19px 0 rgba(0, 0, 0, 0.10)',
            }}
          >
            <img
              src="/template-2.png"
              alt="Template 2"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '67/94',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
          <div
            className="cursor-pointer overflow-hidden hover:border-primary flex-1 p-3"
            style={{
              borderRadius: '6px',
              border: '1.099px solid #E1E1E1',
              background: '#FFF',
              boxShadow: '0 2.198px 13.19px 0 rgba(0, 0, 0, 0.10)',
            }}
          >
            <img
              src="/template-3.png"
              alt="Template 3"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '67/94',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
