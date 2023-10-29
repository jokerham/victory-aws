import TournamentDetailPage from '../../detail'

export default function TournamentEditPage({params}: {params: {id: string}}) {
  return (
    <TournamentDetailPage params={params} />
  )
}
