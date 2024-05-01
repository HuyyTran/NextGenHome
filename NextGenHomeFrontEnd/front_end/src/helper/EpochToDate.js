export function EpochToDate(epoch){
    // ts = epoch timestamp
    // returns date obj
    return new Date(epoch*1000);
}

export function EpochToDateString(epoch){
    return EpochToDate(epoch).toDateString();
}