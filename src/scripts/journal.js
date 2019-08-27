// There was a const completeArray here before transplanting to Json that held all my entries.


fetch("http://localhost:3000/entries") 
    .then(entries => entries.json())  
    .then(parsedEntries => {
        parsedEntries.forEach(entries => {

            console.log(entries)

            document.querySelector("#entry-log").innerHTML += `
            <article>
            <h3>${entries.dateOfEntry}</h3>
            <h4>${entries.conceptsCovered}</h4>
            <p>${entries.textParagraph}</p>
            <p>${entries.moodOfEntry}</p>
            </article>
            `
        })
    }

    )

       
        


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