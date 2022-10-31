import * as Types from '../axios-client';

import { useQuery, UseQueryResult, QueryFunctionContext, UseQueryOptions, QueryClient, QueryKey, useMutation, MutationKey, UseMutationOptions, UseMutationResult, QueryMeta, MutationMeta } from '@tanstack/react-query';
import { QueryMetaContext, QueryMetaContextValue } from 'react-query-swagger';
import { useContext } from 'react';
import { addMetaToOptions,  trimArrayEnd, isParameterObject, getBaseUrl } from './helpers';
export const Client = Types.Client;

export type UploadFileMutationParameters = {
  additionalMetadata?: string | null | undefined ; 
  file?: Types.FileParameter | null | undefined ; 
};

export type FindPetsByStatusQueryParameters = {
  status: Types.Status[];
};

export type FindPetsByTagsQueryParameters = {
  tags: string[];
};

export type GetPetByIdQueryParameters = {
  petId: number;
};

export type UpdatePetWithFormMutationParameters = {
  name?: string | null | undefined ; 
  status?: string | null | undefined ; 
};

export type GetOrderByIdQueryParameters = {
  orderId: number;
};

export type GetUserByNameQueryParameters = {
  username: string;
};

export type LoginUserQueryParameters = {
  username: string;
  password: string;
};

    
export function uploadFileUrl(petId: number): string {
  let url_ = getBaseUrl() + "/pet/{petId}/uploadImage";

if (petId === undefined || petId === null)
  throw new Error("The parameter 'petId' must be defined.");
url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function uploadFileMutationKey(petId: number): MutationKey {
  return trimArrayEnd([
      'Client',
      'uploadFile',
      petId as any,
    ]);
}

/**
 * uploads an image
 * @param petId ID of pet to update
 * @param additionalMetadata (optional) Additional data to pass to server
 * @param file (optional) file to upload
 * @return successful operation
 */
export function useUploadFileMutation<TContext>(petId: number, options?: Omit<UseMutationOptions<Types.ApiResponse, unknown, UploadFileMutationParameters, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<Types.ApiResponse, unknown, UploadFileMutationParameters, TContext> {
  const key = uploadFileMutationKey(petId);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((uploadFileMutationParameters: UploadFileMutationParameters) => Types.Client.uploadFile(petId, uploadFileMutationParameters.additionalMetadata, uploadFileMutationParameters.file), {...options, mutationKey: key});
}
  
    
export function addPetUrl(): string {
  let url_ = getBaseUrl() + "/pet";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function addPetMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'addPet',
    ]);
}

/**
 * Add a new pet to the store
 * @param body Pet object that needs to be added to the store
 */
export function useAddPetMutation<TContext>(options?: Omit<UseMutationOptions<void, unknown, Types.Pet, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, Types.Pet, TContext> {
  const key = addPetMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.Pet) => Types.Client.addPet(body), {...options, mutationKey: key});
}
  
    
export function updatePetUrl(): string {
  let url_ = getBaseUrl() + "/pet";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function updatePetMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'updatePet',
    ]);
}

/**
 * Update an existing pet
 * @param body Pet object that needs to be added to the store
 */
