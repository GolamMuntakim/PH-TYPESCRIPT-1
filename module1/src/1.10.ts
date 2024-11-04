{
    // union type --> or
    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

    type Developer = FrontendDeveloper | FullStackDeveloper

    const newDeveloper : FrontendDeveloper = 'juniorDeveloper'
    
    type User ={
        name : string,
        email : string,
        gender : 'male' | 'female',
        bloodGroup : 'O+' | 'A+' | 'B+'
    }
    const user1: User={
        name : "siam",
        gender : 'male',
        bloodGroup : 'O+' 
    }


    // intersection developer --> both
    type WebDeveloper = {
        skills : string[];
        designation1:'Frontend Developer'
    }
    type BackendDeveloper = {
        skills : string[];
        designation2:'Backend Developer'
    }
    type MernStackDeveloper = WebDeveloper & BackendDeveloper
    const WebDeveloper:MernStackDeveloper = {
        skills:['HTML','CSS','EXPRESS'],
        designation1:'Frontend Developer',
        designation2:'Backend Developer'
    }





}