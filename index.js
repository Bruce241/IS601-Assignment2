function countVowelsAndConsonants() {
    var inputString = document.getElementById("input1").value.toLowerCase();
    var vowelCount = 0;
    var consonantCount = 0;

    for (char of inputString) {
        if ('aeiou'.includes(char)) {
            vowelCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }
    document.getElementById("output1").innerText = `Vowels: ${vowelCount} | Consonants: ${consonantCount}`;
}

function checkPalindrome() {
    var inputNum = parseInt(document.getElementById("input2").value);
    var num = inputNum;
    var reverseNum = 0;
    var remainder;

    while (num > 0) {
        remainder = num % 10;
        reverseNum = (reverseNum * 10) + remainder;
        num = Math.floor(num / 10);
    }

    if (inputNum === reverseNum) {
        document.getElementById("output2").innerText = "Palindrome";
    } else {
        document.getElementById("output2").innerText = "Not a palindrome";
    }
}

function calculateTip() {
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    var tipAmount = subtotal * (tipPercentage / 100);
    var totalAmount = subtotal + tipAmount;

    document.getElementById("output3").innerText = `Tip: $${tipAmount.toFixed(2)} | Total: $${totalAmount.toFixed(2)}`;
}