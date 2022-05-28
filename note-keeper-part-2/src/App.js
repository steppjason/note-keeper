import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import Notes from "./data/Notes"

function App() {
  return (
	<div className="app">
		  <Header />
		  <main>
			  {Notes.map((note) => <Note key={note.id} title={note.title} content={note.content}/>)}
		  </main>
		  <Footer />  
	</div>
  );
}

export default App;
