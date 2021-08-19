//cau1
function adjacentnumber(input) {
    let arr = [];


    for (i = 0; i < input.length - 1; i++) {
        let product  = input[i] * input[i + 1];
        arr.push(product);
    }
    
    let max = Math.max(...arr);
    
    console.log(max);
}

adjacentnumber([2, 3, -5, -2, 4]);

//cau2
function totalweight(e) {
    let team1 = [];
    let team2 = [];
    let sum = [];

    for (i = 0; i < e.length; i++) {
        if (i % 2 == 0) {
            team1.push(e[i]);
        } else { team2.push(e[i]) };
    }

    let sum1 = 0;
    let sum2 = 0;

    for (let i in team1) { sum1 += team1[i];};
    for (let i in team2) { sum2 += team2[i];};

    sum.push(sum1);
    sum.push(sum2);

    console.log(sum);
}

totalweight([60, 40, 55, 75, 64]);
