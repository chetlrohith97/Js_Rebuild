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
    this.authService.GetBannerdata('1','1').subscribe((banner_obj:any)=>{
      console.log(banner_obj)
      console.log(banner_obj[0].bannerID)
      // localStorage.setItem('Banner_obj',JSON.stringify(banner_obj))
      // console.log( this.Banner_obj[0]?.cmsHomeID)
      this.model.cmsHomeID = banner_obj[0]?.cmsHomeID
      this.model.bannerID = banner_obj[0]?.bannerID
      this.model.bannerDesc = banner_obj[0]?.bannerDesc,
      this.model.bannerTitle1 = banner_obj[0]?.bannerTitle
      this.model.bannerTitle2 = banner_obj[0]?.bannerTitle
      this.model.judgeDesc = banner_obj[0]?.judgeDesc
      this.model.judgeName = banner_obj[0]?.judgeName
      this.model.judgeTitle = banner_obj[0]?.judgeTitle
    })

    this.authService.GetFeaturedata('1','2').subscribe((feature:any)=>{
      console.log(feature)
      console.log(feature[1].featureTitle)
      this.featuremodel.featureID1 =feature[0]?.featureID,
      this.featuremodel.featureID2 =feature[1]?.featureID,
      this.featuremodel.featureID3 =feature[2]?.featureID,
      this.featuremodel.featureID4 =feature[3]?.featureID,
      this.featuremodel.cmsHomeID =feature[0]?.cmsHomeID,
      this.featuremodel.featureDesc1 = feature[0]?.featureDesc,
      this.featuremodel.featureDesc2 = feature[1]?.featureDesc,
      this.featuremodel.featureDesc3 = feature[2]?.featureDesc,
      this.featuremodel.featureDesc4 = feature[3]?.featureDesc,
      this.featuremodel.featureTitle1 = feature[0]?.featureTitle,
      this.featuremodel.featureTitle2 = feature[1]?.featureTitle,
      this.featuremodel.featureTitle3 = feature[2]?.featureTitle,
      this.featuremodel.featureTitle4 = feature[3]?.featureTitle
    })

    this.authService.GetMissiondata('1','4').subscribe((mission:any)=>{
      console.log(mission)
      // console.log(mission[0].cmsHomeID)missionsID
      this.MissionModel.cmsHomeID = mission[0]?.cmsHomeID,
      this.MissionModel.missionsTitle1 = mission[0]?.missionsTitle,
      this.MissionModel.missionsTitle2 = mission[1]?.missionsTitle,
      this.MissionModel.missionsTitle3 = mission[2]?.missionsTitle,
      this.MissionModel.missionsTitle4 = mission[3]?.missionsTitle,
      this.MissionModel.missionsTitle5 = mission[4]?.missionsTitle,
      this.MissionModel.missionsTitle6 = mission[5]?.missionsTitle,
      this.MissionModel.missionsID1 = mission[0]?.missionsID,
      this.MissionModel.missionsID2 = mission[1]?.missionsID,
      this.MissionModel.missionsID3 = mission[2]?.missionsID,
      this.MissionModel.missionsID4 = mission[3]?.missionsID,
      this.MissionModel.missionsID5 = mission[4]?.missionsID,
      this.MissionModel.missionsID6 = mission[5]?.missionsID
    })

    this.authService.GetAboutdata('1','3').subscribe((about:any)=>{
      console.log(about)
      this.AboutusModel.cmsHomeID  = about[0]?.cmsHomeID,
      this.AboutusModel.aboutJISID = about[0]?.aboutJISID,
      this.AboutusModel.aboutDesc = about[0]?.aboutDesc,
      this.AboutusModel.aboutSecDesc = about[0]?.aboutSecDesc,
      this.AboutusModel.aboutTitle = about[0]?.aboutTitle,
      this.AboutusModel.aboutSecTitle = about[0]?.aboutSecTitle
    })
  }
  logout() {
    localStorage.removeItem(this.userData);
    this.authService.logout();
    this.router.navigate(['/login']);
    this.toastr.success('Your Are Logged out');
  }
  StoreProfile(){
    console.log("hit")
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
    localStorage.setItem('Banner_Obj',JSON.stringify(BannerObj))
    // this.authService.PutBannerdata(BannderObj).subscribe((bannerData:any)=>{
    //   console.log(bannerData)
    // })
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
    localStorage.setItem('Feature_Obj',JSON.stringify(FeatureObj))
    
    // this.authService.PutFeaturedata(FeatureObj).subscribe((featuredata:any)=>{
    //   console.log(featuredata)
    // })
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
    localStorage.setItem('Aboutus_Obj',JSON.stringify(AboutusObj))

    // this.authService.PutAboutdata(AboutusObj).subscribe((data)=>{
    //   console.log(data)
    //   // alert("success")
    // })

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
    // this.authService.PutMissiondata(MissionObj).subscribe((mission:any)=>{
    //   console.log(mission)
    // })
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
