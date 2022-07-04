import { TestScreen } from './screens/test-screen'
import { WSService } from './services/ws-service'
import ReactTooltip from 'react-tooltip'

const App = () => {
  WSService.initialize()

  return (
    <div style={{}}>
      <TestScreen />

      <ReactTooltip />
    </div>
  )
}

export default App
