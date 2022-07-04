import { TestScreen } from './screens/test-screen'
import { WSService } from './services/ws-service'

const App = () => {
  WSService.initialize()

  return (
    <div style={{}}>
      <TestScreen />
    </div>
  )
}

export default App
