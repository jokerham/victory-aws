import { API, graphqlOperation } from "aws-amplify"
import "@/src/aws-exports"

export class DataTablePaginationData {
  public currentPage: number
  public recordsPerPage: number
  private totalRecords: number = 0
  private keys: any[] = []
  private records: any[] = []
  private graphqlFunction: string
  private getTotalKeysQuery: string
  private getTotalRecordsQuery: string

  constructor(
    graphqlFunction: string,
    filter: string,
    keyItems: string,
    fetchItems: string,
    currentPage?: number,
    recordsPerPage?: number
  ) {
    this.currentPage = currentPage ?? 1
    this.recordsPerPage = recordsPerPage ?? 10
    this.graphqlFunction = graphqlFunction
    this.getTotalKeysQuery = `query TotalKeys { ${graphqlFunction} ( filter: ${filter} ) {items ${keyItems} } }`
    this.getTotalRecordsQuery = `query RecordsByPage ( $limit: Int, $nextToken: String ) {
        ${graphqlFunction} ( filter: ${filter} limit: $limit nextToken: $nextToken )
        { items ${fetchItems} nextToken } }`
  }

  public getTotalRecords = () => {
    return this.totalRecords
  }

  public async fetchData() {
    if (this.keys.length == 0) {
      await this.getKeys()
    }
    await this.getRecords()
    return this.records;
  }

  public async setPage(page: number) {
    this.currentPage = page
    await this.fetchData()
  }

  public async changeRecordsPerPage(recordsPerPage: number, page: number) {
    this.recordsPerPage = recordsPerPage
    await this.fetchData()
  }

  private async getKeys() {
    try {
      const response = await API.graphql(graphqlOperation(this.getTotalKeysQuery))
      this.keys = eval(`response.data.${this.graphqlFunction}.items`)
      this.totalRecords = this.keys.length
      //console.log("Keys", this.keys)
    } catch (error) {
      console.log(error)
    }
  }
  
  private async getRecords() {
    try {
      const skip = (this.currentPage - 1) * this.recordsPerPage;
      const limit = this.recordsPerPage.toString()
      const nextToken = (skip >0 && skip < this.totalRecords) ? `${this.keys[skip]}` : ''
      //console.log(skip, limit, nextToken)
      const response = await API.graphql(graphqlOperation(this.getTotalRecordsQuery),
        { limit: limit, nextToken: nextToken })
      this.records = eval(`response.data.${this.graphqlFunction}.items`)
      //console.log("Records", this.records)
    } catch (error) {
      console.log(error)
    }
  }
}