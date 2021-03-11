import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/index';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import {BannerModel} from '@models/index'
import {FeatureModel} from '@models/index'
import {AboutusModel} from '@models/index'
import {MissionModel} from '@models/index'


@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})


export class HomeAdminComponent implements OnInit {
  Banner_obj = JSON.parse(localStorage.getItem('Banner_obj') || '[]');
  userData = JSON.parse(localStorage.getItem('user_data') || '[]');
  user_ID?: string;

  model : BannerModel={
    bannerTitle:'',
    bannerTitle1:'',
    bannerID:'',
    cmsHomeID:'',
    bannerTitle2:'',
    bannerDesc:'',
    judgeTitle:'',
    judgeName :'',
    judgeDesc :'',
    judgeImagePath :'',
    bannerImagePath :'',
    Judge_Image_Path:'',
  }
   
  featuremodel :FeatureModel={
    featureTitle :'',
    featureDesc :'',
    featureIconPath :'',
    featureTitle1:'',
    featureTitle2:'',
    featureTitle3:'',
    featureTitle4:'',
    featureDesc1:'',
    featureDesc2:'',
    featureDesc3:'',
    featureDesc4:'',
    featureOnbj1:{featureTitle1:'',featureDesc1:''},
    featureOnbj2:{featureTitle2:'',featureDesc2:''},
    featureOnbj3:{featureTitle3:'',featureDesc3:''},
    featureOnbj4:{featureTitle4:'',featureDesc4:''},
    featureID1:'',
    featureID2:'',
    featureID3:'',
    featureID4:'',
    cmsHomeID:''
  }

  AboutusModel : AboutusModel ={
    aboutJISID:'',
    cmsHomeID: '',
    aboutTitle : '',
    aboutDesc :'',
    aboutSecTitle  :'',
    aboutSecDesc  :'',
    
  }
  MissionModel: MissionModel={
    // missionsTitle :'',
    missionsID:'',
    missionsTitle1 : '',
    missionsTitle2 : '',
    missionsTitle3 : '',
    missionsTitle4 : '',
    missionsTitle5 : '',
    missionsTitle6 : '',
    missionsDesc : '',
    cmsHomeID:'',
    missionsID1:'',
    missionsID2:'',
    missionsID3:'',
    missionsID4:'',
    missionsID5:'',
    missionsID6 :'',  // missionsObj1:{missionsDesc1:''},
    // missionsObj2:{missionsDesc2:''},
    // missionsObj3:{missionsDesc3:''},
    // missionsObj4:{missionsDesc4:''},
    // missionsObj5:{missionsDesc5:''},
    // missionsObj6:{missionsDesc6:''},
    missionsIconsPath :''
  }
  constructor(private authService: AuthService, 
    private toastr:ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.user_ID = this.userData[0]?.user_ID;
    let LocalData = JSON.parse(localStorage.getItem("Banner_Obj")|| '[]') //binding localstorage value to html page
      console.log(LocalData[0])
      console.log(LocalData[0]?.bannerTitle)
  
      this.model.cmsHomeID = LocalData[0]?.cmsHomeID
      this.model.bannerID = LocalData[0]?.bannerID
      this.model.bannerDesc = LocalData[0]?.bannerDesc,
      this.model.bannerTitle1 = LocalData[0]?.bannerTitle
      this.model.bannerTitle2 = LocalData[0]?.bannerTitle
      this.model.judgeDesc = LocalData[0]?.judgeDesc
      this.model.judgeName = LocalData[0]?.judgeName
      this.model.judgeTitle = LocalData[0]?.judgeTitle

    let featureData = JSON.parse(localStorage.getItem("Feature_Obj")|| '[]') //binding localstorage value to html page
    console.log(featureData[0])
    console.log(featureData[0]?.featureTitle)
      this.featuremodel.featureID1 =featureData[0]?.featureID,
      this.featuremodel.featureID2 =featureData[1]?.featureID,
      this.featuremodel.featureID3 =featureData[2]?.featureID,
      this.featuremodel.featureID4 =featureData[3]?.featureID,
      this.featuremodel.cmsHomeID =featureData[0]?.cmsHomeID,
      this.featuremodel.featureDesc1 = featureData[0]?.featureDesc,
      this.featuremodel.featureDesc2 = featureData[1]?.featureDesc,
      this.featuremodel.featureDesc3 = featureData[2]?.featureDesc,
      this.featuremodel.featureDesc4 = featureData[3]?.featureDesc,
      this.featuremodel.featureTitle1 = featureData[0]?.featureTitle,
      this.featuremodel.featureTitle2 = featureData[1]?.featureTitle,
      this.featuremodel.featureTitle3 = featureData[2]?.featureTitle,
      this.featuremodel.featureTitle4 = featureData[3]?.featureTitle

    let missionData = JSON.parse(localStorage.getItem("Mission_Obj")|| '[]') //binding localstorage value to html page
    console.log(missionData[0])
    console.log(missionData[0]?.missionsTitle)
      this.MissionModel.cmsHomeID = missionData[0]?.cmsHomeID,
      this.MissionModel.missionsTitle1 = missionData[0]?.missionsTitle,
      this.MissionModel.missionsTitle2 = missionData[1]?.missionsTitle,
      this.MissionModel.missionsTitle3 = missionData[2]?.missionsTitle,
      this.MissionModel.missionsTitle4 = missionData[3]?.missionsTitle,
      this.MissionModel.missionsTitle5 = missionData[4]?.missionsTitle,
      this.MissionModel.missionsTitle6 = missionData[5]?.missionsTitle,
      this.MissionModel.missionsID1 = missionData[0]?.missionsID,
      this.MissionModel.missionsID2 = missionData[1]?.missionsID,
      this.MissionModel.missionsID3 = missionData[2]?.missionsID,
      this.MissionModel.missionsID4 = missionData[3]?.missionsID,
      this.MissionModel.missionsID5 = missionData[4]?.missionsID,
      this.MissionModel.missionsID6 = missionData[5]?.missionsID

    
    let aboutUsData = JSON.parse(localStorage.getItem("Aboutus_Obj")|| '[]') //binding localstorage value to html page
    console.log(aboutUsData[0])
    console.log(aboutUsData[0]?.aboutSecTitle)
      this.AboutusModel.cmsHomeID  = aboutUsData[0]?.cmsHomeID,
      this.AboutusModel.aboutJISID = aboutUsData[0]?.aboutJISID,
      this.AboutusModel.aboutDesc = aboutUsData[0]?.aboutDesc,
      this.AboutusModel.aboutSecDesc = aboutUsData[0]?.aboutSecDesc,
      this.AboutusModel.aboutTitle = aboutUsData[0]?.aboutTitle,
      this.AboutusModel.aboutSecTitle = aboutUsData[0]?.aboutSecTitle
  }

