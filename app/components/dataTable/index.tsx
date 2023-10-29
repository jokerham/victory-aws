'use client'

import { useState, useEffect, ReactNode } from 'react'
import DataTable from 'react-data-table-component'
import Checkbox from "@mui/material/Checkbox";
import ReactLoading from 'react-loading'
import ArticleCard from '../article/card';
import { DataTablePaginationData } from '@/app/admin/services/dataTablePaginationHelper'
import DataTableButtons from './dataTableButtons'
import { title } from 'process';

export interface IDataTableProps {
  title: string
  columns: any[]
  buttons: any
  page?: number
  perPage?: number
  graphqlFunction: string
  filter: string
  keyItems: string
  fetchItems: string
  selectableRowsSingle: boolean
}

export default (props: IDataTableProps) => {
  const {
    title, columns, buttons, graphqlFunction, filter, keyItems, fetchItems, selectableRowsSingle
  } = props

  const [pending, setPending] = useState(true)
  const [data, setData] = useState<any[]>([])
  const [editButtonDisabled, setEditButtonDisabled] = useState(true);
  const [rowValue, setRowValue] = useState<{} | [{}]>({});

  const dataTablePaginationData = new DataTablePaginationData(
    graphqlFunction, filter, keyItems, fetchItems
  )
  
  const fetchData = async () => {
    const data = await dataTablePaginationData.fetchData()
    setData(data)
    setPending(false)
  }

  const NoData = () => {
    return (
      <div className='page-body__card_datatable_noData'>
        조회 할 데이터 없습니다.
      </div>
    );
  }

  const handleSelectedRowChange = (selected: {allSelected: boolean, selectedCount: number, selectedRows: number[]}) => {
    setEditButtonDisabled(selected.selectedCount === 0)
    const rowValue = 
      selected.selectedCount === 0 ? {} :
      selected.selectedCount === 1 ? selected.selectedRows[0] : 
      selected.selectedRows
    setRowValue(rowValue)
  }

  const paginationTotalRows = dataTablePaginationData.getTotalRecords();
  const handlePerRowsChange = (recordsPerPage: number, page: number) => {
    dataTablePaginationData.changeRecordsPerPage(recordsPerPage, page)
  }
  const handlePageChange = (page: number) => {
    dataTablePaginationData.setPage(page)
  }

  const paginationComponentOptions = {
    rowsPerPageText: '페이지당 조회 갯수',
    rangeSeparatorText: '중',
    selectAllRowsItem: true,
    selectAllRowsItemText: '전체',
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <ArticleCard>
      <div className='page-body__card_title'>{title}</div>
      <div className="page-body__card_datatable">
        <DataTable
          columns={columns}
          data={data}
          noDataComponent={<NoData />}
          persistTableHead={true}
          noContextMenu={true}
          selectableRows={true}
          selectableRowsHighlight={true}
          selectableRowsComponent={Checkbox as unknown as ReactNode}
          selectableRowsSingle={selectableRowsSingle}
          onSelectedRowsChange={handleSelectedRowChange}
          pagination
          paginationServer
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          paginationTotalRows={paginationTotalRows}
          paginationComponentOptions={paginationComponentOptions}
          progressPending={pending}
          progressComponent={
            <ReactLoading type="bubbles" color="#888888" />
          }
        />
      </div>
      <DataTableButtons
        buttons={buttons}
        valuesOnSelectedRow={rowValue}
        editButtonDisabled={editButtonDisabled}
      />
    </ArticleCard>
  )
}

// Reference : 
// - https://react-data-table-component.netlify.app/
