// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
function stockList(listOfArt, listOfCat){
  // console.log(listOfArt[0])
  // console.log(listOfCat)
  let arr = []
  for(i=0; i<=listOfArt.length-1; i++){
    // console.log(listOfArt[i])
    for(j=0; j<=listOfArt[i].length-1; j++){
      // console.log(listOfArt[i][j])
      if(listOfArt[i][j] == ' '){
        arr.push([listOfArt[i].slice(0,j), listOfArt[i].slice(j+1, listOfArt[i].length)])
      }
    }
  }
  // console.log(arr)
  let result = []
  for(i=0; i<=listOfCat.length-1; i++){
    let counter = 0
    let sum = 0
    for(j=0; j<=arr.length-1; j++){
      // console.log(listOfCat[i], arr[j][0][0])
      if(listOfCat[i] == arr[j][0][0]){
        counter++
        // console.log(i, j)
        // console.log(parseInt(arr[j][1]))
        sum += parseInt(arr[j][1])
        // result.push(listOfCat[i] + ' : ' + arr[j][1])
        // result.push(listOfCat[i] + ' : ' + sum.toString())
      }
      // console.log(`sum ${sum}`)
    }

    // result.push(listOfCat[i] + ' : ' + sum.toString())
    result.push(`(${listOfCat[i] + ' : ' + sum.toString()})`)
    // console.log(`Counter: ${counter}`)
    // console.log('========')
  }
  console.log(listOfArt)
  console.log(listOfCat)
  console.log(result.join(' -- '))
}
stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"])
console.log('========')
stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],["A", "B"])
console.log('========')
stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],["A", "B", "C", "D"])