  logout() {
    localStorage.removeItem(this.userData);
    this.authService.logout();
    this.router.navigate(['/login']);
    this.toastr.success('Your Are Logged out');
  }
  StoreProfile(){
    console.log("hit")
    const BannerObj =[
      {
      // bannerTitle:this.model.bannerTitle1 + ' '+ this.model.bannerTitle2,
      bannerTitle:this.model.bannerTitle1,
      bannerDesc : this.model.bannerDesc,
      cmsHomeID :  this.model.cmsHomeID,
      judgeTitle :this.model.judgeTitle,
      judgeName : this.model.judgeName,
      judgeDesc : this.model.judgeDesc,
      bannerID : this.model.bannerID
       } ]
    console.log(BannerObj)
    localStorage.setItem('Banner_Obj',JSON.stringify(BannerObj))

    const FeatureObj =[
  
        {
          cmsHomeID: this.featuremodel.cmsHomeID,
          featureID : this.featuremodel.featureID1,
          featureTitle: this.featuremodel.featureTitle1,
          featureDesc: this.featuremodel.featureDesc1,
        },
        {
          cmsHomeID: this.featuremodel.cmsHomeID,
          featureID : this.featuremodel.featureID2,
          featureTitle: this.featuremodel.featureTitle2,
          featureDesc: this.featuremodel.featureDesc2,
        },
        {
          cmsHomeID: this.featuremodel.cmsHomeID,
          featureID : this.featuremodel.featureID3,
          featureTitle: this.featuremodel.featureTitle3,
          featureDesc: this.featuremodel.featureDesc3,
        },
       {
          cmsHomeID: this.featuremodel.cmsHomeID,
          featureID : this.featuremodel.featureID4,
          featureTitle: this.featuremodel.featureTitle4,
          featureDesc: this.featuremodel.featureDesc4,
        }
    ]
    console.log(FeatureObj)
    localStorage.setItem('Feature_Obj',JSON.stringify(FeatureObj))

    const AboutusObj =[{
      cmsHomeID: this.AboutusModel.cmsHomeID,
      aboutJISID :  this.AboutusModel.aboutJISID,
      aboutTitle :this.AboutusModel.aboutTitle,
      aboutDesc : this.AboutusModel.aboutDesc,
      aboutSecTitle:this.AboutusModel.aboutSecTitle,
      aboutSecDesc :this.AboutusModel.aboutSecDesc
    }]
    console.log(AboutusObj)
    localStorage.setItem('Aboutus_Obj',JSON.stringify(AboutusObj))


    const MissionObj = [
     
      {
          cmsHomeID:this.MissionModel.cmsHomeID,
          missionsID:this.MissionModel.missionsID1,
          missionsTitle: this.MissionModel.missionsTitle1
      },
    {
          cmsHomeID:this.MissionModel.cmsHomeID,
          missionsID:this.MissionModel.missionsID2,
          missionsTitle: this.MissionModel.missionsTitle2,
      },
      {
        cmsHomeID:this.MissionModel.cmsHomeID,
        missionsID:this.MissionModel.missionsID3,
        missionsTitle: this.MissionModel.missionsTitle3
      },
     {
        cmsHomeID:this.MissionModel.cmsHomeID,
        missionsID:this.MissionModel.missionsID4,
        missionsTitle: this.MissionModel.missionsTitle4
      },
     {
        cmsHomeID:this.MissionModel.cmsHomeID,
        missionsID:this.MissionModel.missionsID5,
        missionsTitle: this.MissionModel.missionsTitle5
      },
      {
        cmsHomeID:this.MissionModel.cmsHomeID,
        missionsID:this.MissionModel.missionsID6,
        missionsTitle: this.MissionModel.missionsTitle6
      }
      ]
    console.log(MissionObj)
    localStorage.setItem('Mission_Obj',JSON.stringify(MissionObj))

    this.toastr.warning('Save is for preview, please click on "Publish" to save the changes permanently','Note:-',{
      timeOut:5000
    })
  }
  updateProfile(){
    const BannerObj ={
      bannerTitle:this.model.bannerTitle1 + ' '+ this.model.bannerTitle2,
      bannerDesc : this.model.bannerDesc,
      cmsHomeID :  this.model.cmsHomeID,
      judgeTitle :this.model.judgeTitle,
      judgeName : this.model.judgeName,
      judgeDesc : this.model.judgeDesc,
      bannerID : this.model.bannerID
    }
    console.log(BannerObj)
   
// debugger
    const FeatureObj =[
      // featureTitle: this.Featuremodel.featureTitle,
      // featureDesc: this.Featuremodel.featureDesc,
      // featureOnbj:{
        {
          cmsHomeID: this.featuremodel.cmsHomeID,
          featureID : this.featuremodel.featureID1,
          featureTitle: this.featuremodel.featureTitle1,
          featureDesc: this.featuremodel.featureDesc1,
        },
        {
          cmsHomeID: this.featuremodel.cmsHomeID,
          featureID : this.featuremodel.featureID2,
          featureTitle: this.featuremodel.featureTitle2,
          featureDesc: this.featuremodel.featureDesc2,
        },
        {
          cmsHomeID: this.featuremodel.cmsHomeID,
          featureID : this.featuremodel.featureID3,
          featureTitle: this.featuremodel.featureTitle3,
          featureDesc: this.featuremodel.featureDesc3,
        },
       {
          cmsHomeID: this.featuremodel.cmsHomeID,
          featureID : this.featuremodel.featureID4,
          featureTitle: this.featuremodel.featureTitle4,
          featureDesc: this.featuremodel.featureDesc4,
        }
      // }
    ]
    console.log(FeatureObj)
  
    // console.log(FeatureObj.featureOnbj.featureOnbj1.featureTitle)


    const AboutusObj ={
      cmsHomeID: this.AboutusModel.cmsHomeID,
      aboutJISID :  this.AboutusModel.aboutJISID,
      aboutTitle :this.AboutusModel.aboutTitle,
      aboutDesc : this.AboutusModel.aboutDesc,
      aboutSecTitle:this.AboutusModel.aboutSecTitle,
      aboutSecDesc :this.AboutusModel.aboutSecDesc
    }
    console.log(AboutusObj)

   

    const MissionObj = [
     
      {
          cmsHomeID:this.MissionModel.cmsHomeID,
          missionsID:this.MissionModel.missionsID1,
          missionsTitle: this.MissionModel.missionsTitle1
      },
    {
          cmsHomeID:this.MissionModel.cmsHomeID,
          missionsID:this.MissionModel.missionsID2,
          missionsTitle: this.MissionModel.missionsTitle2,
      },
      {
        cmsHomeID:this.MissionModel.cmsHomeID,
        missionsID:this.MissionModel.missionsID3,
        missionsTitle: this.MissionModel.missionsTitle3
      },
     {
        cmsHomeID:this.MissionModel.cmsHomeID,
        missionsID:this.MissionModel.missionsID4,
        missionsTitle: this.MissionModel.missionsTitle4
      },
     {
        cmsHomeID:this.MissionModel.cmsHomeID,
        missionsID:this.MissionModel.missionsID5,
        missionsTitle: this.MissionModel.missionsTitle5
      },
      {
        cmsHomeID:this.MissionModel.cmsHomeID,
        missionsID:this.MissionModel.missionsID6,
        missionsTitle: this.MissionModel.missionsTitle6
      }
      ]
    console.log(MissionObj)
   
    if (confirm('Are you sure you want to save this thing into the database?')) {
      this.authService.PutBannerdata(BannerObj).subscribe((bannerData:any)=>{
        console.log(bannerData)
      })
  
    this.authService.PutFeaturedata(FeatureObj).subscribe((featuredata:any)=>{
        console.log(featuredata)
      })
  
   this.authService.PutAboutdata(AboutusObj).subscribe((data)=>{
        console.log(data)
        // alert("success")
      })
  
   this.authService.PutMissiondata(MissionObj).subscribe((mission:any)=>{
        console.log(mission)
      })
      this.toastr.success('Thing was saved to the database.','',{
        timeOut:3000
      });

    } else {
      // Do nothing!
      this.toastr.warning('Thing was not saved to the database.','',{
        timeOut:3000
      });
    }
  }
}
