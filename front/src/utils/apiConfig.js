/**
 * method: Post,Delete 등등(필수값)
 * url : 요청 url(없을 경우 기본 base_url)(필수값)
 * param : 쿼리파람 형식으로 데이터 요청시(/username="JS")
 * data : body 데이터
 * header : Token 등
 */

import axiosInstance from './apiInterceptors';

export const ApiRq = async (method, url, params = '', data, headers) => {
    try {
        const res = await axiosInstance({
            method,
            url,
            params,
            data,
            headers,
            credentials: 'include',
        });

        return res;
    } catch (error) {
        if (error.status === 404) {
            alert("요청 에러입니다.")//요청 에러시 alert
        }
        throw error;
    }
};
