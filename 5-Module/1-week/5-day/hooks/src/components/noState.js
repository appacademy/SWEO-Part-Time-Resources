export const NoState = () => {
    let counter = 0;

    console.log('Line 4 counter', counter);

    return (
        <div className="container">
            <span>{counter}</span>
            <div>
                <button
                    onClick={() => {
                        counter -= 1;
                        console.log(counter);
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        counter += 1;
                        console.log(counter);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};
