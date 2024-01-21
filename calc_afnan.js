// CalcJS
var Length1A = 0
var Width1A = 0
var Diameter1B = 0

var Length2A = 0
var Width2A = 0
var Depth2A = 0
var Diameter2B = 0
var Depth2B = 0

var Length3A = 0
var Width3A = 0
var Depth3A = 0

var RiseD = 0
var HoseD = 0
var PressureD = 0
var FittingsD = 0

var WidthE = 0
var DepthE = 0
var FlowE = 0

var WattF = 0
var kwhrF = 0

function Input1A(Check) {
    var Char1A
    var Test1A = "N"
    for (var i = 0; i < Check.length; i++) {
        Char1A = Check.substring(i, i + 1)
        if (Char1A != "." && (Char1A < "0" || Char1A > "9")) {
            Test1A = "Y"
        }
    }
    if (Test1A == "Y") {
        alert("Sorry, please use numbers with decimals.")
    }
}

function Input1B(Check) {
    var Char1B
    var Test1B = "N"
    for (var i = 0; i < Check.length; i++) {
        Char1B = Check.substring(i, i + 1)
        if (Char1B != "." && (Char1B < "0" || Char1B > "9")) {
            Test1B = "Y"
        }
    }
    if (Test1B == "Y") {
        alert("Sorry, please use numbers with decimals.")
    }
}

function Input2A(Check) {
    var Char2A
    var Test2A = "N"
    for (var i = 0; i < Check.length; i++) {
        Char2A = Check.substring(i, i + 1)
        if (Char2A != "." && (Char2A < "0" || Char2A > "9")) {
            Test2A = "Y"
        }
    }
    if (Test2A == "Y") {
        alert("Sorry, please use numbers with decimals.")
    }
}

function Input2B(Check) {
    var Char2B
    var Test2B = "N"
    for (var i = 0; i < Check.length; i++) {
        Char2B = Check.substring(i, i + 1)
        if (Char2B != "." && (Char2B < "0" || Char2B > "9")) {
            Test2B = "Y"
        }
    }
    if (Test2B == "Y") {
        alert("Sorry, please use numbers with decimals.")
    }
}

function Input3A(Check) {
    var Char3A
    var Test3A = "N"
    for (var i = 0; i < Check.length; i++) {
        Char3A = Check.substring(i, i + 1)
        if (Char3A != "." && (Char3A < "0" || Char3A > "9")) {
            Test3A = "Y"
        }
    }
    if (Test3A == "Y") {
        alert("Sorry, please use numbers with decimals.")
    }
}

function Input3B(Check) {
    var Char3B
    var Test3B = "N"
    for (var i = 0; i < Check.length; i++) {
        Char3B = Check.substring(i, i + 1)
        if (Char3B != "." && (Char3B < "0" || Char3B > "9")) {
            Test3B = "Y"
        }
    }
    if (Test3B == "Y") {
        alert("Sorry, please use numbers with decimals.")
    }
}

function InputD(Check) {
    var CharD
    var TestD = "N"
    for (var i = 0; i < Check.length; i++) {
        CharD = Check.substring(i, i + 1)
        if (CharD != "." && (CharD < "0" || CharD > "9")) {
            TestD = "Y"
        }
    }
    if (TestD == "Y") {
        alert("Sorry, please use numbers with decimals.")
    }
}

function InputE(Check) {
    var CharE
    var TestE = "N"
    for (var i = 0; i < Check.length; i++) {
        CharE = Check.substring(i, i + 1)
        if (CharE != "." && (CharE < "0" || CharE > "9")) {
            TestE = "Y"
        }
    }
    if (TestE == "Y") {
        alert("Sorry, please use numbers with decimals.")
    }
}

function InputF(Check) {
    var CharF
    var TestF = "N"
    for (var i = 0; i < Check.length; i++) {
        CharF = Check.substring(i, i + 1)
        if (CharF != "." && (CharF < "0" || CharF > "9")) {
            TestF = "Y"
        }
    }
    if (TestF == "Y") {
        alert("Sorry, please use numbers with decimals.")
    }
}

