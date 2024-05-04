const containNumber = `Contrar1977y to popular belief, Lor55em Ipsum is not simply random tex1995t. It has roots in a piece of clas2023sical Latin lit4erature from 1990 BC, making it over 2000 years old. Richard McCl000intock, a Latin professor at Hampden-Sydney College in Virginia, looked up on1e of the mo21re obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ips1982um comes from sections 2014 and 2015 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 1945 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 2011. The standard chunk of Lorem Ipsum used since the 1948 is reproduced below for those interested. Sections 1945 and 1946 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Where can I get some? There are m1980any variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you a2014re going to use a passage of Lorem Ipsum, you need to be sure th2002ere isn\'t anything embarrassing hidden in the midd1999le of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 1947 Latin words, com1975bined with a handful 1948of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore alwa2012ys free from repetition, injected humour, or non-characteristic words etc. paragraphs words bytes lists Start with \'Lorem ipsum dolor sit amet...\'`;

function findYear(string) {
    const regex = /\d{4}/;
    const match = string.match(regex);
    if (match) {
        const number = parseInt(match[0]);
        return number;
    }
    return null;
}
  

function getYear(string) {
    let arr = string.split(" ")
    let numbers = [];
    for (let i = 0; i < arr.length; i++) {
       let test = findYear(arr[i]);
       if(test != null){
        numbers.push(test)
       }
    }
    return numbers;
}

function listDecade(arr) {
    let year = [];
    arr.forEach(element => {
      let years = Math.floor(element / 10) * 10;
      if (!year.includes(years)) {
        year.push(years);
      }
    });
    return year;
}

function decadeMax(arr ){
    const listDecades = listDecade(arr);
    let count = 0;
    let year = null;
    listDecades.forEach( a =>{
        let tem =0;
        arr.forEach( b =>{
            if(b%a < 10){
                tem++;
            }
        })
        if(year == null || tem > count){
            count = tem;
            year = a;
        }
    })
    const century =Math.floor(year / 100) ;
    const decade = Math.floor((year % 100) );
    console.log("Thập niên "+decade+" của thế kỉ "+ century);
}
  
const years = getYear(containNumber);
console.log(years);
console.log(listDecade(years));
 const listyear =[1234,1990,1990,1990,1992,1993,1994,2020]
decadeMax(listyear)




