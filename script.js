function bin2dec(binNumber)
{
    let decNumber = 0;
    //if (binNumber == "") { return null; }
    if (binNumber.search(/[^01]/g) !== -1) { return undefined; }

    for (let i = 0 ; i <= binNumber.length; i++)
    {
        if (binNumber.charAt((binNumber.length - 1) - i) === "1")
        {
            decNumber += Math.pow(2, i);
        }
    }
    return decNumber;
}


let binInput = document.querySelector('input.binary');
let decOutput = document.querySelector('div.decimal');

function convert()
{
    let dec = bin2dec(binInput.value);

    if(dec == undefined)
    {
        decOutput.innerHTML = "invalid value";
    }
    else
    {
        decOutput.innerHTML = dec;
    }
}
