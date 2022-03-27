function MatPrint(mat) {
    let r = mat.length, c = mat[0].length;
    for(let i = 0; i < r; ++i) {
        let s = ' ';
        for(let j = 0; j < c; ++j) {
            s += `${mat[i][j]} `;
        }
        console.log(s);
    }
    console.log(`size: (${r}, ${c})`);

}
function MatZeroes(r, c) {
    let res = new Array();
    for(let i = 0; i < r; ++i) {
        let row = new Array();
        for(let j = 0; j < c; ++j) {
            row.push(0);
        }
        res.push(row);
        
    }
    return res;

}

function randomMatrix(r, c, range=1) {
    
    let res = new Array();
    for(let i = 0; i < r; ++i) {
        let row = new Array();
        for(let j = 0; j < c; ++j) {
            if(Math.random(1) <= 0.5) {
                    row.push((-1 * Math.random(range)));
            }
            else {
                row.push((Math.random(range)));
            }
        }
        res.push(row);
    }
    
    return res;

}
function MatAdd(mat1, mat2) {
    let r = mat1.length, c = mat1[0].length;
    let mat = MatZeroes(r,c);
    
    for(let i = 0; i < r; ++i) {
        for(let j = 0; j < c; ++j) {
            mat[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return mat;
}

function MatCross(mat1, mat2) {
    let r1 = mat1.length, c1 = mat1[0].length, r2 = mat2.length, c2 = mat2[0].length;
    // console.log("r1: " + r1);
    // console.log("c1: " + c1)
    // console.log("r2: " + r2)
    // console.log("c2: " + c2)

    let res = MatZeroes(r1, c2);

    if(c1 != r2){
        alert('matrix dimensions mismatch');
    }
    else {
        for (let i = 0; i < r1; ++i) {
            for (let j = 0; j < c2; ++j) {
               for (let k = 0; k < c1; ++k) {
                  res[i][j] += mat1[i][k] * mat2[k][j];
               }
            }
         }
    return res;

    }
}

function MatDot(mat1, mat2) {
    
    let r = mat1.length, c = mat1[0].length;
    let mat = MatZeroes(r,c);
    for(let i = 0; i < r; ++i) {
        for(let j = 0; j < c; ++j) {
            mat[i][j] = mat1[i][j] * mat2[i][j];
        }
    }
    return mat;

}

function MatTanh(mat){
    let r = mat.length, c = mat[0].length;
    let res = MatZeroes(r, c);
    for(let i = 0; i < r; ++i) {
        for(let j = 0; j < c; ++j) {
            res[i][j] = Math.tanh(mat[i][j]);
        }
    }
    return res
}
function MatSigmoid(mat){
    let r = mat.length, c = mat[0].length;
    let ans = MatZeroes(r, c)
    for(let i = 0; i < r; ++i) {
        for(let j = 0; j < c; ++j) {
            ans[i][j] = 1/ (1 + Math.exp(-mat[i][j]));
        }
    }
    return ans;

}

function leakyRelu(mat){
    let r = mat.length, c = mat[0].length;
    let ans = MatZeroes(r, c)
    for(let i = 0; i < r; ++i) {
        for(let j = 0; j < c; ++j) {
            if(-0.2 > mat[i][j])
                ans[i][j] = -0.2;
            else
                ans[i][j] = mat[i][j];

        }
    }
    return ans;

}
let mat1 = [
            [1, 2, 4],
            [3, 4, 1]
        ];
let mat2 = [
            [2, 3],
            [1, 4],
            [7, 5],
        ];
