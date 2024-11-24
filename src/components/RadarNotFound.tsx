interface RadarNotFoundProps {
  onBackClick: () => void;
}

export function RadarNotFound({ onBackClick }: RadarNotFoundProps) {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl font-bold mb-4">Radar not found</h1>
      <p className="text-muted-foreground mb-8">The radar you're looking for doesn't exist.</p>
      <button 
        onClick={onBackClick}
        className="text-primary hover:underline"
      >
        Return to dashboard
      </button>
    </div>
  )
}