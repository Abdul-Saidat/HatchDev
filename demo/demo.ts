let state: 'pending' | 'fulfilled' | 'rejected' = 'pending'

let my_name = ''

type userID = string | number

interface User {
    id: userID,
    name: string,
    age: number,
    matric_number: string,
}

const user: User = {
    name: 'Saidat',
    age: 16,
    
}
function getname (): string {
    return 'dayo'
}

console.log(getname)

function setname (name?: string): void {
    my_name = name || 'boluu'
}


