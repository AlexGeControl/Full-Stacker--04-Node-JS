const perimeter = (l ,b) => (2*(l + b))
const area = (l, b) => (l * b)

exports.analyze = (l, b, callback) => {
    if (l <= 0 || b <= 0) {
        setTimeout(
            () => {
                callback(
                    new Error('[Rectangle Analysis]: dimensions should all be greater than 0'),
                    null
                )
            },
            2000
        );
    } else {
        setTimeout(
            () => {
                callback(
                    null,
                    {
                        perimeter: perimeter,
                        area: area
                    }
                )
            },
            2000
        );
    }
}