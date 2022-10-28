
function lengthOfFlows(flows) {
    return flows.length
}

 function lengthOfDeletedFlows(flows) {
    let deletedFlows = flows.filter(flow => {
        return flow.is_deleted
    })
    return deletedFlows.length
}

function lengthOfCompletedFlows(flows) {
    let completedFlows = flows.filter(flow => {
        return flow.is_completed
    })
    return completedFlows.length
}

function lengthOfArchivedFlows(flows) {
    let archivedFlows = flows.filter(flow => {
        return flow.is_archived
    })
    return archivedFlows.length
}

function flowsWithMoreThan2Tenants (flows) {
    let numberOfTenants = flows.filter(flow => {
        return flow.tenants.length > 2
    })
    return numberOfTenants.length
}

function flowsWithTenatsAppUserId(flows) {
    let tenants = flows.filter(flow => {
        let tenantsWithAppUser = flow.tenants.filter(user => {
            return user.app_user.user.is_delete
        })
    })
    return tenants.length
}



function numberOfAstGenerated(flows) {
    let astGenerated = flows.filter(flow =>{
        return flow.is_ast_generated
    })
    return astGenerated.length
}

function numberOfNhaGenrated(flows) {
    let nhaGenerated = flows.filter(flow => {
        return flow.is_nha_generated
    })
    return nhaGenerated.length
}

function numberOfFlowsUsed(flows) {
    let flowsUsed = flows.filter(flow => {
        return flow.is_flow_used
    })
    return flowsUsed.length
}

function numberOfReapitTenancyId(flows) {
    let reapitTenancyId = flows.filter(flow => {
        return flow.reapit_tenancy_id
    })
    return reapitTenancyId.length 
}

function numberOfIsAddedToProperty(flows) {
    let addedToProperty = flows.filter(flow => {
        return flow.is_added_to_property
    })
    return addedToProperty.length 
}

function numberOfEmptyLandlords(flows) {
    let landlords = flows.filter(flow => {
        return flow.landlord ==0
    })
    return landlords.length
}

function numberOfAstgenerated(flows) {
    let astGenerated = flows.filter(flow => {
        return flow.is_ast_signed !== 'false'
    })
    return astGenerated.length
}

function numberOfAstIsNotGenerated(flows) {
    let astNotGenerated = flows.filter(flow => {
        return flow.is_ast_signed =='false'
    })
    return astNotGenerated.length
}

function OpenFlowRentalOffer(flow) {
    let rentalOffer = flow.filter(flow =>{
        let rentalAmount = flow.open_flow_rental_offer.filter(offer => {
            return offer.rental_amount >5000
        })
        
    })
    return rentalOffer.length
}


module.exports = {
    lengthOfFlows, 
    lengthOfDeletedFlows,
    lengthOfCompletedFlows,
    lengthOfArchivedFlows,
    numberOfAstGenerated,
    numberOfNhaGenrated,
    numberOfFlowsUsed,
    numberOfReapitTenancyId,
    numberOfIsAddedToProperty,
    flowsWithMoreThan2Tenants,
    flowsWithTenatsAppUserId,
    numberOfEmptyLandlords,
    numberOfAstgenerated,
    numberOfAstIsNotGenerated,
    OpenFlowRentalOffer


}