'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FcInspection } from 'react-icons/fc'
import { API, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { Members } from '@/src/API'
import { batchApproveMembers } from '@/src/graphql/mutations'
import Article from '@/app/components/article'
import DataTable from '@/app/components/dataTable'
import { showToastMessage } from '@/app/components/toastMessage';
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
  const [refreshKey, setRefreshKey] = useState(0);

  const columns = [
    { name: 'id', selector: (row: Members) => row.id, omit: true },
    { name: '이름', selector: (row: Members) => row.name, sortable: true, grow: 1 },
    { name: '단체', selector: (row: Members) => row.instituteId, sortable: true, grow: 1 },
    { name: '이메일', selector: (row: Members) => row.email, sortable: true, grow: 1 },
    { name: '연락처', selector: (row: Members) => row.contact, sortable: true, grow: 1 },
  ];

  const title = ( approved == 'approved') ?
    '승인 회원 목록' : 
    '미승인 회원 목록';
  
  const onEdit = async (values: Members | [Members]) => {
    if (!Array.isArray(values)) {
      router.push(`/admin/member/edit/${values.id}`)
    }
  }
  
  const onDelete = async (values: Members | [Members]) => {
    // await dbUsers.delete(values.id)
    // fetchData()
  }

  const onApprove = async (values: Members | [Members]) => {
    const ids = Array.isArray(values) ? 
      values.map((member) => member.id) :
      [values.id]

    try {
      const response = await API.graphql({
        query: batchApproveMembers,
        variables: {input: {membersIds: ids}},
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });
      showToastMessage("정상적으로 승인이 되었습니다.", "success")
      setRefreshKey(prevKey => prevKey + 1)
    } catch (e) {
      for(const error of (e as ResponseData)?.errors) {
        showToastMessage(error.message, "error")
      }
      console.log(e)
    }
  }

  const buttons = (approved == "approved") ? 
    [
      { name: 'edit', action: onEdit },
      { name: 'delete', action: onDelete }
    ] : [
      { name: 'approve', action: onApprove }
    ]

  const graphqlFunction = 'listMembers'
  const filter = `{ approved: {eq: "${approved=='approved'}" } }`
  const keyItems = '{ id }'
  const fetchItems = '{ id name email contact instituteId }'

  return (
    <main className="main">
      <div className="page-header">
        <div className="page-header__title">
          <FcInspection />
          회원 관리
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