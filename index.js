const axios = require('axios');
const core = require('@actions/core');

const whatsappURL = core.getInput('urltoken', { required: true });
const url = core.getInput('mesej', { required: true });
const scope = core.getInput('scope', { required: true });
let payload = {
    "message" : url,
    "scope": scope
}
let getSplask = axios.post(whatsappURL, payload)
.then(res => {
    console.log(res.data)
    let myData = JSON.stringify(res.data)
    core.setOutput('jawapan', myData);
})
.catch(err => {
    console.error(err); 
})