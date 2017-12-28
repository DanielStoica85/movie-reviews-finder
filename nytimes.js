class NYTimes {
    constructor() {
        this.apikey = '3f6a52202dbe4403a994a689069246e9';
    }

    async getReviews(movieTitle) {

        const response = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${this.apikey}&query=${movieTitle}`);

        const reviews = await response.json();

        return reviews;

    }
}