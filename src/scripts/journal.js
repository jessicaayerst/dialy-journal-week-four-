import apiManager from "./apiManager.js"
import domPrinter from "./DOMPrinter.js"

// Get entries from Json server
apiManager.getAllEntries().then(parsedEntries => {
    // Loop through the entries from Json server
    parsedEntries.forEach(entry => {

        domPrinter.printSingleEntry(entry)
    })
}
);

// Collect Form Field Values
// Use document.querySelector to select your input fields.
// Use the .value property on the input field elements to get the text that you typed/chose.
document.querySelector("#submit-btn").addEventListener("click", function () {
    const dateInput = document.querySelector("#journal-entry-date").value;
    const conceptInput = document.querySelector("#journal-entry-concept").value;
    const journalInput = document.querySelector("#journal-entry-text").value;
    const moodInput = document.querySelector("#mood-select").value;

    const newJournalEntry = {
        date: dateInput,
        concept: conceptInput,
        text: journalInput,
        mood: moodInput
    };
    // Using POST Method to Create Resources
    // Now you must use fetch to create your journal entry in the API. The code below saves the new journal entry to the api and then prints it to the dom and saves it 
    apiManager.saveJournalEntry(newJournalEntry)
    .then(apiManager.getAllEntries)
    .then(parsedEntries => {
        document.querySelector("#entry-log").innerHTML = ""
        // Loop through the entries from Json server
        parsedEntries.forEach(entry => {
    
            domPrinter.printSingleEntry(entry)
    
        });
        });
    })

    // -----CLICK EVENT FOR DELETE BUTTONS----//
// Add an event listener to the body element because the delete buttons are loaded dynamically and do not exist upon page load.
document.querySelector("body").addEventListener("click", () => {
    // If the user clicks on the delete button, do some stuff
    if(event.target.id.includes("delete-entry")) {
        // get the unique id of the entry you want to delete
        // remember that we gave our delete buttons id attributes of delete-entry-uniqueID
        const wordArray = event.target.id.split("-");
        const idOfThingWeWantToDelete = wordArray[2];
        console.log(idOfThingWeWantToDelete);

        // Make a DELETE request to our json server
        apiManager.deleteOneEntry(idOfThingWeWantToDelete).then(() => {
            // Once the delete is completed, get all the entries - we need to "refresh" the page again (kind of)
            apiManager.getAllEntries().then(parsedEntries => {
                document.querySelector("#entry-log").innerHTML = ""
                // Loop through the entries from Json server
                parsedEntries.forEach(entry => {
            
                    domPrinter.printSingleEntry(entry)
            
                });
                });
        })
    }
})

// ----------------EDIT EVENT LISTENERS------------------
// Event listener for edit button
document.querySelector("body").addEventListener("click", () => {
    if(event.target.id.includes("edit-entry")){
        // get the id of the thing we want to edit from the buttons id attribute
        const wordArray = event.target.id.split("-");
        const idOfThingWeWantToEdit = wordArray[2];
        console.log(idOfThingWeWantToEdit)
            
        // pass that id into the apiManager to bring back the entry we want to edit
        apiManager.getOneEntry(idOfThingWeWantToEdit)
        .then(singleEntry =>  {
            domPrinter.printEntryEditForm(singleEntry)
        })
    }
});


// ----------Event listener for save button-------
document.querySelector("body").addEventListener("click", () => {
    if(event.target.id.includes("edit-submit")){
        // get id of the thing we want to edit
        const wordArray = event.target.id.split("-");
        const idOfThingWeWantToEdit = wordArray[3];
        console.log(idOfThingWeWantToEdit);

        // get the value of the input
        const editedDateValue = document.querySelector(`#journal-entry-date-${idOfThingWeWantToEdit}`).value
        const editedConceptValue = document.querySelector(`#journal-entry-concept-${idOfThingWeWantToEdit}`).value
        const editedTextValue =  document.querySelector(`#journal-entry-text-${idOfThingWeWantToEdit}`).value
        const editedMoodValue = document.querySelector(`#mood-select-${idOfThingWeWantToEdit}`).value

        // put the input value into an object
        const editedJournalObject = {
            date: editedDateValue,
            concept: editedConceptValue,
            text: editedTextValue,
            mood: editedMoodValue 
        }
        // console.log("this is what we're going to send to the db", editedJournalObject)
        // send to the db with PUT method
        apiManager.editOneEntry(idOfThingWeWantToEdit, editedJournalObject)
        .then(() => {
            // Once the delete is completed, get all the entries - we need to "refresh" the page again (kind of)
            apiManager.getAllEntries().then(parsedEntries => {
                document.querySelector("#entry-log").innerHTML = ""
                // Loop through the entries from Json server
                parsedEntries.forEach(entry => {
            
                    domPrinter.printSingleEntry(entry)
            
                });
                });
        })
    }
})