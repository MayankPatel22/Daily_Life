function calculate(){
    const TA = document.getElementById("Total-Amount");
    const PA = document.getElementById("1");
    const IR = document.getElementById("2");
    const yrs = document.getElementById("3");

    let P = Number(PA.value);
    let R = Number(IR.value/100);
    let Y = Number(yrs.value);

    if(P<0 || isNaN(P)){
        P=0;
        PA.value=0
    }
    if(R<0 || isNaN(R)){
        IR.value=0;
    }
    if(Y<0 || isNaN(Y)){
        yrs.value=0;
    }

    const result = P*Math.pow((1+R/1), 1*Y);

    TA.textContent = result.toLocaleString(undefined,{style:"currency",currency:"USD"});
}