// Module that contains function to print to the DOM
import htmlBuilder from "./singleJournalEntry.js"

const domPrinter = {

    printSingleEntry: (singleJournalEntry) => {

    // Build HTML string for individual entry
    const htmlString = htmlBuilder.buildSingleEntry(singleJournalEntry)

    // Add Html String to the DOM
    document.querySelector("#entry-log").innerHTML += htmlString;
    document.querySelector("#journal-entry-date").value = "";
    document.querySelector("#journal-entry-concept").value = "";
    document.querySelector("#journal-entry-text").value = "";
    document.querySelector("#mood-select").value = "";
    },

    printEntryEditForm: (journalObjectToEdit) => {
        const targetCard = document. querySelector(`#journal-card-${journalObjectToEdit.id}`)


        targetCard.innerHTML =
        `<form action="">
        <fieldset>
            <label for="entryDate">Date of Entry</label>
            <input type="date" name="entryDate" id="journal-entry-date-${journalObjectToEdit.id}" value="${journalObjectToEdit.date}">
        </fieldset>
        <fieldset>
            <label for="entryConcept">Concepts Covered</label>
            <input type="text" name="entryConcept" id="journal-entry-concept-${journalObjectToEdit.id}" value="${journalObjectToEdit.concept}">
        </fieldset>
        <fieldset>
            <label for="entryText">Journal Entry</label>
            <textarea id="journal-entry-text-${journalObjectToEdit.id}">${journalObjectToEdit.text}</textarea>
        </fieldset>
        <fieldset>
            <select id="mood-select-${journalObjectToEdit.id}">
                <option value="">${journalObjectToEdit.mood}</option>
                <option value="happy">Happy</option>
                <option value="ecstatic">Ecstatic</option>
                <option value="cranky">Cranky</option>
                <option value="nervous">Nervous</option>
                <option value="sleepy">Sleepy</option>
                <option value="confused">Confused</option>
                <option value="okay">Okay</option>
            </select>
        </fieldset>

            <button id="edit-submit-btn-${journalObjectToEdit.id}" type="button">Save Edit</button>

    </form>`
    }

}

export default domPrinter