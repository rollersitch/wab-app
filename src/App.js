import "./App.css";
import ChatList from "./components/ChatList";
import CurrentChat from "./components/CurrentChat";
import ChatsProvider from "./store/ChatsProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">HEADER</header>
      <ChatsProvider>
        <div id="mainContainer" className="mainContainer">
          <ChatList></ChatList>
          <CurrentChat></CurrentChat>
        </div>
      </ChatsProvider>
    </div>
  );
}

export default App;
