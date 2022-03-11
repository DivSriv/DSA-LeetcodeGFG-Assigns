/*
1.  *****
    *****
    *****
    *****
    *****
*/
let pattern1 = function(){
    let n=5;
    for(let row = 1; row <= n; row++){
    let count = ""
    for(let col = 1; col<=n; col++){
        count=count+"* "
        }
    console.log(count)
    }
};

/*
2.  *
    **
    ***
    ****
    *****
*/ 
let pattern2 = function(){
    let n=5;
    for(let row = 1; row <= n; row++){
      let count = ""
      for(let col = 1; col<=row; col++){
        count=count+"* "
      }
      console.log(count)
    }
};

/*
3.  *****
    ****
    ***
    **
    *
*/
let pattern3 = function(){
    let n=5;
    for(let row = 1; row <= n; row++){
      let count = ""
      for(let col = n-row+1; col>0; col--){
        count=count+"* "
      }
      console.log(count)
    }
};

/*
4.  1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/
let pattern4 = function(){
    let n=5;
    for(let row = 1; row <= n; row++){
      let count = ""
      for(let col = 1; col<=row; col++){
        count=count+`${col} `
      }
      console.log(count)
    }
};

/*
5.  *
    **
    ***
    ****
    *****
    ****
    ***
    **
    *
*/
let pattern5a = function(){
    let n=9;
    for(let row = 1; row <= Math.floor(n/2); row++){
        let count = ""
        for(let col = 1; col<=row; col++){
          count=count+`* `
        }
        console.log(count)
    }
      for(let row = 5; row <= n; row++){
          let count = ""
          for(let col = n-row+1; col>0; col--){
            count=count+"* "
          }
          console.log(count)
    }
};
//OR
let pattern5b = function(){
    let n=5;
    for(let row = 1; row < n*2; row++){
        let totalColInRow = row > n ? 2*n - row : row;
        let count = ""
        for(let col = 1; col<=totalColInRow; col++){
          count=count+`* `
        }
        console.log(count)
    }
};

/*
6.       *
        **
       ***
      ****
     *****
*/
let pattern6 = function(){
    let n=5;
    for(let row = 1; row <= n; row++){
        let noOfSpaces = n - row;
        let space =" "
        for(let i = 0 ;i<noOfSpaces;i++){
            space=space+" "
        }
        let count = ""
        for(let col = 1; col<=row; col++){
          count=count+`*` // add * without space
        }
        console.log(space + count)
    }
};