export function useUpdatePetMutation<TContext>(options?: Omit<UseMutationOptions<void, unknown, Types.Pet, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, Types.Pet, TContext> {
  const key = updatePetMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.Pet) => Types.Client.updatePet(body), {...options, mutationKey: key});
}
  
    
export function findPetsByStatusUrl(status: Types.Status[]): string {
  let url_ = getBaseUrl() + "/pet/findByStatus?";
  if (status === undefined || status === null)
    throw new Error("The parameter 'status' must be defined and cannot be null.");
  else
    status && status.forEach(item => { url_ += "status=" + encodeURIComponent("" + item) + "&"; });
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let findPetsByStatusDefaultOptions: UseQueryOptions<Types.Pet[], unknown, Types.Pet[]> = {};
export function getFindPetsByStatusDefaultOptions(): UseQueryOptions<Types.Pet[], unknown, Types.Pet[]> {
  return findPetsByStatusDefaultOptions;
};
export function setFindPetsByStatusDefaultOptions(options: UseQueryOptions<Types.Pet[], unknown, Types.Pet[]>) {
  findPetsByStatusDefaultOptions = options;
}

export function findPetsByStatusQueryKey(status: Types.Status[]): QueryKey;
export function findPetsByStatusQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { status,  } = params[0] as FindPetsByStatusQueryParameters;

    return trimArrayEnd([
        'Client',
        'findPetsByStatus',
        status as any,
      ]);
  } else {
    return trimArrayEnd([
        'Client',
        'findPetsByStatus',
        ...params
      ]);
  }
}
function __findPetsByStatus(context: QueryFunctionContext) {
  return Types.Client.findPetsByStatus(
      context.queryKey[2] as Types.Status[]    );
}

export function useFindPetsByStatusQuery<TSelectData = Types.Pet[], TError = unknown>(dto: FindPetsByStatusQueryParameters, options?: UseQueryOptions<Types.Pet[], TError, TSelectData>): UseQueryResult<TSelectData, TError>;
/**
 * Finds Pets by status
 * @param status Status values that need to be considered for filter
 * @return successful operation
 */
export function useFindPetsByStatusQuery<TSelectData = Types.Pet[], TError = unknown>(status: Types.Status[], options?: UseQueryOptions<Types.Pet[], TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useFindPetsByStatusQuery<TSelectData = Types.Pet[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.Pet[], TError, TSelectData> | undefined = undefined;
  let status: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ status,  } = params[0] as FindPetsByStatusQueryParameters);
      options = params[1];
    } else {
      [status,  options] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<Types.Pet[], TError, TSelectData>({
    queryFn: __findPetsByStatus,
    queryKey: findPetsByStatusQueryKey(status),
    ...findPetsByStatusDefaultOptions as unknown as UseQueryOptions<Types.Pet[], TError, TSelectData>,
    ...options,
  });
}
/**
 * Finds Pets by status
 * @param status Status values that need to be considered for filter
 * @return successful operation
 */
export function setFindPetsByStatusData(queryClient: QueryClient, updater: (data: Types.Pet[] | undefined) => Types.Pet[], status: Types.Status[]) {
  queryClient.setQueryData(findPetsByStatusQueryKey(status),
    updater
  );
}

/**
 * Finds Pets by status
 * @param status Status values that need to be considered for filter
 * @return successful operation
 */
export function setFindPetsByStatusDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.Pet[] | undefined) => Types.Pet[]) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function findPetsByTagsUrl(tags: string[]): string {
  let url_ = getBaseUrl() + "/pet/findByTags?";
  if (tags === undefined || tags === null)
    throw new Error("The parameter 'tags' must be defined and cannot be null.");
  else
    tags && tags.forEach(item => { url_ += "tags=" + encodeURIComponent("" + item) + "&"; });
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let findPetsByTagsDefaultOptions: UseQueryOptions<Types.Pet[], unknown, Types.Pet[]> = {};
export function getFindPetsByTagsDefaultOptions(): UseQueryOptions<Types.Pet[], unknown, Types.Pet[]> {
  return findPetsByTagsDefaultOptions;
};
export function setFindPetsByTagsDefaultOptions(options: UseQueryOptions<Types.Pet[], unknown, Types.Pet[]>) {
  findPetsByTagsDefaultOptions = options;
}

export function findPetsByTagsQueryKey(tags: string[]): QueryKey;
export function findPetsByTagsQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { tags,  } = params[0] as FindPetsByTagsQueryParameters;

    return trimArrayEnd([
        'Client',
        'findPetsByTags',
        tags as any,
      ]);
  } else {
    return trimArrayEnd([
        'Client',
        'findPetsByTags',
        ...params
      ]);
  }
}
function __findPetsByTags(context: QueryFunctionContext) {
  return Types.Client.findPetsByTags(
      context.queryKey[2] as string[]    );
}

