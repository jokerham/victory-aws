/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInstitute = /* GraphQL */ `
  query GetInstitute($id: ID!) {
    getInstitute(id: $id) {
      id
      title
      location
      representativeId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInstitutes = /* GraphQL */ `
  query ListInstitutes(
    $filter: ModelInstituteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstitutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        location
        representativeId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMembers = /* GraphQL */ `
  query GetMembers($id: ID!) {
    getMembers(id: $id) {
      id
      congnitoId
      name
      email
      contact
      instituteId
      weight
      approved
      profileImageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        congnitoId
        name
        email
        contact
        instituteId
        weight
        approved
        profileImageUrl
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTournaments = /* GraphQL */ `
  query GetTournaments($id: ID!) {
    getTournaments(id: $id) {
      id
      title
      location
      eventDate
      dueDate
      rings
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTournaments = /* GraphQL */ `
  query ListTournaments(
    $filter: ModelTournamentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        location
        eventDate
        dueDate
        rings
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
