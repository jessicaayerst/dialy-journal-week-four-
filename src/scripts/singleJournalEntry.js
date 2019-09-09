// Build HTML string for individual entry

const htmlBuilder = {
    buildSingleEntry: (singleJournalEntry) => {
        return `
        <div class="entry-card" >
        <section id="journal-card-${singleJournalEntry.id}">
        <h3>${singleJournalEntry.date}</h3>
        <h4>Concept: ${singleJournalEntry.concept}</h4>
        <p>Journal Entry: ${singleJournalEntry.text}</p>
        <p>Mood: ${singleJournalEntry.mood}</p>
        <button id="delete-entry-${singleJournalEntry.id}">Delete</button>
        <button id="edit-entry-${singleJournalEntry.id}">Edit</button>
        </section>
        </div>
        `;
    },
    

}

export default htmlBuilder