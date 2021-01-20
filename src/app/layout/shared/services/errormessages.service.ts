import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrormessagesService {

public errorMessage ={
  "firstName":{
    'required' : 'This field is required',
  },
  "middleName":{ 'required' : 'This field is required'},
  "lastName":{ 'required' : 'This field is required'},
  "phone":{ 'required' : 'This field is required'},
  "email":{ 'required' : 'This field is required'},
  "password":{ 'required' : 'This field is required'},
  "confirmpassword":{ 'required' : 'This field is required'},
  "iamnot":{ 'required' : 'This field is required'},
  "remember_me":{ 'required' : 'This field is required'}
};
// formErrors = {
//   "firstname":'',"middleName":'',"lastName":'',"phone":'',"email":'',"password":'',
//   "confirmpassword":'',"iamnot":'',"remember_me":""
// }
}
