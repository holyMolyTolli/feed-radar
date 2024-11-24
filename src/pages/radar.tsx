import { useNavigate, useParams } from 'react-router-dom';
import { RadarEdit } from '@/components/RadarEdit';
import { RadarNotFound } from '@/components/RadarNotFound';
import { useRadars } from '@/hooks/use-radars';
import type { RadarFormData } from '@/types';

export function RadarPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { radars, updateRadar } = useRadars();
  
  const radar = radars.find(r => r.id === id);

  const handleSubmit = (data: RadarFormData) => {
    if (id) {
      updateRadar(id, data);
      navigate('/');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  if (!radar) {
    return <RadarNotFound onBackClick={handleBack} />;
  }

  return (
    <RadarEdit
      radar={radar}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  );
}