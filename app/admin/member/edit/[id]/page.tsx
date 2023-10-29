import MemberDetailPage from '../../detail'

export default function MemberEditPage({params}: {params: {id: string}}) {
  return (
    <MemberDetailPage params={params} />
  )
}
