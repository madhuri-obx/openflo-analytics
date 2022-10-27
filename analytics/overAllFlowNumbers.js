
function lengthOfFlows(flows) {
    return flows.length
}

 function lengthOfDeletedFlows(flows) {
    let deletedFlows = flows.filter(flow => {
        return flow.is_deleted
    })
    return deletedFlows.length

}


module.exports = {
    lengthOfFlows, 
    lengthOfDeletedFlows
}