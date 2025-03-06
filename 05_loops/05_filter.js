const num = [1,2,3,4,5,6,7,8,9,10]

const n1 = num.filter ((n) => n > 4 ) // all the value which meet passes the evaluation are returns new array
// console.log(n1);

const n2 = num.filter((n) => {
    // num > 4
    return num > 4 
})
// console.log(n2); 

// this is now filter will look like as a forEach


const n3 = []
num.forEach((n) => {
    if (n > 4) {
        n3.push(n)  
    }
})
// console.log(n3);

// console.log(num , 'ORIGINAl');


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const hist = books.filter((bk) => bk.genre === 'History')
// console.log(hist);
const Ubk = books.filter((bk) => {
    return bk.edition >= 2000 && bk.genre === 'Non-Fiction' && bk.publish >= 1950
})
// console.log(Ubk);
