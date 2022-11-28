function grades(marks){
    if(marks > 79)
    console.log('A');
    else if(marks <79 && marks >= 60)
    console.log('B');
    else if(marks <59 && marks >= 49)
    console.log('C');
    else if(marks <49 && marks >= 40)
    console.log('D');
    else
    console.log('E');
}

function speed(limit){
    if(limit <= 70)
    console.log('Ok.');
    else if(limit >70 && limit <=75)
    console.log('Points:1')
    else if(limit >75 && limit <=80)
    console.log('Points:2');
    else if (limit > 80 && limit <= 85)
    console.log('Points:3');
    else if (limit >85 && limit <= 90)
    console.log('Points:4');
    else if(limit > 90 && limit <= 95)
    console.log('Points:5');
    else if(limit >95 && limit <=100)
    console.log('Points:6');
    else if(limit >100 && limit <= 105)
    console.log('Points:7');
    else if(limit >105 && limit <= 110)
    console.log('Points:8');
    else if(limit >110 && limit <= 115)
    console.log('Points:9');
    else if(limit >115 && limit <=120)
    console.log('Points:10');
    else if(limit >120 && limit <=125)
    console.log('Points:11');
    else if(limit >125 && limit <= 130)
    console.log('Points:12');
    else
    console.log('License suspended.');

}
speed(105);
