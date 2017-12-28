class UI {
    constructor() {
        this.reviewsSection = document.getElementById('reviews');
    }

    showReviews(results) {

        let output = '';
        results.forEach(function (result) {
            // check if movie image exists
            if (result.multimedia) {
                output += `
                <div class="card card-body mb-3">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="img-fluid mb-2" src="${result.multimedia.src}" alt="Movie Image">
                            <a href="${result.link.url}" target="_blank" class="btn btn-primary btn-block md-4">${result.display_title}</a>
                        </div>
                        <div class="col-md-9">
                            <span class="badge badge-primary">Rating: ${result.mpaa_rating}</span>
                            <span class="badge badge-secondary">Opening Date: ${result.opening_date}</span>
                            <span class="badge badge-success">Publication Date: ${result.publication_date}</span>
                            <br><br>
                            <ul class = "list-group">
                                <li class="list-group-item">Title: ${result.display_title}</li>
                                <li class="list-group-item">Headline: ${result.headline}</li>
                                <li class="list-group-item">Summary: ${result.summary_short}</li>
                                <li class="list-group-item"><a href="${result.link.url}" target="_blank">Read the New York Times Review of "${result.display_title}"...</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            } else {
                output += `
                <div class="card card-body mb-3">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="img-fluid mb-2" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Comic_image_missing.png" alt="Movie Image">
                            <a href="${result.link.url}" target="_blank" class="btn btn-primary btn-block md-4">${result.display_title}</a>
                        </div>
                        <div class="col-md-9">
                            <span class="badge badge-primary">Rating: ${result.mpaa_rating}</span>
                            <span class="badge badge-secondary">Opening Date: ${result.opening_date}</span>
                            <span class="badge badge-success">Publication Date: ${result.publication_date}</span>
                            <br><br>
                            <ul class = "list-group">
                                <li class="list-group-item">Title: ${result.display_title}</li>
                                <li class="list-group-item">Headline: ${result.headline}</li>
                                <li class="list-group-item">Summary: ${result.summary_short}</li>
                                <li class="list-group-item"><a href="${result.link.url}" target="_blank">Read the New York Times Review of "${result.display_title}"...</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            }
        });

        this.clearReviews();
        this.reviewsSection.innerHTML = output;
    }

    showAlert(message, className) {
        // Clear any remaining reviews from previous searches
        this.clearReviews();
        // Clear any remaining alerts
        this.clearAlert();
        // Create div for alert
        const div = document.createElement('div');
        // Add class to div
        div.className = className;
        // Add text inside div
        div.appendChild(document.createTextNode(message));
        // Get parent and neighbor
        const container = document.querySelector('.searchContainer'); // parent
        const search = document.querySelector('.search'); // search box
        // Insert div
        container.insertBefore(div, search);

        // Clear alert after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearReviews() {
        this.reviewsSection.innerHTML = '';
    }
}