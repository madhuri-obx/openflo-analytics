
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
        return flow.landlord_id == 0
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

function openFlowRentalOffer(flows) {
    let rentalOffer = flows.filter(flow => {
        if (flow.open_flow_rental_offer) {
            let rentalAmount = flow.open_flow_rental_offer.rental_amount
            
            return rentalAmount > 5000
        }
       else{
            return false;
        }
        })
    return rentalOffer.length
}

function isIrpRequired(flows) {
let irpRequired = flows.filter(flow => {
    if (flow.open_flow_rental_offer) {
        let irpRequired = flow.open_flow_rental_offer.is_irp_required
        
        return irpRequired 
    }
    else {
        return false;
    }
    })
return irpRequired.length
}

function isIrpNotRequired(flows) {
    let irpRequired = flows.filter(flow => {
        if (flow.open_flow_rental_offer) {
            let irpRequired = flow.open_flow_rental_offer.is_irp_required
            return !irpRequired 
        }
        else {
            return false;
        }
    })
    return irpRequired.length
}

function tenantWaterResponsibility(flows){
    let tenant = flows.filter(flow => {
        if(flow.open_flow_rental_offer) {
            let waterResponsibility = flow.open_flow_rental_offer.tenant_water_responsibility
            return waterResponsibility 
        }
        else{
            return false;
        }
        })
        return tenant.length
}

function agentWaterResponsibility(flows){
    let agent = flows.filter(flow => {
        if(flow.open_flow_rental_offer) {
            let waterResponsibility = flow.open_flow_rental_offer.tenant_water_responsibility
            return !waterResponsibility 
        }
        else {
            return false;
        }
        })
        return agent.length
}

function flowOfFurnishedProperty(flows) {
    let furnished = flows.filter(flow => {
        if (flow.open_flow_rental_offer) {
            let property = flow.open_flow_rental_offer.furnished
            return property
        }
        else {
            return false
        }
    })
    return furnished.length
}

function certificates(flows) {
    let flowCertificates = flows.filter(flow => {
        return flow.open_flow_certificates.length > 2
    })
    return flowCertificates.length 
}

function aveOfRentalAmount(flows) {
    let sum = 0;
    flows.map(flow => {
        if (flow.open_flow_rental_offer) {
            let rentalAmount = flow.open_flow_rental_offer.rental_amount
            sum += rentalAmount
        }   
    })
    let average =  sum / flows.length
    return average.toFixed(2)
}

function aveOfHoldingDeposite(flows) {
    let sum = 0;
    let deposites = flows.filter(flow => {
        if(flow.open_flow_holding_deposit) {
            let holdingDeposite = flow.open_flow_holding_deposit.holding_desposit_amount
            return sum += holdingDeposite
        }
    })
    let ave = sum / flows.length
    return ave.toFixed(3)
}

function aveCertificates(flows) {
    let sum =0;
        let flowCertificates = flows.filter(flow => {
            if(flow.open_flow_certificates) {
                let certificates = flow.open_flow_certificates.length
                return sum += certificates
            } 
        })
    let averageOfCertificates = sum /flows.length
    return averageOfCertificates.toFixed(2)
}

function aveTenantsPerFlow(flows) {
    let sum = 0;
        let flowOfTenants = flows.filter(flow => {
            if(flow.tenants) {
                let tenants = flow.tenants.length
                return sum +=tenants
            }
        })
        return sum/flows.length
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
    openFlowRentalOffer,
    isIrpRequired,
    isIrpNotRequired,
    certificates,
    tenantWaterResponsibility,
    agentWaterResponsibility,
    flowOfFurnishedProperty,
    aveOfRentalAmount,
    aveCertificates,
    aveTenantsPerFlow,
    aveOfHoldingDeposite
   


}