
export const changeGraphData = (oldData:{name:string,uv:number}[]) => {
    let newData = oldData.map((obj) => {
        return {
            ...obj,
            uv:randomInteger(2000,5000)
        }
    })
    return newData
}

function randomInteger(min:number, max:number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }