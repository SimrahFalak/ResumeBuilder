import React, { useEffect } from 'react';
import { Button } from './Button';
import { RichTextEditor } from './RichTextEditor';
import { useFormContext } from '../contexts/FormContext';

interface AboutMeProps {
  onNext: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onNext }) => {
  const { formData, updateAboutMe } = useFormContext();
  const [about, setAbout] = React.useState(formData.aboutMe);
  
  useEffect(() => {
    updateAboutMe(about);
  }, [about]);
  
  const allFilled = about.trim().length > 0;
  return (
    <div className="bg-white flex flex-col gap-6 w-full mt-5">
      <div className="px-6 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          
          <RichTextEditor
            placeholder="Write your message..."
            onChange={setAbout}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
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
            }}
            disabled={!allFilled}
            onClick={onNext}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: 6 }}>
              <path d="M13.4773 9.1664L9.00732 4.6964L10.1857 3.51807L16.6673 9.99973L10.1857 16.4814L9.00732 15.3031L13.4773 10.8331H3.33398V9.1664H13.4773Z" fill={allFilled ? '#FFF' : '#0A0F29'} fillOpacity={allFilled ? 1 : 0.25}/>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};
