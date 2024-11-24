import { RadarForm } from './RadarForm'
import { RadarResults } from './RadarResults'
import type { Radar, RadarFormData } from '@/types'

interface RadarEditProps {
  radar: Radar;
  onSubmit: (data: RadarFormData) => void;
  onBack: () => void;
}

export function RadarEdit({ radar, onSubmit, onBack }: RadarEditProps) {
  return (
    <div className="space-y-8">
      <RadarForm
        data={radar}
        onSubmit={onSubmit}
        onBack={onBack}
      />
      {radar.runs && radar.runs.length > 0 && (
        <RadarResults runs={radar.runs} />
      )}
    </div>
  )
}