var dat = new Date();
console.log(`Get Date By System :${dat.getDate()} / ${dat.getMonth()} / ${dat.getFullYear()}\n`);
console.log(`Get Time By System :${dat.getHours()} : ${dat.getMinutes()} : ${dat.getMilliseconds()}\n`);
dat.setDate(20);
dat.setUTCMonth(10);
dat.getFullYear(2020);
dat.setHours(21);
dat.setMinutes(18);
console.log(`Get Date Which Set :${dat.getDate()} / ${dat.getMonth()} / ${dat.getFullYear()}\n`);
console.log(`Get Time Which Set :${dat.getHours()} : ${dat.getMinutes()} : ${dat.getMilliseconds()}\n`);


var its = new Date("December 08 2020");
console.log(`Get Date Which Set :${its.getDate()} / ${its.getMonth()} / ${its.getFullYear()}\n`);
console.log(`Get Time Which Set :${its.getHours()} : ${its.getMinutes()} : ${its.getMilliseconds()}`);