
//если все условия соблюдены, то возвращает undefined,продолжаем работу дальше
//если validate не проходит тогда выбиваем ошибку!!!!

export const required = (value: any) => {
    if (value) return undefined
    return "sdfgh"
}
export const maxLengthCreator = (maxlength: number) => (value: any) => {
    if (value.length > maxlength) return 'too many symbols'
    return undefined
}
export const minLengthCreator =(minLength:number) => (value:string)=>{
    if( value && value.length>minLength) return 'not enough symbols'
    return undefined
}