export function useFindPetsByTagsQuery<TSelectData = Types.Pet[], TError = unknown>(dto: FindPetsByTagsQueryParameters, options?: UseQueryOptions<Types.Pet[], TError, TSelectData>): UseQueryResult<TSelectData, TError>;
/**
 * Finds Pets by tags
 * @param tags Tags to filter by
 * @return successful operation
 * @deprecated
 */
export function useFindPetsByTagsQuery<TSelectData = Types.Pet[], TError = unknown>(tags: string[], options?: UseQueryOptions<Types.Pet[], TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useFindPetsByTagsQuery<TSelectData = Types.Pet[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.Pet[], TError, TSelectData> | undefined = undefined;
  let tags: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ tags,  } = params[0] as FindPetsByTagsQueryParameters);
      options = params[1];
    } else {
      [tags,  options] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<Types.Pet[], TError, TSelectData>({
    queryFn: __findPetsByTags,
    queryKey: findPetsByTagsQueryKey(tags),
    ...findPetsByTagsDefaultOptions as unknown as UseQueryOptions<Types.Pet[], TError, TSelectData>,
    ...options,
  });
}
/**
 * Finds Pets by tags
 * @param tags Tags to filter by
 * @return successful operation
 * @deprecated
 */
export function setFindPetsByTagsData(queryClient: QueryClient, updater: (data: Types.Pet[] | undefined) => Types.Pet[], tags: string[]) {
  queryClient.setQueryData(findPetsByTagsQueryKey(tags),
    updater
  );
}

/**
 * Finds Pets by tags
 * @param tags Tags to filter by
 * @return successful operation
 * @deprecated
 */
export function setFindPetsByTagsDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.Pet[] | undefined) => Types.Pet[]) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function getPetByIdUrl(petId: number): string {
  let url_ = getBaseUrl() + "/pet/{petId}";

if (petId === undefined || petId === null)
  throw new Error("The parameter 'petId' must be defined.");
url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let getPetByIdDefaultOptions: UseQueryOptions<Types.Pet, unknown, Types.Pet> = {};
export function getGetPetByIdDefaultOptions(): UseQueryOptions<Types.Pet, unknown, Types.Pet> {
  return getPetByIdDefaultOptions;
};
export function setGetPetByIdDefaultOptions(options: UseQueryOptions<Types.Pet, unknown, Types.Pet>) {
  getPetByIdDefaultOptions = options;
}

export function getPetByIdQueryKey(petId: number): QueryKey;
export function getPetByIdQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { petId,  } = params[0] as GetPetByIdQueryParameters;

    return trimArrayEnd([
        'Client',
        'getPetById',
        petId as any,
      ]);
  } else {
    return trimArrayEnd([
        'Client',
        'getPetById',
        ...params
      ]);
  }
}
function __getPetById(context: QueryFunctionContext) {
  return Types.Client.getPetById(
      context.queryKey[2] as number    );
}

export function useGetPetByIdQuery<TSelectData = Types.Pet, TError = unknown>(dto: GetPetByIdQueryParameters, options?: UseQueryOptions<Types.Pet, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
/**
 * Find pet by ID
 * @param petId ID of pet to return
 * @return successful operation
 */
export function useGetPetByIdQuery<TSelectData = Types.Pet, TError = unknown>(petId: number, options?: UseQueryOptions<Types.Pet, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useGetPetByIdQuery<TSelectData = Types.Pet, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.Pet, TError, TSelectData> | undefined = undefined;
  let petId: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ petId,  } = params[0] as GetPetByIdQueryParameters);
      options = params[1];
    } else {
      [petId,  options] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<Types.Pet, TError, TSelectData>({
    queryFn: __getPetById,
    queryKey: getPetByIdQueryKey(petId),
    ...getPetByIdDefaultOptions as unknown as UseQueryOptions<Types.Pet, TError, TSelectData>,
    ...options,
  });
}
/**
 * Find pet by ID
 * @param petId ID of pet to return
 * @return successful operation
 */
