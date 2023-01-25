import { RequestAction, RequestName, RequestType } from './Types'

export const requestStarted = (requestName: RequestName): RequestAction => ({
	type: RequestType.REQUEST_STARTED,
	payload: { requestName, inProgress: true },
})

export const requestFinished = (requestName: RequestName): RequestAction => ({
	type: RequestType.REQUEST_FINISHED,
	payload: { requestName, inProgress: false },
})

export const requestFailed = (requestName: RequestName): RequestAction => ({
	type: RequestType.REQUEST_FAILED,
	payload: { requestName, inProgress: false },
})
