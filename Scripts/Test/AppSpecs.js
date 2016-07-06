requirejs.config({
    deps: [
"/base/Scripts/3rdParty/jQuery/jquery-1.11.3.min.js",
"/base/Scripts/App/Calc.js",
"/base/Scripts/Test/CalcSpec.js"
    ],
    callback: window.__karma__.start
});