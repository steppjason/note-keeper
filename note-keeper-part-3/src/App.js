import React, {useState} from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"
import AddNoteInput from "./components/AddNoteInput"
import Note from "./components/Note"

//import Notes from "./data/Notes"

function App() {

	const [notes, setNotes] = useState([])

	function addNote(note) {
		setNotes(prev => {
			return [...prev, note]
		})
	}

	function deleteNote(id) {
		setNotes(prev => {
			return prev.filter((note, index) => {
				return note.id !== id
			})
		})

		console.log("delete")
	}

	return (
		<div className="app">
			<Header />
			<section>
				<AddNoteInput onAdd={addNote} />
			</section>
			<main>
				{notes.map((note, index) => <Note onDelete={deleteNote} key={note.id} id={note.id} title={note.title} content={note.content}/>)}
			</main>
			<Footer />  
		</div>
	);
}

export default App;
