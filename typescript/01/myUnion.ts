let score: number | string= 33 
score = 44
score = "55"

type User = {
    name: string;
    id:number
}

type Admin = {
    username: string;
    id:number
}

let joe: User | Admin = {name:"joe",id:123}


joe = {username:"jm", id:1234}

function getDbId(id: number| string){
    console.log(`DB id is: ${id}`);
}

getDbId(3)
getDbId("3")

const data: number[] = [1,2,3]
const data2: (string | number)[] = [1,"2",3]