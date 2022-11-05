const flows = require('./flows')
const flowsOfBranch = require('./analytics/branchWiseNumbers')


let length = flowsOfBranch.lengthOfFlowsOfBranch(flows.flows)
console.log("Total Flows of  branch ",length)

let length1 = flowsOfBranch.lengthOfDeletedFlows(flows.flows,6)
console.log("number of deleted flows for given branch ", length1)

let length2 = flowsOfBranch.lengthOfCompletedFlows(flows.flows,6)
console.log("Length of completed flows ", length2)

let length3 = flowsOfBranch.lengthOfArchivedFlows(flows.flows,6)
console.log("length of archived flows ", length3)

let length4 = flowsOfBranch.flowsWithMoreThan2Tenants(flows.flows,6)
console.log("Numbers of Tenants greater than 2 ", length4)

let length5 = flowsOfBranch.numberOfAstGenerated(flows.flows,6)
console.log("length of ast generated ", length5)

let length6 = flowsOfBranch.numberOfNhaGenrated(flows.flows,6)
console.log("length of nha generated ", length6)

let length7 = flowsOfBranch.numberOfFlowsUsed(flows.flows,6)
console.log("length of flow used ", length7)

let length8 = flowsOfBranch.numberOfReapitTenancyId(flows.flows,6)
console.log("Number of reapit tenancy id ", length8)

let length9 = flowsOfBranch.numberOfIsAddedToProperty(flows.flows,6)
console.log("Number of is added to property ", length9)

let length10 = flowsOfBranch.numberOfEmptyLandlords(flows.flows,6)
console.log("Number of empty landlords ", length10)

let length11 = flowsOfBranch.numberOfAstgenerated(flows.flows,6)
console.log("Number of flows where ast generated is assigned ", length11)

let length12 = flowsOfBranch.numberOfAstIsNotGenerated(flows.flows,6)
console.log("Number of flows where ast generated is not assigned ", length12)

let length13 = flowsOfBranch.openFlowRentalOffer(flows.flows,6)
console.log("Number of flow of open flow rental offer >5000 ", length13)

let length14 = flowsOfBranch.isIrpRequired(flows.flows,6)
console.log("number of flow of irp required ", length14)

let length15 = flowsOfBranch.isIrpNotRequired(flows.flows,6)
console.log("number of flow of irp not required ", length15)

let length16 = flowsOfBranch.tenantWaterResponsibility(flows.flows,6)
console.log("Number of flow of tenat water responsibility ", length16)

let length17 = flowsOfBranch.agentWaterResponsibility(flows.flows,6)
console.log("Number of flow of tenat water responsibility ", length17)

let length18 = flowsOfBranch.flowOfFurnishedProperty(flows.flows,6)
console.log("Number of flow of furnished property ", length18)

let length19 = flowsOfBranch.certificates(flows.flows,6)
console.log("Number of flow of certificates ", length19) 

let length20 = flowsOfBranch.aveOfRentalAmount(flows.flows,6)
console.log("Average of rental amount per flow ", length20)

let length21 = flowsOfBranch.aveOfHoldingDeposite(flows.flows,6)
console.log("Average of holding deposite ", length21)

let length22 = flowsOfBranch.aveCertificates(flows.flows,6)
console.log("Average of number of certificates per flow ", length22)

let length23 = flowsOfBranch.aveTenantsPerFlow(flows.flows,6)
console.log("Average of tenants per flow ", length23)

let length24 = flowsOfBranch.astContractUrl(flows.flows,6)
console.log("Array of ast contract url ", length24)

let length25 = flowsOfBranch.nhaContractUrl(flows.flows,6)
console.log("array of nha contract url ", length25)

let length26 = flowsOfBranch.createdAt(flows.flows,6)
console.log("flow created in current month ", length26)

let length27 = flowsOfBranch.updatedAt(flows.flows,6)
console.log("flow updated in current month ", length27)