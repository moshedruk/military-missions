
export interface IMissions {
        apikey: string,
        name: string,
        status: string,
        priority: string,
        description: string,
        _id: string
}
export interface IMissionsList {
        listmilitarymissions: IMissions[] 
        setProsess: (value: (x:number)=>number) => void
}
export interface IMissionscard {
        mission: IMissions
        setProsess: (value:(x:number)=>number) => void
}
export interface Iform {
        
        setProsess: (value: (x:number)=>number) => void
}