function Calc1A() {
    Length1A = parseFloat(document.input1A.elements[0].value)
    Width1A = parseFloat(document.input1A.elements[1].value)
    Surface1A = Math.ceil(Length1A * Width1A)

    document.output1A.elements[1].value = Surface1A
}
function Calc1B() {
    Diameter1B = parseFloat(document.input1B.elements[0].value)
    Surface1B = Math.ceil(Diameter1B * Diameter1B * .78)

    document.output1B.elements[1].value = Surface1B
}

function Calc2A() {
    Length2A = parseFloat(document.input2A.elements[0].value)
    Width2A = parseFloat(document.input2A.elements[1].value)
    Depth2A = parseFloat(document.input2A.elements[2].value)
    Volume2A = Math.ceil(Length2A * Width2A * Depth2A * 7.48)

    document.output2A.elements[1].value = Volume2A
}

function Calc2B() {
    Diameter2B = parseFloat(document.input2B.elements[0].value / 2)
    Depth2B = parseFloat(document.input2B.elements[1].value)
    Volume2B = Math.PI * Math.pow(Diameter2B, 2) * Depth2B * 7.48

    document.output2B.elements[1].value = Volume2B.toFixed(2)
}

function Calc3A() {
    Length3A = parseFloat(document.input3A.elements[0].value)
    Width3A = parseFloat(document.input3A.elements[1].value)
    Depth3A = parseFloat(document.input3A.elements[2].value)
    LinerLength3A = Math.ceil(Length3A + Depth3A + Depth3A + 1)
    LinerWidth3A = Math.ceil(Width3A + Depth3A + Depth3A + 1)

    document.output3A.elements[1].value = LinerLength3A
    document.output3A.elements[2].value = LinerWidth3A
}

function Calc3B() {
    var length = parseFloat(document.input3B.elements[0].value);
    var width = parseFloat(document.input3B.elements[1].value);
    var depth = parseFloat(document.input3B.elements[2].value);

    if (isNaN(length) || isNaN(width) || isNaN(depth)) {
        $("#lengthError").text("Please enter valid numeric values for all dimensions.");
        return;
    }

    var underlaymentLength = Math.ceil(2 * depth + length + 1);
    var rawUnderlaymentWidth = Math.ceil(2 * depth + width + 1);
    var multiplicationOfLengthAndWidth = underlaymentLength * rawUnderlaymentWidth;

    var roundedUnderlaymentWidth = [10, 12, 15].reduce(function (prev, curr) {
        return Math.abs(curr - rawUnderlaymentWidth) < Math.abs(prev - rawUnderlaymentWidth) ? curr : prev;
    });

    var finalUnderLaymentLength = Math.ceil(multiplicationOfLengthAndWidth / roundedUnderlaymentWidth);

    $("#linerlength").val(finalUnderLaymentLength);
    $("#linerwidth").val(roundedUnderlaymentWidth);

    $("#lengthError").text("");
    $("#widthError").text("");
    $("#depthError").text("");
}

function CalcD() {
    RiseD = parseFloat(document.inputD.elements[0].value)
    HoseD = parseFloat(document.inputD.elements[1].value)
    PressureD = parseFloat(document.inputD.elements[2].value)
    FittingsD = parseFloat(document.inputD.elements[3].value)
    HeadD = Math.ceil(RiseD + (HoseD / 10) + (PressureD / 2) + (FittingsD / 4))

    document.outputD.elements[1].value = HeadD
}

function CalcE() {
    WidthE = parseFloat(document.inputE.elements[0].value)
    DepthE = parseFloat(document.inputE.elements[1].value)
    FlowE = Math.ceil(((DepthE * WidthE) * (3.1 + (DepthE - 1)) * 60))

    document.outputE.elements[1].value = FlowE
}

function CalcF() {
    WattF = parseFloat(document.inputF.elements[0].value)
    kwhrF = parseFloat(document.inputF.elements[1].value)
    CostF = (((WattF * 24) / 1000) * kwhrF)
    FinalF = Math.round(CostF * 100) / 100

    document.outputF.elements[1].value = FinalF
}