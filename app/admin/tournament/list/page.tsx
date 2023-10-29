'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FcInspection } from 'react-icons/fc'
import { Tournaments } from '@/src/API'
import Article from '@/app/components/article'
import DataTable from '@/app/components/dataTable'
import "@/src/aws-exports"

type ErrorObject = {
  path: null;
  locations: null;
  message: string;
}

type ResponseData = {
  data: null;
  errors: ErrorObject[]
}

export default ({params}: {params: {approved: string}}) => {
  const router = useRouter();
  const approved = params.approved
  const [refreshKey, setRefreshKey] = useState(0)

  const columns = [
    { name: 'id', selector: (row: Tournaments) => row.id, omit: true },
    { name: '대회명', selector: (row: Tournaments) => row.title, sortable: true, grow: 1 },
    { name: '장소', selector: (row: Tournaments) => row.location, sortable: true, grow: 1 },
    { name: '개최일', selector: (row: Tournaments) => row.eventDate, sortable: true, grow: 1 },
    { name: '신청마감일', selector: (row: Tournaments) => row.dueDate, sortable: true, grow: 1 },
    { name: '경기장 수', selector: (row: Tournaments) => row.rings, sortable: true, grow: 1 },
  ];

  const title = '대회 목록'
  
  const onAdd = async() => {
    router.push(`/admin/tournament/new`)
  }

  const onEdit = async (values: Tournaments | [Tournaments]) => {
    if (!Array.isArray(values)) {
      router.push(`/admin/tournament/edit/${values.id}`)
    }
  }
  
  const onDelete = async (values: Tournaments | [Tournaments]) => {
    // await dbUsers.delete(values.id)
    // fetchData()
  }

  const buttons = [
    { name: 'add', action: onAdd },
    { name: 'edit', action: onEdit },
    { name: 'delete', action: onDelete }
  ]

  const graphqlFunction = 'listTournaments'
  const filter = `{}`
  const keyItems = '{ id }'
  const fetchItems = '{ id title location eventDate dueDate rings }'

  return (
    <main className="main">
      <div className="page-header">
        <div className="page-header__title">
          <FcInspection />
          대회 관리
        </div>
      </div>
      <Article>
        <DataTable
          key={refreshKey}
          title={title}
          columns={columns}
          buttons={buttons}
          graphqlFunction={graphqlFunction}
          filter={filter}
          keyItems={keyItems}
          fetchItems={fetchItems}
          selectableRowsSingle={false}
        />
      </Article>
    </main>
  )
}

// Refernece
// - https://react-data-table-component.netlify.app/?path=/docs/api-props--page
// - https://stackoverflow.com/questions/56106825/invoke-lambda-function-from-amplify-generated-react-app-without-using-api-gateway