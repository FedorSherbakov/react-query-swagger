//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.17.0.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export * as Client from './axios-client/Client';

export * as Query from './axios-client/Query';



export class ApiResponse implements IApiResponse {
    code?: number | null;
    type?: string | null;
    message?: string | null;

    constructor(data?: IApiResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.code = _data["code"];
            this.type = _data["type"];
            this.message = _data["message"];
        }
    }

    static fromJS(data: any): ApiResponse {
        data = typeof data === 'object' ? data : {};
        let result = new ApiResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["code"] = this.code;
        data["type"] = this.type;
        data["message"] = this.message;
        return data;
    }
}

export interface IApiResponse {
    code?: number | null;
    type?: string | null;
    message?: string | null;
}

export class Category implements ICategory {
    id?: number | null;
    name?: string | null;

    constructor(data?: ICategory) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): Category {
        data = typeof data === 'object' ? data : {};
        let result = new Category();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data;
    }
}

export interface ICategory {
    id?: number | null;
    name?: string | null;
}

export class Pet implements IPet {
    id?: number | null;
    category?: Category | null;
    name!: string;
    photoUrls!: string[];
    tags?: Tag[] | null;
    /** pet status in the store */
    status?: PetStatus | null;

    constructor(data?: IPet) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.photoUrls = [];
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.category = _data["category"] ? Category.fromJS(_data["category"]) : <any>null;
            this.name = _data["name"];
            if (Array.isArray(_data["photoUrls"])) {
                this.photoUrls = [] as any;
                for (let item of _data["photoUrls"])
                    this.photoUrls!.push(item);
            }
            if (Array.isArray(_data["tags"])) {
                this.tags = [] as any;
                for (let item of _data["tags"])
                    this.tags!.push(Tag.fromJS(item));
            }
            this.status = _data["status"];
        }
    }

    static fromJS(data: any): Pet {
        data = typeof data === 'object' ? data : {};
        let result = new Pet();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["category"] = this.category ? this.category.toJSON() : <any>null;
        data["name"] = this.name;
        if (Array.isArray(this.photoUrls)) {
            data["photoUrls"] = [];
            for (let item of this.photoUrls)
                data["photoUrls"].push(item);
        }
        if (Array.isArray(this.tags)) {
            data["tags"] = [];
            for (let item of this.tags)
                data["tags"].push(item.toJSON());
        }
        data["status"] = this.status;
        return data;
    }
}

export interface IPet {
    id?: number | null;
    category?: Category | null;
    name: string;
    photoUrls: string[];
    tags?: Tag[] | null;
    /** pet status in the store */
    status?: PetStatus | null;
}

export class Tag implements ITag {
    id?: number | null;
    name?: string | null;

    constructor(data?: ITag) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): Tag {
        data = typeof data === 'object' ? data : {};
        let result = new Tag();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data;
    }
}

export interface ITag {
    id?: number | null;
    name?: string | null;
}

export class Order implements IOrder {
    id?: number | null;
    petId?: number | null;
    quantity?: number | null;
    shipDate?: Date | null;
    /** Order Status */
    status?: OrderStatus | null;
    complete?: boolean | null;

    constructor(data?: IOrder) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.petId = _data["petId"];
            this.quantity = _data["quantity"];
            this.shipDate = _data["shipDate"] ? new Date(_data["shipDate"].toString()) : <any>null;
            this.status = _data["status"];
            this.complete = _data["complete"];
        }
    }

    static fromJS(data: any): Order {
        data = typeof data === 'object' ? data : {};
        let result = new Order();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["petId"] = this.petId;
        data["quantity"] = this.quantity;
        data["shipDate"] = this.shipDate && this.shipDate.toISOString();
        data["status"] = this.status;
        data["complete"] = this.complete;
        return data;
    }
}

export interface IOrder {
    id?: number | null;
    petId?: number | null;
    quantity?: number | null;
    shipDate?: Date | null;
    /** Order Status */
    status?: OrderStatus | null;
    complete?: boolean | null;
}

export class User implements IUser {
    id?: number | null;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    password?: string | null;
    phone?: string | null;
    /** User Status */
    userStatus?: number | null;

    constructor(data?: IUser) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.username = _data["username"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.email = _data["email"];
            this.password = _data["password"];
            this.phone = _data["phone"];
            this.userStatus = _data["userStatus"];
        }
    }

    static fromJS(data: any): User {
        data = typeof data === 'object' ? data : {};
        let result = new User();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["username"] = this.username;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["email"] = this.email;
        data["password"] = this.password;
        data["phone"] = this.phone;
        data["userStatus"] = this.userStatus;
        return data;
    }
}

