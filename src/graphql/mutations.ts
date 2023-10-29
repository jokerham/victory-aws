/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInstitute = /* GraphQL */ `
  mutation CreateInstitute(
    $input: CreateInstituteInput!
    $condition: ModelInstituteConditionInput
  ) {
    createInstitute(input: $input, condition: $condition) {
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
export const updateInstitute = /* GraphQL */ `
  mutation UpdateInstitute(
    $input: UpdateInstituteInput!
    $condition: ModelInstituteConditionInput
  ) {
    updateInstitute(input: $input, condition: $condition) {
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
export const deleteInstitute = /* GraphQL */ `
  mutation DeleteInstitute(
    $input: DeleteInstituteInput!
    $condition: ModelInstituteConditionInput
  ) {
    deleteInstitute(input: $input, condition: $condition) {
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
export const createMembers = /* GraphQL */ `
  mutation CreateMembers(
    $input: CreateMembersInput!
    $condition: ModelMembersConditionInput
  ) {
    createMembers(input: $input, condition: $condition) {
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
export const updateMembers = /* GraphQL */ `
  mutation UpdateMembers(
    $input: UpdateMembersInput!
    $condition: ModelMembersConditionInput
  ) {
    updateMembers(input: $input, condition: $condition) {
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
export const deleteMembers = /* GraphQL */ `
  mutation DeleteMembers(
    $input: DeleteMembersInput!
    $condition: ModelMembersConditionInput
  ) {
    deleteMembers(input: $input, condition: $condition) {
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
export const createTournaments = /* GraphQL */ `
  mutation CreateTournaments(
    $input: CreateTournamentsInput!
    $condition: ModelTournamentsConditionInput
  ) {
    createTournaments(input: $input, condition: $condition) {
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
export const updateTournaments = /* GraphQL */ `
  mutation UpdateTournaments(
    $input: UpdateTournamentsInput!
    $condition: ModelTournamentsConditionInput
  ) {
    updateTournaments(input: $input, condition: $condition) {
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
export const deleteTournaments = /* GraphQL */ `
  mutation DeleteTournaments(
    $input: DeleteTournamentsInput!
    $condition: ModelTournamentsConditionInput
  ) {
    deleteTournaments(input: $input, condition: $condition) {
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
export const batchApproveMembers = /* GraphQL */ `
  mutation BatchApproveMembers($input: BatchApproveMembersInput) {
    batchApproveMembers(input: $input)
  }
`;
