
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
        setProsess: (value: string) => void
}
export interface IMissionscard {
        mission: IMissions
        setProsess: (value: string) => void
}
export interface Iform {
        
        setProsess: (value: string) => void
}