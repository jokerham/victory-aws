/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInstituteInput = {
  id?: string | null,
  title: string,
  location?: string | null,
  representativeId?: string | null,
};

export type ModelInstituteConditionInput = {
  title?: ModelStringInput | null,
  location?: ModelStringInput | null,
  representativeId?: ModelStringInput | null,
  and?: Array< ModelInstituteConditionInput | null > | null,
  or?: Array< ModelInstituteConditionInput | null > | null,
  not?: ModelInstituteConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Institute = {
  __typename: "Institute",
  id: string,
  title: string,
  location?: string | null,
  representativeId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInstituteInput = {
  id: string,
  title?: string | null,
  location?: string | null,
  representativeId?: string | null,
};

export type DeleteInstituteInput = {
  id: string,
};

export type CreateMembersInput = {
  id?: string | null,
  congnitoId?: string | null,
  name: string,
  email: string,
  contact?: string | null,
  instituteId?: string | null,
  weight?: number | null,
  approved?: string | null,
  profileImageUrl?: string | null,
};

export type ModelMembersConditionInput = {
  congnitoId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  instituteId?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  approved?: ModelStringInput | null,
  profileImageUrl?: ModelStringInput | null,
  and?: Array< ModelMembersConditionInput | null > | null,
  or?: Array< ModelMembersConditionInput | null > | null,
  not?: ModelMembersConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Members = {
  __typename: "Members",
  id: string,
  congnitoId?: string | null,
  name: string,
  email: string,
  contact?: string | null,
  instituteId?: string | null,
  weight?: number | null,
  approved?: string | null,
  profileImageUrl?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMembersInput = {
  id: string,
  congnitoId?: string | null,
  name?: string | null,
  email?: string | null,
  contact?: string | null,
  instituteId?: string | null,
  weight?: number | null,
  approved?: string | null,
  profileImageUrl?: string | null,
};

export type DeleteMembersInput = {
  id: string,
};

export type CreateTournamentsInput = {
  id?: string | null,
  title: string,
  location?: string | null,
  eventDate?: string | null,
  dueDate?: string | null,
  rings?: number | null,
};

export type ModelTournamentsConditionInput = {
  title?: ModelStringInput | null,
  location?: ModelStringInput | null,
  eventDate?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  rings?: ModelIntInput | null,
  and?: Array< ModelTournamentsConditionInput | null > | null,
  or?: Array< ModelTournamentsConditionInput | null > | null,
  not?: ModelTournamentsConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Tournaments = {
  __typename: "Tournaments",
  id: string,
  title: string,
  location?: string | null,
  eventDate?: string | null,
  dueDate?: string | null,
  rings?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTournamentsInput = {
  id: string,
  title?: string | null,
  location?: string | null,
  eventDate?: string | null,
  dueDate?: string | null,
  rings?: number | null,
};

export type DeleteTournamentsInput = {
  id: string,
};

export type BatchApproveMembersInput = {
  membersIds?: Array< string | null > | null,
};

export type ModelInstituteFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  location?: ModelStringInput | null,
  representativeId?: ModelStringInput | null,
  and?: Array< ModelInstituteFilterInput | null > | null,
  or?: Array< ModelInstituteFilterInput | null > | null,
  not?: ModelInstituteFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelInstituteConnection = {
  __typename: "ModelInstituteConnection",
  items:  Array<Institute | null >,
  nextToken?: string | null,
};

export type ModelMembersFilterInput = {
  id?: ModelIDInput | null,
  congnitoId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  contact?: ModelStringInput | null,
  instituteId?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  approved?: ModelStringInput | null,
  profileImageUrl?: ModelStringInput | null,
  and?: Array< ModelMembersFilterInput | null > | null,
  or?: Array< ModelMembersFilterInput | null > | null,
  not?: ModelMembersFilterInput | null,
};

export type ModelMembersConnection = {
  __typename: "ModelMembersConnection",
  items:  Array<Members | null >,
  nextToken?: string | null,
};

export type ModelTournamentsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  location?: ModelStringInput | null,
  eventDate?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  rings?: ModelIntInput | null,
  and?: Array< ModelTournamentsFilterInput | null > | null,
  or?: Array< ModelTournamentsFilterInput | null > | null,
  not?: ModelTournamentsFilterInput | null,
};

export type ModelTournamentsConnection = {
  __typename: "ModelTournamentsConnection",
  items:  Array<Tournaments | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionInstituteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInstituteFilterInput | null > | null,
  or?: Array< ModelSubscriptionInstituteFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionMembersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  contact?: ModelSubscriptionStringInput | null,
  instituteId?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  approved?: ModelSubscriptionStringInput | null,
  profileImageUrl?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMembersFilterInput | null > | null,
  or?: Array< ModelSubscriptionMembersFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTournamentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  eventDate?: ModelSubscriptionStringInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  rings?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionTournamentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionTournamentsFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateInstituteMutationVariables = {
  input: CreateInstituteInput,
  condition?: ModelInstituteConditionInput | null,
};

export type CreateInstituteMutation = {
  createInstitute?:  {
    __typename: "Institute",
    id: string,
    title: string,
    location?: string | null,
    representativeId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInstituteMutationVariables = {
  input: UpdateInstituteInput,
  condition?: ModelInstituteConditionInput | null,
};

export type UpdateInstituteMutation = {
  updateInstitute?:  {
    __typename: "Institute",
    id: string,
    title: string,
    location?: string | null,
    representativeId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInstituteMutationVariables = {
  input: DeleteInstituteInput,
  condition?: ModelInstituteConditionInput | null,
};

export type DeleteInstituteMutation = {
  deleteInstitute?:  {
    __typename: "Institute",
    id: string,
    title: string,
    location?: string | null,
    representativeId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMembersMutationVariables = {
  input: CreateMembersInput,
  condition?: ModelMembersConditionInput | null,
};

export type CreateMembersMutation = {
  createMembers?:  {
    __typename: "Members",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    instituteId?: string | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMembersMutationVariables = {
  input: UpdateMembersInput,
  condition?: ModelMembersConditionInput | null,
};

export type UpdateMembersMutation = {
  updateMembers?:  {
    __typename: "Members",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    instituteId?: string | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMembersMutationVariables = {
  input: DeleteMembersInput,
  condition?: ModelMembersConditionInput | null,
};

export type DeleteMembersMutation = {
  deleteMembers?:  {
    __typename: "Members",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    instituteId?: string | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTournamentsMutationVariables = {
  input: CreateTournamentsInput,
  condition?: ModelTournamentsConditionInput | null,
};

export type CreateTournamentsMutation = {
  createTournaments?:  {
    __typename: "Tournaments",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTournamentsMutationVariables = {
  input: UpdateTournamentsInput,
  condition?: ModelTournamentsConditionInput | null,
};

export type UpdateTournamentsMutation = {
  updateTournaments?:  {
    __typename: "Tournaments",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTournamentsMutationVariables = {
  input: DeleteTournamentsInput,
  condition?: ModelTournamentsConditionInput | null,
};

export type DeleteTournamentsMutation = {
  deleteTournaments?:  {
    __typename: "Tournaments",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type BatchApproveMembersMutationVariables = {
  input?: BatchApproveMembersInput | null,
};

export type BatchApproveMembersMutation = {
  batchApproveMembers?: string | null,
};

export type GetInstituteQueryVariables = {
  id: string,
};

export type GetInstituteQuery = {
  getInstitute?:  {
    __typename: "Institute",
    id: string,
    title: string,
    location?: string | null,
    representativeId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInstitutesQueryVariables = {
  filter?: ModelInstituteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstitutesQuery = {
  listInstitutes?:  {
    __typename: "ModelInstituteConnection",
    items:  Array< {
      __typename: "Institute",
      id: string,
      title: string,
      location?: string | null,
      representativeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMembersQueryVariables = {
  id: string,
};

export type GetMembersQuery = {
  getMembers?:  {
    __typename: "Members",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    instituteId?: string | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMembersQueryVariables = {
  filter?: ModelMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersQuery = {
  listMembers?:  {
    __typename: "ModelMembersConnection",
    items:  Array< {
      __typename: "Members",
      id: string,
      congnitoId?: string | null,
      name: string,
      email: string,
      contact?: string | null,
      instituteId?: string | null,
      weight?: number | null,
      approved?: string | null,
      profileImageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTournamentsQueryVariables = {
  id: string,
};

export type GetTournamentsQuery = {
  getTournaments?:  {
    __typename: "Tournaments",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTournamentsQueryVariables = {
  filter?: ModelTournamentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTournamentsQuery = {
  listTournaments?:  {
    __typename: "ModelTournamentsConnection",
    items:  Array< {
      __typename: "Tournaments",
      id: string,
      title: string,
      location?: string | null,
      eventDate?: string | null,
      dueDate?: string | null,
      rings?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateInstituteSubscriptionVariables = {
  filter?: ModelSubscriptionInstituteFilterInput | null,
  representativeId?: string | null,
};

export type OnCreateInstituteSubscription = {
  onCreateInstitute?:  {
    __typename: "Institute",
    id: string,
    title: string,
    location?: string | null,
    representativeId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInstituteSubscriptionVariables = {
  filter?: ModelSubscriptionInstituteFilterInput | null,
  representativeId?: string | null,
};

export type OnUpdateInstituteSubscription = {
  onUpdateInstitute?:  {
    __typename: "Institute",
    id: string,
    title: string,
    location?: string | null,
    representativeId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInstituteSubscriptionVariables = {
  filter?: ModelSubscriptionInstituteFilterInput | null,
  representativeId?: string | null,
};

export type OnDeleteInstituteSubscription = {
  onDeleteInstitute?:  {
    __typename: "Institute",
    id: string,
    title: string,
    location?: string | null,
    representativeId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMembersSubscriptionVariables = {
  filter?: ModelSubscriptionMembersFilterInput | null,
  congnitoId?: string | null,
};

export type OnCreateMembersSubscription = {
  onCreateMembers?:  {
    __typename: "Members",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    instituteId?: string | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMembersSubscriptionVariables = {
  filter?: ModelSubscriptionMembersFilterInput | null,
  congnitoId?: string | null,
};

export type OnUpdateMembersSubscription = {
  onUpdateMembers?:  {
    __typename: "Members",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    instituteId?: string | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMembersSubscriptionVariables = {
  filter?: ModelSubscriptionMembersFilterInput | null,
  congnitoId?: string | null,
};

export type OnDeleteMembersSubscription = {
  onDeleteMembers?:  {
    __typename: "Members",
    id: string,
    congnitoId?: string | null,
    name: string,
    email: string,
    contact?: string | null,
    instituteId?: string | null,
    weight?: number | null,
    approved?: string | null,
    profileImageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTournamentsSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentsFilterInput | null,
};

export type OnCreateTournamentsSubscription = {
  onCreateTournaments?:  {
    __typename: "Tournaments",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTournamentsSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentsFilterInput | null,
};

export type OnUpdateTournamentsSubscription = {
  onUpdateTournaments?:  {
    __typename: "Tournaments",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTournamentsSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentsFilterInput | null,
};

export type OnDeleteTournamentsSubscription = {
  onDeleteTournaments?:  {
    __typename: "Tournaments",
    id: string,
    title: string,
    location?: string | null,
    eventDate?: string | null,
    dueDate?: string | null,
    rings?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
