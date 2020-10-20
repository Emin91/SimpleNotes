export const startSaga = (payload: object) => {
    return { type: 'CALL_MAIN_SAGA', payload };
};