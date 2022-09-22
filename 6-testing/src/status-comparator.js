/**
 * Compares todos for sorting
 */
export function statusComparator(todo1, todo2) {
    let res = []
    if(todo1.done && todo2.done || !todo1.done && !todo2.done) {
        res.push(todo1);
        res.push(todo2);
    }
    else if(!todo1.done && todo2.done){
        res.push(todo2);
        res.push(todo1);
    }
    return res;
}