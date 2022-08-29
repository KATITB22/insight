/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import APIClient from '@/utils/api-client';
import { APIErrorObject } from '@/utils/api-error-object';

type AsyncSuccessCbFunction = (response: Record<string, any>) => Promise<void>;
type SuccessCallbackFunction = (response: Record<string, any>) => void;
type FailureCallbackFunction = (error: APIErrorObject) => void;

class AuthService {
    public async login(
        nim: string,
        password: string,
        onSuccess?: AsyncSuccessCbFunction,
        onFail?: FailureCallbackFunction
    ) {
        const response = await APIClient.POST('/auth/local', {
            identifier: nim,
            password,
        });

        if (response instanceof APIErrorObject) {
            if (!onFail) return;

            onFail(response);
            return;
        }

        APIClient.setToken(response.jwt);
        if (onSuccess) {
            await onSuccess(response);
        }
    }

    public logout(onSuccess?: SuccessCallbackFunction) {
        APIClient.deleteCookie('token');
        if (onSuccess) {
            onSuccess({});
        }
    }
}

const service = new AuthService();
export default service;
