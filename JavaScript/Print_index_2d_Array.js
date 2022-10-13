let arr2d = [ //two d array
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < arr2d.length; i++)
{
    for (let j = 0; j < arr2d[0].length; j++){
        console.log("(", i, ",", j, ")");
    }
}
