// export function changeInput(e) {
//     return {type: "CHANGE_INPUT", payload: e.target.value};
// }
// export function buttonClick(status) {
//     return {type: "BUTTON_CLICK", payload: status};
// }
// export function changeRecaptcha(e) {
//     console.log(e);
// }

export function submitForm(e) {
    // console.log(e);
    let obj = {
        website: e.website,
        recaptchaResponse: e.recaptchaResponse
    };
    console.log('sending this ', obj);
    return {type: "SEND_REQUEST", payload: obj};
}