class NN {
    // inputs, hidden, outputs = no.of layers 
    // n = array of integers contains no of nodes each layer has
    constructor(hidden=0, n=[]) {
        if(hidden != n.length - 2){
            alert("insufficent data");
        }
        this.hidden = hidden;
        this.n = n;
        this.n_len = n.length;
        this.W = {};
        this.B = {};
        // input weights and biases
        this.W['W1'] = randomMatrix(this.n[1], this.n[0]);
        this.B['B1'] = randomMatrix(n[1], 1);
        // hidden layers nodes and biases
        for(let i = 2; i < this.hidden + 2; ++i) {
            this.W[`W${i}`] = randomMatrix(this.n[i], this.n[i - 1]);
            this.B[`B${i}`] = randomMatrix(this.n[i], 1);
        }
        // output layer nodes and biases
        this.W[`W${this.n_len}`] = randomMatrix(this.n[this.n_len - 1], this.n[this.n_len - 2]);
        this.B[`B${this.n_len}`] = randomMatrix(this.n[this.n_len - 1], this.n[1]);


    }
    predict(X) {

        if(X.length != this.n[0]){
            alert("wrong input for predection");
        }
        // Z = WX + B
        
        // input Nodes
        let WX = MatCross(this.W['W1'], X);
        let Z1 = MatAdd(WX, this.B['B1']);
        let A1 = MatTanh(Z1)
        
        // Hidden Nodes
        for(let i = 2; i < this.hidden + 1; ++i) {
            WX = MatCross(this.W[`W${i}`], A1);
            Z1 = MatAdd(WX, this.B[`B${i}`]);
            A1 =  MatTanh(Z1);
        }
        // output Nodes
        WX = MatCross(this.W[`W${this.n_len}`], A1);
        Z1 = MatAdd(WX, this.B[`B${this.n_len}`]);
        A1 =  MatTanh(Z1);

        return A1;
    }
    mutate(rate=0.1) {

        let W = {}
        let B = {}
        // input weights and biases
        W['W1'] = MatZeroes(this.n[1], this.n[0]);
        B['B1'] = MatZeroes(this.n[1], 1);
        // hidden layers nodes and biases
        for(let i = 2; i < this.hidden + 2; ++i) {
            W[`W${i}`] = MatZeroes(this.n[i], this.n[i - 1]);
            B[`B${i}`] = MatZeroes(this.n[i], 1);
        }
        // output layer nodes and biases
        W[`W${this.n_len}`] = MatZeroes(this.n[this.n_len - 1], this.n[this.n_len - 2]);
        B[`B${this.n_len}`] = MatZeroes(this.n[this.n_len - 1], this.n[1]);

        // mutate W
        for(let i in this.W) {
            let r = this.W[i].length, c = this.W[i][0].length
            for(let j = 0; j < r; ++j) {
                for(let k = 0; k < c; ++k) {
                    if(Math.random() <= rate) {
                        if(Math.random() > 0.5){
                            W[i][j][k] = Math.random();
                        }
                        else {
                            W[i][j][k] = -1 * Math.random();
                        }
                    }
                    else {
                        W[i][j][k] = W[i][j][k] + this.W[i][j][k]; 
                    }
                }
            }
        }

        // mutate B
        for(let i  in this.B) {
            let r = this.B[i].length, c = this.B[i][0].length
            for(let j = 0; j < r; ++j) {
                for(let k = 0; k < c; ++k) {
                    if(Math.random() <= rate) {
                        if(Math.random() > 0.5){
                            B[i][j][k] = Math.random();
                        }
                        else {
                            B[i][j][k] = -1 * Math.random();
                        }
                    }
                    else {
                        B[i][j][k] = B[i][j][k] + this.B[i][j][k]; 
                    }
                }
            }
        }
      
        return new Array(W, B);
    }
    clone() {
        let W = {}
        let B = {}
        // input weights and biases
        W['W1'] = MatZeroes(this.n[1], this.n[0]);
        B['B1'] = MatZeroes(this.n[1], 1);
        // hidden layers nodes and biases
        for(let i = 2; i < this.hidden + 2; ++i) {
            W[`W${i}`] = MatZeroes(this.n[i], this.n[i - 1]);
            B[`B${i}`] = MatZeroes(this.n[i], 1);
        }
        // output layer nodes and biases
        W[`W${this.n_len}`] = MatZeroes(this.n[this.n_len - 1], this.n[this.n_len - 2]);
        B[`B${this.n_len}`] = MatZeroes(this.n[this.n_len - 1], this.n[1]);

        // mutate W
        for(let i in this.W) {
            let r = this.W[i].length, c = this.W[i][0].length
            for(let j = 0; j < r; ++j) {
                for(let k = 0; k < c; ++k) {
                        W[i][j][k] = W[i][j][k] + this.W[i][j][k]; 
                }
            }
        }

        // mutate B
        for(let i  in this.B) {
            let r = this.B[i].length, c = this.B[i][0].length
            for(let j = 0; j < r; ++j) {
                for(let k = 0; k < c; ++k) {
                        B[i][j][k] = B[i][j][k] + this.B[i][j][k]; 
                }
            }
        }
      
        return new Array(W, B);
    
    }
}
