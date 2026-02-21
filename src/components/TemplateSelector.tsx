import React from 'react';

export const TemplateSelector: React.FC = () => {
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
                  <image 
                    href="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                    x="0" 
                    y="0" 
                    width="79" 
                    height="79" 
                    clipPath="url(#profile-shape)"
                    preserveAspectRatio="xMidYMid slice"
                  />
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
                    width: '12px', height: '12px', background: '#FFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px', flexShrink: 0
                  }}>
                    <img src="/icons/phone.svg" alt="Phone" style={{ width: '8px', height: '8px', display: 'block' }} />
                  </span>
                  <span style={{ color: '#FFF', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>+92 31 2024889</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{
                    width: '12px', height: '12px', background: '#FFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px', flexShrink: 0
                  }}>
                    <img src="/icons/web.svg" alt="Website" style={{ width: '8px', height: '8px', display: 'block' }} />
                  </span>
                  <span style={{ color: '#FFF', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>bobbrains@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center',  marginBottom: '8px' }}>
                  <span style={{
                    width: '12px', height: '12px', background: '#FFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px', flexShrink: 0
                  }}>
                    <img src="/icons/location.svg" alt="Address" style={{ width: '8px', height: '8px', display: 'block' }} />
                  </span>
                  <span style={{ color: '#FFF', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>769 Prudence Street Lincoln Park, MI 48146</span>
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
                <div className="mb-2">
                  <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }} >
                    Darwin B. Magana <span style={{ color: ' rgba(255, 255, 255, 0.50)', fontWeight: 400 }}>(Manager)</span>
                  </div>
                  <div style={{ color: '#A1A1A1', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>Phone number: <span style={{ color: '#FFF', fontWeight: 400 }}>+92 3658425225</span></div>

                  <div style={{ color: '#A1A1A1', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>Email: <span style={{ color: '#FFF', fontWeight: 400 }}>drawinbm@gmail.com</span></div>
                </div>
                <div className="mb-2">
                  <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }} >
                    Robert J. Belvin <span style={{ color: ' rgba(255, 255, 255, 0.50)', fontWeight: 400 }}>(Manager)</span>
                  </div>
                  <div style={{ color: '#A1A1A1', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>Phone number: <span style={{ color: '#FFF', fontWeight: 400 }}>+92 3658425225</span></div>
                  <div style={{ color: '#A1A1A1', fontSize: '6px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', fontFamily: 'inherit' }}>Email: <span style={{ color: '#FFF', fontWeight: 400 }}>robertojb@gmail.com</span></div>
                </div>


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
                  <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }} className='mb-1'>LinkedIn URL</div>
                  <div style={{ color: '#FFF', fontSize: '5px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>www.linkedin.com/webbobbrains</div>
                </div>
                <div className="mb-2">
                  <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }} className='mb-1'>Indeed URL</div>
                  <div style={{ color: '#FFF', fontSize: '5px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }} >www.indeed.com/bobbrains</div>
                </div>
                <div className="mb-2">
                  <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }} className='mb-1'>Behance URL</div>
                  <div style={{ color: '#FFF', fontSize: '5px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>www.behance.com/bobbrains16</div>
                </div>
                <div className="mb-2">
                  <div style={{ color: '#FFF', fontSize: '7px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }} className='mb-1'>Website URL</div>
                  <div style={{ color: '#FFF', fontSize: '5px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>www.bobbrains.com</div>
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
                    Bob Brains
                  </div>
                  <div style={{
                    color: '#333',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '8px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}>
                    UI/UX Designer
                  </div>
                </div>


              <div className="p-8 mt-14 space-y-6">
             
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
                  }}>
                    Creative and detail-oriented product designer passionate about crafting user-centered digital experiences that blend functionality with aesthetics.
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
                  <div >
                    <div className="flex justify-between">
                      <h3 style={{
                        color: '#333',
                        fontSize: '7px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                      }}>UI/UX Designer</h3>
                      <h3 style={{
                        color: '#333',
                        fontSize: '6px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                      }}>12/10/2018 - 12/10/2020</h3>
                    </div>
                    <p style={{
                      color: '#333',
                      fontSize: '6px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                    }}>Manager</p>
                    <p style={{
                      color: 'rgba(15, 19, 36, 0.60)',
                      fontSize: '6px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                    }}>Associate manager</p>
                  </div>

                    <div>
                    <div className="flex justify-between mt-2 items-center">
                      <div className="flex flex-col">
                        <h3 style={{
                          color: '#333',
                          fontSize: '7px',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: 'normal',
                        }}>Graphic Designer</h3>
                        <p style={{
                          color: '#333',
                          fontSize: '6px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: 'normal',
                        }}>Creative Market / Chicago</p>
                        <p style={{
                          color: '#333',
                          fontSize: '6px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: 'normal',
                        }}>Manager</p>
                      </div>
                      <h3 style={{
                        color: '#333',
                        textAlign: 'right',
                        fontSize: '6px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                      }}>12/10/2020 - 12/10/2024</h3>
                    </div>
                    </div>
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
                  <div >
                    <div className='flex justify-between items-center'>
                      <div className="flex flex-col ">
                        <h3 style={{
                          color: '#333',
                          fontSize: '7px',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: 'normal',
                        }}>Oxford university</h3>
                        <p style={{
                          color: '#333',
                          fontSize: '6px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: 'normal',
                        }}>Masters - Computer science</p>
                      </div>
                      <h3 style={{
                        color: '#333',
                        textAlign: 'right',
                        fontSize: '6px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                      }}>2021</h3>
                    </div>
                    
                    <div className='flex justify-between items-center mt-2'>
                      <div className="flex flex-col">
                        <h3 style={{
                          color: '#333',
                          fontSize: '7px',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          lineHeight: 'normal',
                        }}>Oxford university</h3>
                        <p style={{
                          color: '#333',
                          fontSize: '6px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: 'normal',
                        }}>PHD - Computer science</p>
                      </div>
                      <h3 style={{
                        color: '#333',
                        textAlign: 'right',
                        fontSize: '6px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                      }}>2023</h3>
                    </div>
                  </div>
                </div>
                {/* Areas of expertise */}
                <div>
                  <div className="flex items-center gap-1 text-xs mb-1">
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
                  }}>Expert in crafting user-centered digital experiences that combine aesthetics with functionality. Skilled in UX/UI design, prototyping, and design strategy to deliver impactful and seamless products.</div>
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
                    <div>
                    <div className="flex flex-col">
                      <h3 style={{
                        color: '#333',
                        fontSize: '7px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                      }}>English</h3>
                      <p style={{
                        color: '#333',
                        fontSize: '6px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                      }}>Fluent</p>
                    </div>
                    <div className="flex flex-col mt-2">
                      <h3 style={{
                        color: '#333',
                        fontSize: '7px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                      }}>Spanish</h3>
                      <p style={{
                        color: '#333',
                        fontSize: '6px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: 'normal',
                      }}>Excellent</p>
                    </div>
                  </div>
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
