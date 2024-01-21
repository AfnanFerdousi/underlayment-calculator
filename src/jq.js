$(document).ready(function () {
    function calculate() {
        var length = parseFloat($("#pondLength").val());
        var width = parseFloat($("#pondWidth").val());
        var depth = parseFloat($("#pondDepth").val());

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

        $("#underLaymentLength").text(finalUnderLaymentLength);
        $("#underLaymentWidth").text(roundedUnderlaymentWidth);

        $("#lengthError").text("");
        $("#widthError").text("");
        $("#depthError").text("");
    }

    $("#pondLength, #pondWidth, #pondDepth").on("input", function () {
        calculate();
    });
});
