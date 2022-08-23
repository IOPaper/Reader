import {Request} from './caller'
import {apis} from './call_targets'

/**
 * @param before
 * @param limit
 * @returns {Promise<{data: string, status: boolean}|*>}
 * @constructor
 */
export const GetPaperList = (before = 0, limit = 10) => {
    return new Request(apis.GET_PAPER_LIST, {
        before: before,
        limit: limit
    }, {}).GET()
}

/**
 * @param paperId
 * @returns {Promise<{data: string, status: boolean}|*>}
 * @constructor
 */
export const GetPaper = (paperId = '') => {
    let req = new Request(apis.GET_PAPER, {}, {})

    req.SetParams({
        paper_id: paperId
    })
    return req.GET()
}

// export const GetPaperAttachment = (paperId = '', attachment = '') => {
//     let req = new Request(apis.GET_PAPER_ATTACHMENT)
//     req.SetParams({
//         paper_id: paperId,
//         attachment: attachment
//     })
//     return req.GET()
// }
