db.movieDetails.updateOne({
    title: "The Martian"
}, {
    $set: {
        poster: "http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgw0DA3TI4NjE@._"
    }
});

db.movieDetails.updateOne({
    title: "The Martian"
}, {
    $set: {
        "awards": {
            "wins": 8,
            "nominations": 14,
            "text": "Nominated for 3 Golden Globs. Another 8 wins & 14 nominations."
        }
    }
});