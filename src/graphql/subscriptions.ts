/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInstitute = /* GraphQL */ `
  subscription OnCreateInstitute(
    $filter: ModelSubscriptionInstituteFilterInput
    $representativeId: String
  ) {
    onCreateInstitute(filter: $filter, representativeId: $representativeId) {
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
export const onUpdateInstitute = /* GraphQL */ `
  subscription OnUpdateInstitute(
    $filter: ModelSubscriptionInstituteFilterInput
    $representativeId: String
  ) {
    onUpdateInstitute(filter: $filter, representativeId: $representativeId) {
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
export const onDeleteInstitute = /* GraphQL */ `
  subscription OnDeleteInstitute(
    $filter: ModelSubscriptionInstituteFilterInput
    $representativeId: String
  ) {
    onDeleteInstitute(filter: $filter, representativeId: $representativeId) {
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
export const onCreateMembers = /* GraphQL */ `
  subscription OnCreateMembers(
    $filter: ModelSubscriptionMembersFilterInput
    $congnitoId: String
  ) {
    onCreateMembers(filter: $filter, congnitoId: $congnitoId) {
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
export const onUpdateMembers = /* GraphQL */ `
  subscription OnUpdateMembers(
    $filter: ModelSubscriptionMembersFilterInput
    $congnitoId: String
  ) {
    onUpdateMembers(filter: $filter, congnitoId: $congnitoId) {
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
export const onDeleteMembers = /* GraphQL */ `
  subscription OnDeleteMembers(
    $filter: ModelSubscriptionMembersFilterInput
    $congnitoId: String
  ) {
    onDeleteMembers(filter: $filter, congnitoId: $congnitoId) {
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
export const onCreateTournaments = /* GraphQL */ `
  subscription OnCreateTournaments(
    $filter: ModelSubscriptionTournamentsFilterInput
  ) {
    onCreateTournaments(filter: $filter) {
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
export const onUpdateTournaments = /* GraphQL */ `
  subscription OnUpdateTournaments(
    $filter: ModelSubscriptionTournamentsFilterInput
  ) {
    onUpdateTournaments(filter: $filter) {
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
export const onDeleteTournaments = /* GraphQL */ `
  subscription OnDeleteTournaments(
    $filter: ModelSubscriptionTournamentsFilterInput
  ) {
    onDeleteTournaments(filter: $filter) {
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
