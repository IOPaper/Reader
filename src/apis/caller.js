import axios from 'axios'
import config from '../config.js'

const api = axios.create({
    baseURL: config.app.addr,
    timeout: 2000
})

export class Request {

    #url = ''
    #data = {}
    #headers = {}

    constructor(url = '', data = {}, headers = {}) {
        this.#url = url;
        this.#data = data;
        this.#headers = headers;
    }

    /**
     * @param params
     * @constructor
     * @description Render entity parameters in url
     */
    SetParams(params = {}) {
        if (!params || this.#url.indexOf('/:') === -1 || Object.getOwnPropertyNames(params).length <= 0) {
            return
        }
        Object.keys(params).forEach((key) => {
            if (this.#url.indexOf(`/：${key}`) === -1) {
                throw 'invalid render url entity params'
            }
            this.#url.replace(`/：${key}`, `/${params[key]}`)
        })
    }

    #build_request(method = 'POST') {
        let params = {
            url: this.#url,
            method: method
        }
        if (this.#data) {
            Object.assign(params, {data: this.#data})
        }
        if (this.#headers) {
            Object.assign(params, {headers: this.#headers})
        }
        return params
    }

    async #request(req = {}) {
        let resp
        if (!req.url) {
            resp = {
                status: false,
                data: 'invalid request target'
            }
            return resp
        }
        await api(req).then((r) => {
            if (!r.data.status) {
                resp = {
                    status: false,
                    data: resp.data.msg ? resp.data.msg : 'request fail'
                }
            }else {
                resp = {
                    status: true,
                    code: resp.status,
                    data: resp.data.data,
                    raw: resp
                }
            }
        }).catch((e) => {
            resp = {
                status: false,
                data: e.response ? e.response.data.msg : e,
            }
        })
        return resp
    }

    Customize(method = '') {
        return this.#request(this.#build_request(method))
    }

    GET() {
        return this.Customize('GET')
    }

    HEAD() {
        return this.Customize('HEAD')
    }

    POST() {
        return this.Customize('POST')
    }

    PUT() {
        return this.Customize('PUT')
    }

    PATCH() {
        return this.Customize('PATCH')
    }

    DELETE() {
        return this.Customize('DELETE')
    }

}

/**
 * @param url
 * @param data
 * @param headers
 * @returns {Request}
 * @constructor
 */
export const NewRequest = (url = '', data = {}, headers = {}) => {
    return new Request(url, data, headers)
}