export interface IUser {
    id?: number | null;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    password?: string | null;
    phone?: string | null;
    /** User Status */
    userStatus?: number | null;
}

export enum Status {
    Available = "available",
    Pending = "pending",
    Sold = "sold",
}

export enum PetStatus {
    Available = "available",
    Pending = "pending",
    Sold = "sold",
}

export enum OrderStatus {
    Placed = "placed",
    Approved = "approved",
    Delivered = "delivered",
}

export interface FileParameter {
    data: any;
    fileName: string;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

export function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

export function isAxiosError(obj: any | undefined): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}

import { addResultTypeFactory } from './axios-client/helpers';
export { setBaseUrl } from './axios-client/helpers';
export { setAxiosFactory, getAxios } from './axios-client/helpers';


//-----PersistorHydrator.File-----
import type { PersistedClient } from '@tanstack/react-query-persist-client';
import type { DehydratedState, QueryKey } from '@tanstack/react-query'
import { getResultTypeFactory } from './axios-client/helpers';

/*
 * If you have Dates in QueryKeys (i.e. in request parameters), you need to deserialize them to Dates correctly
 * (otherwise they are deserialized as strings by default, and your queries are broken).
 */
export function deserializeDate(str: unknown) {
  if (!str || typeof str !== 'string') return str;
  if (!/^\d\d\d\d\-\d\d\-\d\d/.test(str)) return str;
  
  const date = new Date(str);
  const isDate = date instanceof Date && !isNaN(date as any);
  
  return isDate ? date : str;
}

export function deserializeDatesInQueryKeys(queryKey: QueryKey) {
  return queryKey
    // We need to replace `null` with `undefined` in query key, because
    // `undefined` is serialized as `null`.
    // And most probably if we have `null` in QueryKey it actually means `undefined`.
    // We can't keep nulls, because they have a different meaning, and e.g. boolean parameters are not allowed to be null.
    .map(x => (x === null ? undefined : x))
    .map(x => deserializeDate(x));
}

export function deserializeClassesInQueryData(queryKey: QueryKey, data: any) {
  if (!data) {
    return data;
  } else if (typeof data !== 'object') {
    return data;
  } else if ('pages' in data && 'pageParams' in data && Array.isArray(data.pages) && Array.isArray(data.pageParams)) {
    // infinite query
    data.pages = data.pages.map((page:any) => deserializeClassesInQueryData(queryKey, page));
  } else if (Array.isArray(data)) {
    return data.map(elem => constructDtoClass(queryKey, elem));
  } else {
    return constructDtoClass(queryKey, data);
  }
}

/*
 * Pass this function as `deserialize` option to createSyncStoragePersister/createAsyncStoragePersister
 * to correctly deserialize your DTOs (including Dates)
 */
export function persisterDeserialize(cache: string): PersistedClient {
  const client: PersistedClient = JSON.parse(cache);
  client.clientState.queries.forEach((query) => {
    query.state.data = deserializeClassesInQueryData(query.queryKey, query.state.data);
    query.queryKey = deserializeDatesInQueryKeys(query.queryKey);
  });

  return client;
}

export function constructDtoClass(queryKey: QueryKey, data: any): unknown {
  const resultTypeKey = getResultTypeClassKey(queryKey);
  const constructorFunction = getResultTypeFactory(resultTypeKey);

  if (!data || !constructorFunction)
    return data;

  const dto = constructorFunction();
  dto.init(data);

  return dto;
}

export function getResultTypeClassKey(queryKey: QueryKey): string {
  if (!Array.isArray(queryKey)) {
    return queryKey as unknown as string;
  }
  if (queryKey.length >= 2) {
    // We concatenate first and second elements, because they uniquely identify the query.
    // All other QueryKey elements are query parameters
    return `${queryKey[0]}___${queryKey[1]}`;
  }

  // We actually should never reach this point :)
  return queryKey.join('___');
}

export function initPersister() {
  
  addResultTypeFactory('Client___findPetsByStatus', () => new Pet());
  addResultTypeFactory('Client___findPetsByTags', () => new Pet());
  addResultTypeFactory('Client___getPetById', () => new Pet());
  addResultTypeFactory('Client___getOrderById', () => new Order());
  addResultTypeFactory('Client___getUserByName', () => new User());


}
//-----/PersistorHydrator.File----