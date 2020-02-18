const rectangle = require('./rectangle')

function analyzeRectangle(l, b) {
    rectangle.analyze(
        l, b,
        (error, analysis) => {
            if (error) {
                console.log('[ERROR]: ' + error.message);
            } else {
                console.log('[Perimeter]: ' + analysis.perimeter(l, b))
                console.log('[Area]: ' + analysis.area(l, b))
            }
        }
    )
}

analyzeRectangle( 2, 4);
analyzeRectangle( 3, 5);
analyzeRectangle( 0, 5);
analyzeRectangle(-3, 5);