export function setGetPetByIdData(queryClient: QueryClient, updater: (data: Types.Pet | undefined) => Types.Pet, petId: number) {
  queryClient.setQueryData(getPetByIdQueryKey(petId),
    updater
  );
}

/**
 * Find pet by ID
 * @param petId ID of pet to return
 * @return successful operation
 */
export function setGetPetByIdDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.Pet | undefined) => Types.Pet) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function updatePetWithFormUrl(petId: number): string {
  let url_ = getBaseUrl() + "/pet/{petId}";

if (petId === undefined || petId === null)
  throw new Error("The parameter 'petId' must be defined.");
url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function updatePetWithFormMutationKey(petId: number): MutationKey {
  return trimArrayEnd([
      'Client',
      'updatePetWithForm',
      petId as any,
    ]);
}

/**
 * Updates a pet in the store with form data
 * @param petId ID of pet that needs to be updated
 * @param name (optional) Updated name of the pet
 * @param status (optional) Updated status of the pet
 */
export function useUpdatePetWithFormMutation<TContext>(petId: number, options?: Omit<UseMutationOptions<void, unknown, UpdatePetWithFormMutationParameters, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, UpdatePetWithFormMutationParameters, TContext> {
  const key = updatePetWithFormMutationKey(petId);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((updatePetWithFormMutationParameters: UpdatePetWithFormMutationParameters) => Types.Client.updatePetWithForm(petId, updatePetWithFormMutationParameters.name, updatePetWithFormMutationParameters.status), {...options, mutationKey: key});
}
  
    
export function deletePetUrl(petId: number, api_key?: string | null | undefined): string {
  let url_ = getBaseUrl() + "/pet/{petId}";

if (petId === undefined || petId === null)
  throw new Error("The parameter 'petId' must be defined.");
url_ = url_.replace("{petId}", encodeURIComponent("" + petId));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function deletePetMutationKey(petId: number, api_key?: string | null | undefined): MutationKey {
  return trimArrayEnd([
      'Client',
      'deletePet',
      petId as any,
      api_key as any,
    ]);
}

/**
 * Deletes a pet
 * @param petId Pet id to delete
 * @param api_key (optional) 
 */
export function useDeletePetMutation<TContext>(petId: number, api_key?: string | null | undefined, options?: Omit<UseMutationOptions<void, unknown, void, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, void, TContext> {
  const key = deletePetMutationKey(petId, api_key);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation(() => Types.Client.deletePet(petId, api_key), {...options, mutationKey: key});
}
  
    
export function placeOrderUrl(): string {
  let url_ = getBaseUrl() + "/store/order";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function placeOrderMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'placeOrder',
    ]);
}

/**
 * Place an order for a pet
 * @param body order placed for purchasing the pet
 * @return successful operation
 */
export function usePlaceOrderMutation<TContext>(options?: Omit<UseMutationOptions<Types.Order, unknown, Types.Order, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<Types.Order, unknown, Types.Order, TContext> {
  const key = placeOrderMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.Order) => Types.Client.placeOrder(body), {...options, mutationKey: key});
}
  
    
export function getOrderByIdUrl(orderId: number): string {
  let url_ = getBaseUrl() + "/store/order/{orderId}";

if (orderId === undefined || orderId === null)
  throw new Error("The parameter 'orderId' must be defined.");
url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let getOrderByIdDefaultOptions: UseQueryOptions<Types.Order, unknown, Types.Order> = {};
export function getGetOrderByIdDefaultOptions(): UseQueryOptions<Types.Order, unknown, Types.Order> {
  return getOrderByIdDefaultOptions;
};
export function setGetOrderByIdDefaultOptions(options: UseQueryOptions<Types.Order, unknown, Types.Order>) {
  getOrderByIdDefaultOptions = options;
}

export function getOrderByIdQueryKey(orderId: number): QueryKey;
export function getOrderByIdQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { orderId,  } = params[0] as GetOrderByIdQueryParameters;

    return trimArrayEnd([
        'Client',
        'getOrderById',
        orderId as any,
      ]);
  } else {
    return trimArrayEnd([
        'Client',
        'getOrderById',
        ...params
      ]);
  }
}
function __getOrderById(context: QueryFunctionContext) {
  return Types.Client.getOrderById(
      context.queryKey[2] as number    );
}

