// Init externals
const nytimes = new NYTimes();
const ui = new UI();

// Search input
const searchInput = document.getElementById('searchReviews');

// search input event listener for keyup
searchInput.addEventListener('keyup', (e) => {

    // Get input text
    const textEntered = e.target.value;

    if (textEntered !== '') {
        // make nytimes api request
        nytimes.getReviews(textEntered)
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

});