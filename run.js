const flows = require('./flows')
const flowNumbers = require('./analytics/overAllFlowNumbers')

let length = flowNumbers.lengthOfFlows(flows.flows)
console.log("Total Flows  ",length)

let length1 = flowNumbers.lengthOfDeletedFlows(flows.flows)
console.log("Length of deleted flows  ", length1)




