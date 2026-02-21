import React, { useEffect } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { CustomDropdown } from './CustomDropdown';
import { useFormContext } from '../contexts/FormContext';

interface EducationProps {
  onNext: () => void;
}

export const Education: React.FC<EducationProps> = ({ onNext }) => {
  const { formData, updateEducation, commitToPreview } = useFormContext();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1979 + 1 }, (_, i) => ({
    label: (1980 + i).toString(),
    value: (1980 + i).toString(),
  }));

  const [nextId, setNextId] = React.useState(formData.education.length > 0 ? formData.education.length : 1);
  const [educationList, setEducationList] = React.useState(
    formData.education.length > 0
      ? formData.education.map(e => ({ ...e, level: e.degree.split(' - ')[0] || '', field: e.degree.split(' - ')[1] || '', school: e.institution }))
      : [{ id: 0, level: '', field: '', school: '', year: '' }]
  );

  useEffect(() => {
    const mappedData = educationList.map(e => ({
      id: e.id,
      institution: e.school,
      degree: `${e.level} - ${e.field}`,
      year: e.year
    }));
    updateEducation(mappedData);
  }, [educationList]);

  const handleChange = (id: number, key: string, value: string) => {
    setEducationList(list => 
      list.map(entry => 
        entry.id === id ? { ...entry, [key]: value } : entry
      )
    );
  };

  const handleAdd = () => {
    setEducationList(list => [...list, { id: nextId, level: '', field: '', school: '', year: '' }]);
    setNextId(nextId + 1);
  };

  const handleDelete = (id: number) => {
    setEducationList(list => list.filter(entry => entry.id !== id));
  };

  const allFilled = educationList.every(
    entry => entry.level && entry.field && entry.school && entry.year
  );

  return (
    <div className="bg-white flex flex-col gap-6 w-full mt-5">
      <div className="px-6 flex flex-col gap-6">
        {educationList.map((entry) => (
          <div key={entry.id} className="grid grid-cols-2 gap-6 relative">
            <Input
              label="Level of education"
              placeholder="e.g Masters"
              required
              value={entry.level}
              onChange={e => handleChange(entry.id, 'level', e.target.value)}
            />
            <Input
              label="Field of study"
              placeholder="e.g Computer science"
              required
              value={entry.field}
              onChange={e => handleChange(entry.id, 'field', e.target.value)}
            />
            <Input
              label="University / Collage / School"
              placeholder="e.g Oxford university"
              required
              value={entry.school}
              onChange={e => handleChange(entry.id, 'school', e.target.value)}
            />
            <CustomDropdown
              label="Passing Year"
              options={years}
              required
              value={entry.year}
              onChange={val => handleChange(entry.id, 'year', val)}
            />
            {/* Delete button */}
            {educationList.length > 1 && (
              <>
              <button
                type="button"
                onClick={() => handleDelete(entry.id)}
                className="flex items-center gap-1"
                style={{
                  gridColumn: '1 / -1',
                  color: 'var(--icon-status-destructive, #E6483D)',
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '20px',
                  letterSpacing: '-0.07px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontStyle: 'normal',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  marginTop: '8px',
                  justifyContent: 'flex-start',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M14.168 5.00002H18.3346V6.66669H16.668V17.5C16.668 17.721 16.5802 17.933 16.4239 18.0893C16.2676 18.2456 16.0556 18.3334 15.8346 18.3334H4.16797C3.94696 18.3334 3.73499 18.2456 3.57871 18.0893C3.42243 17.933 3.33464 17.721 3.33464 17.5L3.33464 6.66669H1.66797L1.66797 5.00002H5.83464V2.50002C5.83464 2.27901 5.92243 2.06704 6.07871 1.91076C6.23499 1.75448 6.44696 1.66669 6.66797 1.66669L13.3346 1.66669C13.5556 1.66669 13.7676 1.75448 13.9239 1.91076C14.0802 2.06704 14.168 2.27901 14.168 2.50002V5.00002ZM15.0013 6.66669L5.0013 6.66669L5.0013 16.6667H15.0013L15.0013 6.66669ZM7.5013 9.16669H9.16797L9.16797 14.1667L7.5013 14.1667L7.5013 9.16669ZM10.8346 9.16669H12.5013V14.1667H10.8346V9.16669ZM7.5013 3.33335V5.00002L12.5013 5.00002V3.33335L7.5013 3.33335Z" fill="#E6483D"/>
                </svg>
                Delete
              </button>

              <div
                style={{
                  gridColumn: '1 / -1',
                  width: '100%',
                  height: '1px',
                  background: 'var(--border-action-normal, #DEE0E3)',
                  marginTop: '4px',
                }}>
              </div>
              </>
            )}
          </div>
        ))}
        {/* Add More Button */}
        <div className="flex justify-end mt-2">
          <Button
            type="button"
            className="flex cursor-pointer items-center justify-center gap-1 rounded-xl shadow-xs"
            style={{
              color: '#00318B',
              fontSize: 14,
              fontWeight: 500,
              lineHeight: '20px',
              letterSpacing: '-0.07px',
              fontFamily: 'Montserrat, sans-serif',
              fontStyle: 'normal',
              padding: '10px 12px',
              background: 'transparent',
              borderRadius: 12,
            }}
            icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3.33333V12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3.33333 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>}
            onClick={handleAdd}
          >
            Add more
          </Button>
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
              cursor: 'pointer',
            }}
            disabled={!allFilled}
            onClick={() => {
              // Ensure context is updated with current state before committing
              const mappedData = educationList.map(e => ({
                id: e.id,
                institution: e.school,
                degree: `${e.level} - ${e.field}`,
                year: e.year
              }));
              updateEducation(mappedData);
              commitToPreview('education');
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
    </div>
  );
};
