const flows = require('./flows')
const agreegatedResult = require('./analytics/agreegatedResults')

 let length1 = agreegatedResult.lengthOfFlows(flows.flows)
 console.log("Number of flows with branch_id ", length1)

let length2 = agreegatedResult.lengthOfDeletedFlow(flows.flows)
console.log("Number of flows of deleted ", length2)

 let length3 = agreegatedResult.lengthOfFlowsOfPropertyId(flows.flows, "property_id")
 console.log("Number of flows with property_id ", length3)


 let length5 = agreegatedResult.maximumOfFlow(flows.flows)
 console.log(" Maximum number of flow of deleted flow with id", length5 )

 let length6 = agreegatedResult.maximumOfCompletedFlow(flows.flows)
 console.log(" Maximum number of flow of completed flow with id", length6 )

 let length7 =agreegatedResult.maximumOfarchivedFlow(flows.flows)
 console.log(" Maximum number of flow of archived flow with id", length7 )

 length8 = agreegatedResult.maximumOfReapitFlow(flows.flows)
 console.log("Maximum number of flow of reapit flow with id ", length8)

 length9 = agreegatedResult.maximumOfFlowOfProperty(flows.flows,"deletedFlows")
 console.log("Maximum of property", length9)

 length10 = agreegatedResult.maximumOfFlowOfProperty(flows.flows,"completedFlows")
 console.log("Maximum of property", length10)

 length11 = agreegatedResult.maximumOfFlowOfProperty(flows.flows,"reapitFlows")
 console.log("Maximum of property", length11)

 length12 = agreegatedResult.maximumOfFlowOfProperty(flows.flows,"archivedFlow")
 console.log("Maximum of property", length12)
let length123 = agreegatedResult.flowsWithPropertyId(flows.flows,6257, "is_deleted")
console.log("flows with propperty id", length123)

let length13 = agreegatedResult.propertyIdWithFlows(flows.flows)
console.log("Number of flow of property with property id", length13)

let length14 = agreegatedResult.maximumFlowOfPropertyWithPropertyId(flows.flows,"deletedFlows")
console.log("Property id with maximum number of flow ", length14)

let length15 = agreegatedResult.maximumFlowOfPropertyWithPropertyId(flows.flows,"completedFlows")
console.log("Property id with maximum number of flow ", length15)

let length16 = agreegatedResult.maximumFlowOfPropertyWithPropertyId(flows.flows,"reapitFlows")
console.log("Property id with maximum number of flow ", length16)

let length17 = agreegatedResult.maximumFlowOfPropertyWithPropertyId(flows.flows,"archivedFlow")
console.log("Property id with maximum number of flow ", length17)

let length26 = agreegatedResult.astContractUrl(flows.flows)
console.log("Number of flows of ast contract url", length26)

let length27 = agreegatedResult.nhaContractUrl(flows.flows)
console.log("Number of flows nha contract url", length27)

let length30 = agreegatedResult.latestCreatedFlow(flows.flows)
console.log("Number of latest created Flow ", length30)

let length31 = agreegatedResult.lastestUpdatedFlow(flows.flows)
console.log("Number of lastest updated flow ", length31)

