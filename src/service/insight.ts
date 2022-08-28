/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import APIClient from '@/utils/api-client';
import { APIErrorObject } from '@/utils/api-error-object';

type SuccessCallbackFunction = (response: Record<string, any>) => void;
type FailureCallbackFunction = (error: APIErrorObject) => void;

class InsightService {
    public async getInsights(
        onSuccess?: SuccessCallbackFunction,
        onFail?: FailureCallbackFunction
    ) {
        const response = await APIClient.GET('/api/insight-results');

        if (response instanceof APIErrorObject) {
            if (!onFail) return;

            onFail(response);
            return;
        }

        if (onSuccess) {
            onSuccess(response);
        }
    }
}

const service = new InsightService();
export default service;
