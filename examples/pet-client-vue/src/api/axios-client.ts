//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import type { AxiosError } from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export * as Client from './axios-client/Client';

export * as Query from './axios-client/Query';

export class ApiResponse implements IApiResponse {
    code?: number | undefined;
    type?: string | undefined;
    message?: string | undefined;

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
    code?: number | undefined;
    type?: string | undefined;
    message?: string | undefined;
}

export class Category implements ICategory {
    id?: number | undefined;
    name?: string | undefined;

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
    id?: number | undefined;
    name?: string | undefined;
}

export class Pet implements IPet {
    id?: number | undefined;
    category?: Category | undefined;
    name!: string;
    photoUrls!: string[];
    tags?: Tag[] | undefined;
    /** pet status in the store */
    status?: PetStatus | undefined;

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
            this.category = _data["category"] ? Category.fromJS(_data["category"]) : <any>undefined;
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
        data["category"] = this.category ? this.category.toJSON() : <any>undefined;
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
    id?: number | undefined;
    category?: Category | undefined;
    name: string;
    photoUrls: string[];
    tags?: Tag[] | undefined;
    /** pet status in the store */
    status?: PetStatus | undefined;
}

export class Tag implements ITag {
    id?: number | undefined;
    name?: string | undefined;

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
    id?: number | undefined;
    name?: string | undefined;
}

export class Order implements IOrder {
    id?: number | undefined;
    petId?: number | undefined;
    quantity?: number | undefined;
    shipDate?: Date | undefined;
    /** Order Status */
    status?: OrderStatus | undefined;
    complete?: boolean | undefined;

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
            this.shipDate = _data["shipDate"] ? new Date(_data["shipDate"].toString()) : <any>undefined;
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
        data["shipDate"] = this.shipDate ? this.shipDate.toISOString() : <any>undefined;
        data["status"] = this.status;
        data["complete"] = this.complete;
        return data;
    }
}

export interface IOrder {
    id?: number | undefined;
    petId?: number | undefined;
    quantity?: number | undefined;
    shipDate?: Date | undefined;
    /** Order Status */
    status?: OrderStatus | undefined;
    complete?: boolean | undefined;
}

export class User implements IUser {
    id?: number | undefined;
    username?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    phone?: string | undefined;
    /** User Status */
    userStatus?: number | undefined;

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
    id?: number | undefined;
    username?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    phone?: string | undefined;
    /** User Status */
    userStatus?: number | undefined;
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
