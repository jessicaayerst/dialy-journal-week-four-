const apiManager = {
    getAllEntries: () => {
        // Fetch entries from Json server and parse them to JS
        return fetch("http://localhost:3000/entries")
        .then(response => response.json());
    }

}

export default apiManager