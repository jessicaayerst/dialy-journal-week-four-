// Build HTML string for individual entry

const htmlBuilder = {
    buildSingleEntry: (singleJournalEntry) => {
        return `
        <article>
        <h3>${singleJournalEntry.dateOfEntry}</h3>
        <h4>${singleJournalEntry.conceptsCovered}</h4>
        <p>${singleJournalEntry.textParagraph}</p>
        <p>${singleJournalEntry.moodOfEntry}</p>
        </article>
        `
    }

}

export default htmlBuilder