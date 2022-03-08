function getNameFromCommandLine() {
    return process.argv[process.argv.length-1];
    // Write you code here, name should be taken as args in process.argv
}

function getNameFromEnv() {
    return process.env.name;
    // Write your code here
}

function getNameFromReadLine() {
    // Write your code here
    const readLine= require("readLine");
    const name = readLine.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    name.question((namee)=>{
        return namee
    });
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}