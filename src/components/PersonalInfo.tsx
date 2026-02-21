import React, { useState, useEffect } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { useFormContext } from '../contexts/FormContext';

interface PersonalInfoProps {
  onNext: () => void;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ onNext }) => {
  const { formData, updatePersonalInfo, commitToPreview } = useFormContext();
  
  // State for all fields
  const [fields, setFields] = useState({
    name: formData.personalInfo.name,
    job: formData.personalInfo.job,
    email: formData.personalInfo.email,
    phone: formData.personalInfo.phone,
    address: formData.personalInfo.address,
    linkedin: formData.personalInfo.linkedin,
    indeed: formData.personalInfo.indeed,
    behance: formData.personalInfo.behance,
    website: formData.personalInfo.website,
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  // State for photo upload
  const [photo, setPhoto] = useState<string | null>(formData.personalInfo.photo);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Validation functions
  const validateEmail = (email: string): string => {
    if (!email) return '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Please enter a valid email address';
  };

  const validatePhone = (phone: string): string => {
    if (!phone) return '';
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    const hasEnoughDigits = phone.replace(/\D/g, '').length >= 10;
    if (!phoneRegex.test(phone)) {
      return 'Please enter a valid phone number';
    }
    if (!hasEnoughDigits) {
      return 'Phone number must have at least 10 digits';
    }
    return '';
  };

  // Handle email change with validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFields(f => ({ ...f, email: value }));
    setErrors(prev => ({ ...prev, email: validateEmail(value) }));
  };

  // Handle phone change with validation
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow digits, spaces, dashes, parentheses, and plus sign
    const filteredValue = value.replace(/[^0-9\s\-\(\)\+]/g, '');
    setFields(f => ({ ...f, phone: filteredValue }));
    setErrors(prev => ({ ...prev, phone: validatePhone(filteredValue) }));
  };

  // Update context whenever fields change
  useEffect(() => {
    updatePersonalInfo({ ...fields, photo });
  }, [fields, photo]);

  const allFilled =
    fields.name && 
    fields.job && 
    fields.email && 
    fields.phone && 
    fields.address &&
    !errors.email &&
    !errors.phone;

  return (
    <div
      className="flex mt-5 flex-col items-start px-6 gap-6 self-stretch"
    >
      <div className="mb-4">
        
        <div className="flex items-center gap-6">
          <div
            className="flex items-center justify-center rounded-full overflow-hidden"
            style={{ width: '85px', height: '85px', background: 'rgba(0, 0, 0, 0.05)' }}
          >
            {photo ? (
              <img
                src={photo}
                alt="User photo"
                style={{ width: '85px', height: '85px', objectFit: 'cover' }}
              />
            ) : (
              <img
                src="/icon.svg"
                alt="User icon"
                style={{ width: '32px', height: '32px', objectFit: 'contain' }}
              />
            )}
          </div>
           <div className="flex flex-col items-start gap-2" style={{ width: 278 }}>
            <div className="flex items-center gap-6">
              <button
                type="button"
                className="flex items-center justify-center gap-1 rounded-xl shadow-xs cursor-pointer"
                style={{
                  padding: '10px 12px',
                  background: '#00318B',
                  color: '#FFF',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '20px',
                  letterSpacing: '-0.07px',
                  boxShadow: '0 1px 2px 0 rgba(20, 21, 26, 0.05)'
                }}
                onClick={() => fileInputRef.current?.click()}
              >
                Upload your photo
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/gif"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={e => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = ev => {
                        setPhoto(ev.target?.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-1 rounded-xl"
                style={{
                  padding: '10px 12px',
                  background: 'rgba(10, 15, 41, 0.04)',
                  color: '#14151A',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '20px',
                  letterSpacing: '-0.07px'
                }}
                onClick={() => setPhoto(null)}
              >
                Reset
              </button>
            </div>
            <div
              className="flex flex-col items-start gap-2"
              style={{ width: 278 }}
            >
              <span
                style={{
                  color: 'rgba(13, 17, 38, 0.40)',
                  fontFamily: 'Public Sans, sans-serif',
                  fontSize: 12,
                  fontWeight: 400,
                  lineHeight: '24px',
                  letterSpacing: 0,
                  fontFeatureSettings: '"liga" off, "clig" off'
                }}
              >
                Allowed JPG, GIF or PNG. Max size of 800K
              </span>
            </div>
          </div>
        </div>
         
      </div>

      <div className="w-full space-y-6 mb-8">
        <div className="grid grid-cols-2 gap-6">
          <Input label="Full name" placeholder="John Doe" required value={fields.name} onChange={e => setFields(f => ({ ...f, name: e.target.value }))} />
          <Input label="Job title" placeholder="Product Designer" required value={fields.job} onChange={e => setFields(f => ({ ...f, job: e.target.value }))} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Input label="Email address" type="email" placeholder="johndoe@email.com" required value={fields.email} onChange={handleEmailChange} error={errors.email} />
          <Input label="Phone number" placeholder="(123) 456-7890" required value={fields.phone} onChange={handlePhoneChange} error={errors.phone} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <label
              className="flex items-start gap-0 self-stretch mb-2"
              style={{ padding: 0 }}
            >
              <span
                style={{
                  color: '#14151A',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '20px',
                  letterSpacing: '-0.07px',
                }}
              >
                Address
              </span>
              <span
                style={{
                  color: '#E6483D',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px',
                  letterSpacing: '-0.07px',
                  marginLeft: 2
                }}
              >
                *
              </span>
            </label>
            <textarea
              required
              placeholder="123 Main St, City, Country"
              rows={2}
              className="w-full flex items-center rounded-xl border border-[#DEE0E3] bg-white"
              style={{
                padding: '10px 12px',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 14,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '-0.07px',
                borderRadius: 12,
                resize: 'none',
              }}
              value={fields.address}
              onChange={e => setFields(f => ({ ...f, address: e.target.value }))}
            />
          </div>
        
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Input label="LinkedIn" type='url' placeholder="linkedin.com/in/johndoe" value={fields.linkedin} onChange={e => setFields(f => ({ ...f, linkedin: e.target.value }))} />
          <Input label="Indeed" type='url' placeholder="indeed.com/profile/johndoe" value={fields.indeed} onChange={e => setFields(f => ({ ...f, indeed: e.target.value }))} />
         
        </div>
        
        <div  className="grid grid-cols-2 gap-6">
        <Input label="Behance" type='url' placeholder="behance.net/johndoe" value={fields.behance} onChange={e => setFields(f => ({ ...f, behance: e.target.value }))} />
        <Input label="Website" placeholder="johndoe.com" value={fields.website} onChange={e => setFields(f => ({ ...f, website: e.target.value }))} />
        </div>
        
      </div>

      <div className="flex w-full justify-end mb-6">
        <Button
          type="button"
          className="flex items-center justify-center gap-1 rounded-xl shadow-xs"
          style={{
            padding: '10px 12px',
            background: allFilled ? '#00318B' : '#E9EAEC',
            color: allFilled ? '#FFF' : 'rgba(10, 15, 41, 0.25)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '-0.07px',
            boxShadow: '0 1px 2px 0 rgba(20, 21, 26, 0.05)',
            borderRadius: 12,
            cursor: 'pointer',
          }}
          disabled={!allFilled}
          onClick={() => {
            updatePersonalInfo({ ...fields, photo });
            commitToPreview('personalInfo');
            onNext();
          }}
        >
          Next
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: 6 }}>
            <path d="M13.4773 9.1664L9.00732 4.6964L10.1857 3.51807L16.6673 9.99973L10.1857 16.4814L9.00732 15.3031L13.4773 10.8331H3.33398V9.1664H13.4773Z" fill={allFilled ? '#FFF' : '#0A0F29'} fillOpacity={allFilled ? 1 : 0.25}/>
          </svg>
        </Button>
      </div>
    </div>
  );
};
