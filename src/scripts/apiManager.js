const apiManager = {
    getAllEntries: () => {
        // Fetch entries from Json server and parse them to JS
        return fetch("http://localhost:3000/entries")
            .then(response => response.json());
    },
    getOneEntry: entryId => {
        return fetch(`http://localhost:3000/entries/${entryId}`)
        .then(response =>
          response.json()
        );
      },


    saveJournalEntry: (newEntry) => {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        });

    },
    deleteOneEntry: (idToDelete) => {
        return fetch(`http://localhost:3000/entries/${idToDelete}`, {
        method: "DELETE"
    });
    },
    editOneEntry: (id, journalObject) => {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalObject)
        });
    }

};

export default apiManager