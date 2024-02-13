const os = require("os");

console.log("OS Platform", os.platform());

console.log("OS CPU Arch", os.arch());

console.log("Total Memory GB: ", os.totalmem() / 1000000000);

console.log("# of logical CPU cores", os.cpus().length);

console.log("Home directory for current user", os.homedir());
