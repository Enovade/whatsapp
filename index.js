const axios = require('axios');
const core = require('@actions/core');

const urltoken = core.getInput('token', { required: true });
const mesej = core.getInput('mesej', { required: true });
const scope = core.getInput('mobile', { required: true });
let payload = {
    "message" : mesej,
}
let getSplask = axios.post(urltoken + scope, payload)
.then(res => {
    console.log(res.data)
    let myData = JSON.stringify(res.data)
    core.setOutput('jawapan', myData);
})
.catch(err => {
    console.error(err); 
})