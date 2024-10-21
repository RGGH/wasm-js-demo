async function run() {
    await init(); // Initialize the Wasm module

    // Run calculation in Rust (WebAssembly)
    console.time("Wasm Calculation Time"); // Start timing
    const wasmResult = complex_calculation(3.14, 2.71);
    console.timeEnd("Wasm Calculation Time"); // End timing and log result

    // Output the result
    document.getElementById('result').innerText = `Result from Wasm: ${wasmResult}`;

    // Run calculation in JavaScript
    console.time("JS Calculation Time"); // Start timing
    const jsResult = jsComplexCalculation(3.14, 2.71);
    console.timeEnd("JS Calculation Time"); // End timing and log result

    // Output the result
    document.getElementById('js-result').innerText = `Result from JS: ${jsResult}`;
}

function jsComplexCalculation(a, b) {
    // Perform a similar heavy calculation as in your Rust code
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
        result += Math.sin(a) * Math.cos(b) * Math.sqrt(i);
    }
    return result;
}

run();