export function useGetOrderByIdQuery<TSelectData = Types.Order, TError = unknown>(dto: GetOrderByIdQueryParameters, options?: UseQueryOptions<Types.Order, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
/**
 * Find purchase order by ID
 * @param orderId ID of pet that needs to be fetched
 * @return successful operation
 */
export function useGetOrderByIdQuery<TSelectData = Types.Order, TError = unknown>(orderId: number, options?: UseQueryOptions<Types.Order, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useGetOrderByIdQuery<TSelectData = Types.Order, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.Order, TError, TSelectData> | undefined = undefined;
  let orderId: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ orderId,  } = params[0] as GetOrderByIdQueryParameters);
      options = params[1];
    } else {
      [orderId,  options] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<Types.Order, TError, TSelectData>({
    queryFn: __getOrderById,
    queryKey: getOrderByIdQueryKey(orderId),
    ...getOrderByIdDefaultOptions as unknown as UseQueryOptions<Types.Order, TError, TSelectData>,
    ...options,
  });
}
/**
 * Find purchase order by ID
 * @param orderId ID of pet that needs to be fetched
 * @return successful operation
 */
export function setGetOrderByIdData(queryClient: QueryClient, updater: (data: Types.Order | undefined) => Types.Order, orderId: number) {
  queryClient.setQueryData(getOrderByIdQueryKey(orderId),
    updater
  );
}

/**
 * Find purchase order by ID
 * @param orderId ID of pet that needs to be fetched
 * @return successful operation
 */
export function setGetOrderByIdDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.Order | undefined) => Types.Order) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function deleteOrderUrl(orderId: number): string {
  let url_ = getBaseUrl() + "/store/order/{orderId}";

if (orderId === undefined || orderId === null)
  throw new Error("The parameter 'orderId' must be defined.");
url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function deleteOrderMutationKey(orderId: number): MutationKey {
  return trimArrayEnd([
      'Client',
      'deleteOrder',
      orderId as any,
    ]);
}

/**
 * Delete purchase order by ID
 * @param orderId ID of the order that needs to be deleted
 */
export function useDeleteOrderMutation<TContext>(orderId: number, options?: Omit<UseMutationOptions<void, unknown, void, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, void, TContext> {
  const key = deleteOrderMutationKey(orderId);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation(() => Types.Client.deleteOrder(orderId), {...options, mutationKey: key});
}
  
    
export function getInventoryUrl(): string {
  let url_ = getBaseUrl() + "/store/inventory";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let getInventoryDefaultOptions: UseQueryOptions<{ [key: string]: number; }, unknown, { [key: string]: number; }> = {};
export function getGetInventoryDefaultOptions(): UseQueryOptions<{ [key: string]: number; }, unknown, { [key: string]: number; }> {
  return getInventoryDefaultOptions;
};
export function setGetInventoryDefaultOptions(options: UseQueryOptions<{ [key: string]: number; }, unknown, { [key: string]: number; }>) {
  getInventoryDefaultOptions = options;
}

export function getInventoryQueryKey(): QueryKey;
export function getInventoryQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'Client',
      'getInventory',
    ]);
}
function __getInventory() {
  return Types.Client.getInventory(
    );
}

