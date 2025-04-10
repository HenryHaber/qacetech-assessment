import { useState } from 'react';
import { FormForYampa } from './FormForYampa';
import FormForTampa from '@/components/FormForTampa';

const LocationTabs = () => {
  const [selectedLocation, setSelectedLocation] = useState('yampa');

  return (
      <div className="mt-4 p-5">
        <div className="flex gap-4">
          <label>
            <input
                type="radio"
                name="location"
                value="yampa"
                checked={selectedLocation === 'yampa'}
                onChange={(e) => setSelectedLocation(e.target.value)}
            />
            Yampa (FL)
          </label>
          <label>
            <input
                type="radio"
                name="location"
                value="tampa"
                checked={selectedLocation === 'tampa'}
                onChange={(e) => setSelectedLocation(e.target.value)}
            />
            Tampa (FL)
          </label>
        </div>
        <div className="mt-4">
          {selectedLocation === 'yampa' && <FormForYampa />}
          {selectedLocation === 'tampa' && <FormForTampa />}
        </div>
      </div>
  );
};

export default LocationTabs;