'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FcInspection } from 'react-icons/fc'
import { Institute } from '@/src/API'
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

export default () => {
  const router = useRouter();
  const [refreshKey, setRefreshKey] = useState(0);

  const columns = [
    { name: 'id', selector: (row: Institute) => row.id, omit: true },
    { name: '이름', selector: (row: Institute) => row.title, sortable: true, grow: 1 },
    { name: '대표자', selector: (row: Institute) => row.representativeId, sortable: true, grow: 1 },
    { name: '주소', selector: (row: Institute) => row.location, sortable: true, grow: 1 },
  ]

  const title = '단체 목록'
  
  const onEdit = async (values: Institute | [Institute]) => {
    if (!Array.isArray(values)) {
      router.push(`/admin/institute/edit/${values.id}`)
    }
  }
  
  const onDelete = async (values: Institute | [Institute]) => {
    // await dbUsers.delete(values.id)
    // fetchData()
  }

  const buttons = [
    { name: 'edit', action: onEdit },
    { name: 'delete', action: onDelete }
  ]

  const graphqlFunction = 'listInstitutes'
  const filter = `{ }`
  const keyItems = '{ id }'
  const fetchItems = '{ id title representativeId createdAt location }'

  return (
    <main className="main">
      <div className="page-header">
        <div className="page-header__title">
          <FcInspection />
          단체 관리
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