/**
 * Returns pet inventories by status
 * @return successful operation
 */
export function useGetInventoryQuery<TSelectData = { [key: string]: number; }, TError = unknown>(options?: UseQueryOptions<{ [key: string]: number; }, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useGetInventoryQuery<TSelectData = { [key: string]: number; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: number; }, TError, TSelectData> | undefined = undefined;
  

  options = params[0] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<{ [key: string]: number; }, TError, TSelectData>({
    queryFn: __getInventory,
    queryKey: getInventoryQueryKey(),
    ...getInventoryDefaultOptions as unknown as UseQueryOptions<{ [key: string]: number; }, TError, TSelectData>,
    ...options,
  });
}
/**
 * Returns pet inventories by status
 * @return successful operation
 */
export function setGetInventoryData(queryClient: QueryClient, updater: (data: { [key: string]: number; } | undefined) => { [key: string]: number; }, ) {
  queryClient.setQueryData(getInventoryQueryKey(),
    updater
  );
}

/**
 * Returns pet inventories by status
 * @return successful operation
 */
export function setGetInventoryDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: number; } | undefined) => { [key: string]: number; }) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function createUsersWithArrayInputUrl(): string {
  let url_ = getBaseUrl() + "/user/createWithArray";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function createUsersWithArrayInputMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'createUsersWithArrayInput',
    ]);
}

/**
 * Creates list of users with given input array
 * @param body List of user object
 * @return successful operation
 */
export function useCreateUsersWithArrayInputMutation<TContext>(options?: Omit<UseMutationOptions<void, unknown, Types.User[], TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, Types.User[], TContext> {
  const key = createUsersWithArrayInputMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.User[]) => Types.Client.createUsersWithArrayInput(body), {...options, mutationKey: key});
}
  
    
export function createUsersWithListInputUrl(): string {
  let url_ = getBaseUrl() + "/user/createWithList";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function createUsersWithListInputMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'createUsersWithListInput',
    ]);
}

/**
 * Creates list of users with given input array
 * @param body List of user object
 * @return successful operation
 */
export function useCreateUsersWithListInputMutation<TContext>(options?: Omit<UseMutationOptions<void, unknown, Types.User[], TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, Types.User[], TContext> {
  const key = createUsersWithListInputMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.User[]) => Types.Client.createUsersWithListInput(body), {...options, mutationKey: key});
}
  
    
export function getUserByNameUrl(username: string): string {
  let url_ = getBaseUrl() + "/user/{username}";

if (username === undefined || username === null)
  throw new Error("The parameter 'username' must be defined.");
url_ = url_.replace("{username}", encodeURIComponent("" + username));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let getUserByNameDefaultOptions: UseQueryOptions<Types.User, unknown, Types.User> = {};
export function getGetUserByNameDefaultOptions(): UseQueryOptions<Types.User, unknown, Types.User> {
  return getUserByNameDefaultOptions;
};
export function setGetUserByNameDefaultOptions(options: UseQueryOptions<Types.User, unknown, Types.User>) {
  getUserByNameDefaultOptions = options;
}

export function getUserByNameQueryKey(username: string): QueryKey;
export function getUserByNameQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { username,  } = params[0] as GetUserByNameQueryParameters;

    return trimArrayEnd([
        'Client',
        'getUserByName',
        username as any,
      ]);
  } else {
    return trimArrayEnd([
        'Client',
        'getUserByName',
        ...params
      ]);
  }
}
function __getUserByName(context: QueryFunctionContext) {
  return Types.Client.getUserByName(
      context.queryKey[2] as string    );
}

