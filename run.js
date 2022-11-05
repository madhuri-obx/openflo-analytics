const flows = require('./flows')
const flowNumbers = require('./analytics/overAllFlowNumbers')

let length = flowNumbers.lengthOfFlows(flows.flows)
console.log("Total Flows  ",length)

let length1 = flowNumbers.lengthOfDeletedFlows(flows.flows)
console.log("Length of deleted flows  ", length1)

let length2 = flowNumbers.lengthOfCompletedFlows(flows.flows)
console.log("Length of completed flows ", length2)

let length3 = flowNumbers.lengthOfArchivedFlows(flows.flows)
console.log("length of archived flows ", length3)

let length4 = flowNumbers.flowsWithMoreThan2Tenants(flows.flows)
console.log("Numbers of Tenants greater than 2 ", length4)

let lengthof = flowNumbers.flowsWithTenatsAppUserId(flows.flows)
console.log("number of is deleted in user ", lengthof)

let length5 = flowNumbers.numberOfAstGenerated(flows.flows)
console.log("length of ast generated ", length5)

let length6 = flowNumbers.numberOfNhaGenrated(flows.flows)
console.log("length of nha generated ", length6)

let length7 = flowNumbers.numberOfFlowsUsed(flows.flows)
console.log("length of flow used ", length7)

let length8 = flowNumbers.numberOfReapitTenancyId(flows.flows)
console.log("Number of reapit tenancy id ", length8)

let length9 = flowNumbers.numberOfIsAddedToProperty(flows.flows)
console.log("Number of is added to property ", length9)

let length10 = flowNumbers.numberOfEmptyLandlords(flows.flows)
console.log("Number of empty landlords ", length10)

let length11 = flowNumbers.numberOfAstgenerated(flows.flows)
console.log("Number of flows where ast generated is assigned ", length11)

let length12 = flowNumbers.numberOfAstIsNotGenerated(flows.flows)
console.log("Number of flows where ast generated is not assigned ", length12)

let length13 = flowNumbers.openFlowRentalOffer(flows.flows)
console.log("Number of flow of open flow rental offer >5000 ", length13)

let length14 = flowNumbers.isIrpRequired(flows.flows)
console.log("number of flow of irp required ", length14)

let length15 = flowNumbers.isIrpNotRequired(flows.flows)
console.log("number of flow of irp not required ", length15)

let length16 = flowNumbers.tenantWaterResponsibility(flows.flows)
console.log("Number of flow of tenat water responsibility ", length16)

let length17 = flowNumbers.agentWaterResponsibility(flows.flows)
console.log("Number of flow of tenat water responsibility ", length17)

let length18 = flowNumbers.flowOfFurnishedProperty(flows.flows)
console.log("Number of flow of furnished property ", length18)

let length19 = flowNumbers.certificates(flows.flows)
console.log("Number of flow of certificates ", length19) 

let length20 = flowNumbers.aveOfRentalAmount(flows.flows)
console.log("Average of rental amount per flow ", length20)

let length21 = flowNumbers.aveOfHoldingDeposite(flows.flows)
console.log("Average of holding deposite ", length21)

let length22 = flowNumbers.aveCertificates(flows.flows)
console.log("Average of number of certificates per flow ", length22)

let length23 = flowNumbers.aveTenantsPerFlow(flows.flows)
console.log("Average of tenants per flow ", length23)