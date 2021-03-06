import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"

function App() {
  return (
	<div className="app">
		  <Header />
		  <main>
			  <Note title="Note Title" content="Note content"/>
		  </main>
		  <Footer />  
	</div>
  );
}

export default App;
