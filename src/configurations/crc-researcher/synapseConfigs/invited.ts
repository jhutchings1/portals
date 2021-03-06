import { HomeExploreConfig, SynapseConfig } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import loadingScreen from '../loadingScreen'
import facetAliases from '../facetAliases'
import handleParticipantWorkflowChange from '../handleParticipantWorkflowChange'

const rgbIndex = 0
export const dataSql = `SELECT * FROM syn22084217 where WorkflowState = 'Invited'`
export const dataEntityId = 'syn22084217'
const entityId = dataEntityId
const sql = dataSql

export const invited: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    entityId,
    shouldDeepLink: true,
    sql,
    name: 'Invited Participants',
    facetAliases,
    tableConfiguration: {
    },
    facetsToPlot: [
      'COVID19TestType',
      'Age',
      'ZipCode',
      'Sex',
      'Ethnicity',  
    ],
  },
}

export default invited
