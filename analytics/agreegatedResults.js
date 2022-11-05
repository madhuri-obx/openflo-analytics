
const flowsOf = require('./branchWiseNumbers')

function lengthOfFlows(flows) {
let response = {}
flows.forEach(flow => {

    if(response[flow.branch_id]) {
        return (response[flow.branch_id] = response[flow.branch_id] + 1);
    }
    else {
        return response[flow.branch_id] = 1;
    }
})
    return response;
}

function lengthOfDeletedFlow(flows) {
    let response = [];
    ids =[];
    flows.map(flow => {
        let id = ids.indexOf(flow.branch_id)
        if(id == -1) {
            ids.push(flow.branch_id)
        }
    })
    ids.forEach(branchId => {
        let deleted = flowsOf.lengthOfDeletedFlows(flows,branchId)
        let branch = flowsOf.lengthOfFlowsOfBranch(flows, branchId)
        let completed = flowsOf.lengthOfCompletedFlows(flows,branchId)
        let reapit = flowsOf.numberOfReapitTenancyId(flows,branchId)
        let archived = flowsOf.lengthOfArchivedFlows(flows,branchId)
        response.push({
            branchId: branchId, 
            deletedFlows:deleted,
            noOfFlows: branch,
            completedFlows:completed,
            reapitFlows:reapit,
            archivedFlow :archived
        })
    })
    return response
}




function maximumOfFlow(flows) {
    let flow = lengthOfDeletedFlow(flows);
    flow.sort((a,b) => a.deletedFlows - b.deletedFlows)
    let obj =  flow[flow.length-1]
    const object = {'branch_id' :obj.branchId,
                    'deleted': obj.deletedFlows}
                    return object;
}

function maximumOfCompletedFlow(flows) {
    let flow = lengthOfDeletedFlow(flows);
    flow.sort((a,b) => a.completedFlows - b.completedFlows)
    let obj =  flow[flow.length-1]
    const object = {'branch_id' :obj.branchId,
                    'completedFlows': obj.completedFlows}
                    return object;
}

function maximumOfarchivedFlow(flows) {
    let flow = lengthOfDeletedFlow(flows);
    flow.sort((a,b) => a.archivedFlow - b.archivedFlow)
    let obj =  flow[flow.length-1]
    const object = {'branch_id' :obj.branchId,
                    'archivedFlow': obj.archivedFlow}
                    return object;
}
function maximumOfReapitFlow(flows) {
    let flow = lengthOfDeletedFlow(flows);
    flow.sort((a,b) => a.reapitFlows - b.reapitFlows)
    let obj =  flow[flow.length-1]
    const object = {'branch_id' :obj.branchId,
                    'reapitFlows': obj.reapitFlows}
                    return object;
}


function maximumOfFlowOfProperty(flows, property) {
    let flow = lengthOfDeletedFlow(flows);
    flow.sort((a,b) => a[property] - b[property])
    let obj =  flow[flow.length-1]
    const object = {'branch_id' :obj.branchId,
                    'property': obj[property]}
                    return object;
}


function astContractUrl(flows) {
    let astUrl = flows.map(flow => {
        return flow.ast_contract_url
    })
    let url = astUrl.filter(url => {
        return url;
    })  
    return url
}
function nhaContractUrl(flows) {
    let nhaUrl = flows.map(flow => {
        return flow.nha_contract_url
    })
    let url = nhaUrl.filter(url => {
        return url; 
    })  
    return url
}

function lengthOfFlowsOfPropertyId(flows,id) {
    let response = {}
    flows.forEach(flow => {
        if(response[flow[id]]) {
            return response[flow.id] = response[flow[id]] + 1;
        }
        else {
            return response[flow[id]] = 1;
        }
    })
    return response;
    }
////******************************************************************************////


// function flowsWithPropertyId(flows,propertyId, property) {
//     let flow = propertyIdWithFlows(flows)
    
// }

function propertyIdWithFlows(flows) {
        let response = [];
        ids =[];
        flows.map(flow => {
            let id = ids.indexOf(flow.property_id)
            if(id == -1) {
                ids.push(flow.property_id)
            }
        })
        ids.forEach(propertyId => {
            let deleted = flowsOf.lengthOfDeletedFlows(flows,propertyId)
            let property = flowsOf.lengthOfFlowsOfBranch(flows, propertyId)
            let completed = flowsOf.lengthOfCompletedFlows(flows,propertyId)
            let reapit = flowsOf.numberOfReapitTenancyId(flows,propertyId)
            let archived = flowsOf.lengthOfArchivedFlows(flows,propertyId)
            response.push({
                propertyId: propertyId, 
                deletedFlows:deleted,
                noOfFlows: property,
                completedFlows:completed,
                reapitFlows:reapit,
                archivedFlow :archived
            })
        })
        return response
    }

function maximumFlowOfPropertyWithPropertyId(flows, property) {
    let flow = propertyIdWithFlows(flows);
    flow.sort((a,b) => a[property] - b[property])
        let obj =  flow[flow.length-1]
        console.log(obj)
        const object = {'propertyId' :obj.propertyId,
                        'property': obj[property]}
                        return object;
    }

function getMaximumFlowInCurentMonth(flows, property) {
   let prop = maximumOfFlowOfProperty(flows, property)
   let time = latestCreatedFlow(flows);
   let abc = {};
   abc.push({
    'propertyId':propertyId
   })
   })
}

function latestCreatedFlow(flows) {
        let createdAt = flows.filter(flow => {
        let d = (flow.createdAt)
        let date = new Date(d)
        let today = new Date()
        let currentMonth = today.getMonth()
        let currentYear = today.getFullYear()
        let month = date.getMonth()
        let year = date.getFullYear()
        return (month == currentMonth && year == currentYear && flow.branch_id == branch_id)
    })
    return createdAt.length
}

function lastestUpdatedFlow(flows,branch_id) {
    let updatedAt = flows.filter(flow => {
        let d = flow.updatedAt
        let date = new Date(d)
        let today = new Date()
        let currentMonth = today.getMonth()
        let currentYear =today.getFullYear()
        let month = date.getMonth()
        let year = date.getFullYear()
        return (month == currentMonth && year == currentYear && flow.branch_id == branch_id)
    })
    return updatedAt.length
}




module.exports = {
    lengthOfFlows,
    lengthOfDeletedFlow,
    maximumOfFlow,
    maximumOfCompletedFlow,
    maximumOfarchivedFlow,
    maximumOfReapitFlow,
    maximumOfFlowOfProperty,
    astContractUrl,
    nhaContractUrl,
    
    //flowsWithPropertyId,
    lengthOfFlowsOfPropertyId,
    propertyIdWithFlows,
    maximumFlowOfPropertyWithPropertyId,
   
    //latestCreatedFlow,
    lastestUpdatedFlow


}