export function useGetUserByNameQuery<TSelectData = Types.User, TError = unknown>(dto: GetUserByNameQueryParameters, options?: UseQueryOptions<Types.User, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
/**
 * Get user by user name
 * @param username The name that needs to be fetched. Use user1 for testing.
 * @return successful operation
 */
export function useGetUserByNameQuery<TSelectData = Types.User, TError = unknown>(username: string, options?: UseQueryOptions<Types.User, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useGetUserByNameQuery<TSelectData = Types.User, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Types.User, TError, TSelectData> | undefined = undefined;
  let username: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ username,  } = params[0] as GetUserByNameQueryParameters);
      options = params[1];
    } else {
      [username,  options] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<Types.User, TError, TSelectData>({
    queryFn: __getUserByName,
    queryKey: getUserByNameQueryKey(username),
    ...getUserByNameDefaultOptions as unknown as UseQueryOptions<Types.User, TError, TSelectData>,
    ...options,
  });
}
/**
 * Get user by user name
 * @param username The name that needs to be fetched. Use user1 for testing.
 * @return successful operation
 */
export function setGetUserByNameData(queryClient: QueryClient, updater: (data: Types.User | undefined) => Types.User, username: string) {
  queryClient.setQueryData(getUserByNameQueryKey(username),
    updater
  );
}

/**
 * Get user by user name
 * @param username The name that needs to be fetched. Use user1 for testing.
 * @return successful operation
 */
export function setGetUserByNameDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Types.User | undefined) => Types.User) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function updateUserUrl(username: string): string {
  let url_ = getBaseUrl() + "/user/{username}";

if (username === undefined || username === null)
  throw new Error("The parameter 'username' must be defined.");
url_ = url_.replace("{username}", encodeURIComponent("" + username));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function updateUserMutationKey(username: string): MutationKey {
  return trimArrayEnd([
      'Client',
      'updateUser',
      username as any,
    ]);
}

/**
 * Updated user
 * @param username name that need to be updated
 * @param body Updated user object
 */
export function useUpdateUserMutation<TContext>(username: string, options?: Omit<UseMutationOptions<void, unknown, Types.User, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, Types.User, TContext> {
  const key = updateUserMutationKey(username);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.User) => Types.Client.updateUser(username, body), {...options, mutationKey: key});
}
  
    
export function deleteUserUrl(username: string): string {
  let url_ = getBaseUrl() + "/user/{username}";

if (username === undefined || username === null)
  throw new Error("The parameter 'username' must be defined.");
url_ = url_.replace("{username}", encodeURIComponent("" + username));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function deleteUserMutationKey(username: string): MutationKey {
  return trimArrayEnd([
      'Client',
      'deleteUser',
      username as any,
    ]);
}

/**
 * Delete user
 * @param username The name that needs to be deleted
 */
export function useDeleteUserMutation<TContext>(username: string, options?: Omit<UseMutationOptions<void, unknown, void, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, void, TContext> {
  const key = deleteUserMutationKey(username);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation(() => Types.Client.deleteUser(username), {...options, mutationKey: key});
}
  
    
export function loginUserUrl(username: string, password: string): string {
  let url_ = getBaseUrl() + "/user/login?";
  if (username === undefined || username === null)
    throw new Error("The parameter 'username' must be defined and cannot be null.");
  else
    url_ += "username=" + encodeURIComponent("" + username) + "&";
  if (password === undefined || password === null)
    throw new Error("The parameter 'password' must be defined and cannot be null.");
  else
    url_ += "password=" + encodeURIComponent("" + password) + "&";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let loginUserDefaultOptions: UseQueryOptions<string, unknown, string> = {};
export function getLoginUserDefaultOptions(): UseQueryOptions<string, unknown, string> {
  return loginUserDefaultOptions;
};
export function setLoginUserDefaultOptions(options: UseQueryOptions<string, unknown, string>) {
  loginUserDefaultOptions = options;
}

export function loginUserQueryKey(dto: LoginUserQueryParameters): QueryKey;
export function loginUserQueryKey(username: string, password: string): QueryKey;
export function loginUserQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { username, password,  } = params[0] as LoginUserQueryParameters;

    return trimArrayEnd([
        'Client',
        'loginUser',
        username as any,
        password as any,
      ]);
  } else {
    return trimArrayEnd([
        'Client',
        'loginUser',
        ...params
      ]);
  }
}
function __loginUser(context: QueryFunctionContext) {
  return Types.Client.loginUser(
      context.queryKey[2] as string,       context.queryKey[3] as string    );
}

export function useLoginUserQuery<TSelectData = string, TError = unknown>(dto: LoginUserQueryParameters, options?: UseQueryOptions<string, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
/**
 * Logs user into the system
 * @param username The user name for login
 * @param password The password for login in clear text
 * @return successful operation
 */
export function useLoginUserQuery<TSelectData = string, TError = unknown>(username: string, password: string, options?: UseQueryOptions<string, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useLoginUserQuery<TSelectData = string, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<string, TError, TSelectData> | undefined = undefined;
  let username: any = undefined;
  let password: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ username, password,  } = params[0] as LoginUserQueryParameters);
      options = params[1];
    } else {
      [username, password,  options] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<string, TError, TSelectData>({
    queryFn: __loginUser,
    queryKey: loginUserQueryKey(username, password),
    ...loginUserDefaultOptions as unknown as UseQueryOptions<string, TError, TSelectData>,
    ...options,
  });
}
/**
 * Logs user into the system
 * @param username The user name for login
 * @param password The password for login in clear text
 * @return successful operation
 */
