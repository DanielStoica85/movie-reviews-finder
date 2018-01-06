// Init externals
const nytimes = new NYTimes();
const ui = new UI();

// Search input
const searchInput = document.getElementById('searchReviews');

let afterTypingTimer = '';
let doneTypingInterval = 1500;

// search input event listener for keyup
searchInput.addEventListener('keyup', (e) => {

    // Get input text
    const textEntered = e.target.value;

    // restart timer after each keyup event
    clearTimeout(afterTypingTimer);

    // execute donetyping function after timer
    afterTypingTimer = setTimeout(doneTyping.bind(null, textEntered), doneTypingInterval);

});

doneTyping = (input) => {
    if (input !== '') {
        // make nytimes api request
        nytimes.getReviews(input)
            .then(data => {
                if (data.num_results === 0) {
                    // Show alert
                    ui.showAlert('No movies found with this title.', 'alert alert-danger');
                } else {
                    // Render reviews
                    ui.showReviews(data.results);
                }
            });
    } else {
        // clear output
        ui.clearReviews();
    }
}