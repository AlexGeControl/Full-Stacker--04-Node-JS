const rectangle = require('./rectangle')

function analyzeRectangle(l, b) {
    console.log('[Rectangle Analysis]: rectangle with l = ' + l + ' and b = ' + b);

    if (l <= 0 || b <= 0) {
        console.log('[Rectangle Analysis]: dimensions should be greater than zero')
    } else {
        console.log('[Rectangle Analysis]: perimeter -- ' + rectangle.perimeter(l, b));
        console.log('[Rectangle Analysis]: area -- ' + rectangle.area(l, b));
    }
}

analyzeRectangle( 2, 4);
analyzeRectangle( 3, 5);
analyzeRectangle( 0, 5);
analyzeRectangle(-3, 5);