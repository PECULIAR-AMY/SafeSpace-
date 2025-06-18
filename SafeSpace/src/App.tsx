
import Chats from "./components/pages/Chats"
import Diet from "./components/pages/Diet"
import Exercise from "./components/pages/Exercise"
import Motivation from "./components/pages/Motivation"
import Search from "./components/pages/Search"
function App() {
  return (
      <div className="bg-red-500">
    <Chats />
    <Search />
    <Diet />
    <Exercise />
    <Motivation />
      </div>
  )
}

export default App
