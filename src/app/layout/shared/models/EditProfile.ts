export interface BasicProfileModel {
    title:string,
    UserType:string,
    firstName:string,
    lastName:string,
    middleName:string,
    phone:string,
    email:string,
    organisationname:string,
}

export interface AddressInfoModel {
    State:string,
    LGA:string,
    City:string,
    address1:string,
    address2:string,
    sec_State:string,
    sec_LGA:string,
    sec_City:string,
}

export interface PersonalInfoModel {
    date_Of_Birth:string,
    Securityquestion:string,
    Securityanswer:string,
    gender:string,
    MaritalStatus:string,
    BVN:string,
    PayerID:string,
    national_ID:string,
}