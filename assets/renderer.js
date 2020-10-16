const { RSA_NO_PADDING } = require("constants");
const { monitorEventLoopDelay } = require("perf_hooks");

function renderReadMe (props) {
    const {name, motivation, reason, problem, knowledge, unique, steps, collabs, screenshots, license} = props;
    return `
    ${name}

    ${motivation}

    ${reason}

    ${problem}

    ${knowledge}

    ${unique}

    ${steps}

    ${collabs}

    ${screenshots}

    ${license}
    
    `
};

module.exports = {
    renderReadMe
}

const str =renderReadMe ({ name: "Tunechi", motivation: "Cash", reason: "paid" });

console.log(str);