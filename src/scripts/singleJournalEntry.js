// Build HTML string for individual entry

const htmlBuilder = {
    buildSingleEntry: (singleJournalEntry) => {
        return `
        <section id="single-entry-container">
        <h3>${singleJournalEntry.date}</h3>
        <h4>Concept: ${singleJournalEntry.concept}</h4>
        <p>Journal Entry: ${singleJournalEntry.text}</p>
        <p>Mood: ${singleJournalEntry.mood}</p>
        </section>
        `
    }

}

export default htmlBuilder