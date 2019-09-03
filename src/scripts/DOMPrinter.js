// Module that contains function to print to the DOM
import htmlBuilder from "./singleJournalEntry.js"

const domPrinter = {
    printSingleEntry: (singleJournalEntry) => {
    // Build HTML string for individual entry
    const htmlString = htmlBuilder.buildSingleEntry(singleJournalEntry)
    // Add Html String to the DOM
    document.querySelector("#entry-log").innerHTML += htmlString;
    }
}

export default domPrinter