export function setLoginUserData(queryClient: QueryClient, updater: (data: string | undefined) => string, username: string, password: string) {
  queryClient.setQueryData(loginUserQueryKey(username, password),
    updater
  );
}

/**
 * Logs user into the system
 * @param username The user name for login
 * @param password The password for login in clear text
 * @return successful operation
 */
export function setLoginUserDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: string | undefined) => string) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function logoutUserUrl(): string {
  let url_ = getBaseUrl() + "/user/logout";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let logoutUserDefaultOptions: UseQueryOptions<void, unknown, void> = {};
export function getLogoutUserDefaultOptions(): UseQueryOptions<void, unknown, void> {
  return logoutUserDefaultOptions;
};
export function setLogoutUserDefaultOptions(options: UseQueryOptions<void, unknown, void>) {
  logoutUserDefaultOptions = options;
}

export function logoutUserQueryKey(): QueryKey;
export function logoutUserQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'Client',
      'logoutUser',
    ]);
}
function __logoutUser() {
  return Types.Client.logoutUser(
    );
}

/**
 * Logs out current logged in user session
 * @return successful operation
 */
export function useLogoutUserQuery<TSelectData = void, TError = unknown>(options?: UseQueryOptions<void, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useLogoutUserQuery<TSelectData = void, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<void, TError, TSelectData> | undefined = undefined;
  

  options = params[0] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<void, TError, TSelectData>({
    queryFn: __logoutUser,
    queryKey: logoutUserQueryKey(),
    ...logoutUserDefaultOptions as unknown as UseQueryOptions<void, TError, TSelectData>,
    ...options,
  });
}
/**
 * Logs out current logged in user session
 * @return successful operation
 */
export function setLogoutUserData(queryClient: QueryClient, updater: (data: void | undefined) => void, ) {
  queryClient.setQueryData(logoutUserQueryKey(),
    updater
  );
}

/**
 * Logs out current logged in user session
 * @return successful operation
 */
export function setLogoutUserDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: void | undefined) => void) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function createUserUrl(): string {
  let url_ = getBaseUrl() + "/user";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function createUserMutationKey(): MutationKey {
  return trimArrayEnd([
      'Client',
      'createUser',
    ]);
}

/**
 * Create user
 * @param body Created user object
 * @return successful operation
 */
export function useCreateUserMutation<TContext>(options?: Omit<UseMutationOptions<void, unknown, Types.User, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, Types.User, TContext> {
  const key = createUserMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation((body: Types.User) => Types.Client.createUser(body), {...options, mutationKey: key});
}
  
