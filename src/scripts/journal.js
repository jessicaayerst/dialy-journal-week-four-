import apiManager from "./apiManager.js"
import domPrinter from "./DOMPrinter.js"

// There was a const completeArray here before transplanting to Json that held all my entries.

// Get entries from Json server
apiManager.getAllEntries().then(parsedEntries => {
    // Loop through the entries from Json server
    parsedEntries.forEach(entry => {

        domPrinter.printSingleEntry(entry)

    })
}

)

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
    }
// Using POST Method to Create Resources
// Now you must use fetch to create your journal entry in the API. The default method is GET, so you've never had to specify and configuration options with your fetch statements before. However, with POST, you need to configure the request.
    fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    }).then(() => {
        apiManager.getAllEntries().then(parsedEntries => {
            document.querySelector("#entry-log").innerHTML = ""
            // Loop through the entries from Json server
            parsedEntries.forEach(entry => {
        
                domPrinter.printSingleEntry(entry)
        
            })
        }
        
        )
        

})
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