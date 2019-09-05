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








// Below is all the code I had written before modularizing and making basically an entirely new daily journal application. I am not sure if I will need the code below to finish the daily journal, but saving just in case.
// const makeCompletedDatesComponent = (oneJournalObjectParameter) => {
//     return `
//     <article>
//     <h3>${oneJournalObjectParameter.dateOfEntry}</h3>
//     <h4>${oneJournalObjectParameter.conceptsCovered}</h4>
//     <p>${oneJournalObjectParameter.textParagraph}</p>
//     <p>${oneJournalObjectParameter.moodOfEntry}</p>
//     </article>
//     `
// }


// const entryLog = document.querySelector("#entry-log")

// const printEverythingYouHaveEntered = (allJournalEntriesArray) => {
//     for(let i = 0; i < allJournalEntriesArray.length; i++){
//          const eachCompletedForm = makeCompletedDatesComponent(allJournalEntriesArray[i])
//          entryLog.innerHTML += eachCompletedForm
//     }

// }

// printEverythingYouHaveEntered(completeArray)




// const recordButton = document.querySelector("#submit-btn");

// recordButton.addEventListener("click", function(){

//     const dateValue = document.querySelector("#journal-entry-date").value;
//     const conceptValue = document.querySelector("#journal-entry-concept").value;
//     const textValue = document.querySelector("#journal-entry-text").value;
//     const moodValue = document.querySelector("#mood-select").value;



//     const newJournalEntryObject = {
//         dateOfEntry: dateValue,
//         conceptsCovered: conceptValue,
//         textParagraph: textValue,
//         moodOfEntry: moodValue
//     }

//     completeArray.push(newJournalEntryObject)



//     printEverythingYouHaveEntered(completeArray)



//     document.querySelector("#journal-entry-date").value = "";
//     document.querySelector("#journal-entry-concept").value = "";
//     document.querySelector("#journal-entry-text").value = "";
//     document.querySelector("#mood-select").value = "";

// })