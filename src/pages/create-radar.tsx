import { useNavigate } from 'react-router-dom';
import { RadarForm } from '@/components/RadarForm';
import { useRadars } from '@/hooks/use-radars';
import type { RadarFormData } from '@/types';

export function CreateRadarPage() {
  const navigate = useNavigate();
  const { createRadar } = useRadars();

  return (
    <RadarForm
      data={{}}
      onSubmit={(data: RadarFormData) => {
        createRadar(data);
        navigate('/');
      }}
      onBack={() => navigate('/')}
    />
  );
}