import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import config from '../config'

const api = axios.create({
    baseURL: config.app.addr,
    timeout: 2000
})

export type Data = Record<string, unknown>
export type Headers = Record<string, string>;
export type URLParams = Record<string, string>;
export enum Methods {
    GET,
    HEAD,
    POST,
    PUT,
    PATCH,
    DELETE
}

interface Params extends AxiosRequestConfig {}

interface Response {
    status: boolean;
    code?: number;
    data?: any;
    raw?: AxiosResponse
}

const methods: Record<Methods, string> = {
    [Methods.GET]: 'GET',
    [Methods.HEAD]: 'HEAD',
    [Methods.POST]: 'POST',
    [Methods.PUT]: 'PUT',
    [Methods.PATCH]: 'PATCH',
    [Methods.DELETE]: 'DELETE'
}

export class Request {

    private url: string = '';
    private data: Data;
    private headers: Headers;

    constructor(url: string, data: Data, headers: Headers) {
        this.url = url;
        this.data = data;
        this.headers = headers;
    }

    public SetParams(params: URLParams) {
        if (this.url.indexOf('/:') === -1 || Object.getOwnPropertyNames(params).length <= 0){
            return
        }
        Object.keys(params).forEach((key: string) => {
            if (this.url.indexOf(`/:${key}`) === -1) {
                throw 'invalid render url entity params'
            }
            this.url = this.url.replace(`/:${key}`, `/${params[key]}`)
        })
    }

    private buildRequest(method: Methods): Params {
        let params: Params = {
            url: this.url,
            method: methods[method]
        }
        if (this.data) {
            params.data = this.data
        }
        if (this.headers) {
            params.headers = this.headers
        }
        return params
    }

    private async request(params: Params): Promise<Response>  {
        if (!params.url) {
            throw 'invalid request target';
        }
        let resp: Response = {status: false};
        await api(params).then((r) => {
            if (!r.data['status']) {
                resp = {
                    status: false,
                    data: r.data.msg ? r.data.msg : 'Request failed'
                }
            }else {
                resp = {
                    status: true,
                    code: r.status,
                    data: r.data['data'],
                    raw: r
                }
            }
        }).catch((err) => {
            resp = {
                status: false,
                data: err['response'] ? err['response']['data']['msg'] : err
            }
        })
        return resp;
    }

    private Customize(method: Methods): Promise<Response> {
        return this.request(this.buildRequest(method))
    }

    public GET(): Promise<Response> {
        return this.Customize(Methods.GET)
    }

    public HEAD(): Promise<Response> {
        return this.Customize(Methods.HEAD)
    }

    public POST(): Promise<Response> {
        return this.Customize(Methods.POST)
    }

    public PUT(): Promise<Response> {
        return this.Customize(Methods.PUT)
    }

    public PATCH(): Promise<Response> {
        return this.Customize(Methods.PATCH)
    }

    public DELETE(): Promise<Response> {
        return this.Customize(Methods.DELETE)
    }

}

export const NewRequest = (url: string, data: Data, headers: Headers): Request => {
    return new Request(url, data, headers)
}
