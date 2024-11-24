import { useNavigate } from 'react-router-dom'
import { RadarList } from '@/components/RadarList'
import { RecentPostsTable } from '@/components/recent-posts-table'
import { useRadars } from '@/hooks/use-radars'

export function HomePage() {
  const navigate = useNavigate()
  const { radars } = useRadars()

  return (
    <div className="space-y-8">
      <RadarList
        radars={radars}
        onSelect={(id) => navigate(`/radar/${id}`)}
        onCreate={() => navigate('/create')}
      />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Results</h2>
        <RecentPostsTable radars={radars} />
      </div>
    </div>
  )
}