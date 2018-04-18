import { Component, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder,FormArray  } from '@angular/forms';
import { Profile, WorkExperiance } from '../../Profile';
import { Http } from '@angular/http';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  profileForm: FormGroup;
  genderList: String[];
  private profile: Profile;
  private workExperiances: FormArray;


  constructor(private formBuilder: FormBuilder, private http: Http, @Inject('BASE_URL') private baseUrl: string) {

   
  }

  ngOnInit() {

    this.genderList = ['Male', 'Female'];
   

    this.profileForm = this.formBuilder.group({
      email: ['', [Validators.required
        //, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      workExperiances: this.formBuilder.array([this.createWorkExp()])
    })


  }

  createWorkExp(): FormGroup {
    return this.formBuilder.group({
      title: '',
      company: '',
      expYears: '',
      roles : ''
    });
  }

  addWorkExp(): void {
    this.workExperiances = this.profileForm.get('workExperiances') as FormArray;
    this.workExperiances.push(this.createWorkExp());
  }


  get email() { return this.profileForm.get('email'); }

  //get firstName() { return this.profileForm.get('firstName'); }

  get gender() { return this.profileForm.get('gender'); }

  //get phone() { return this.profileForm.get('phone'); }



  public onFormSubmit() {
    if (this.profileForm.valid) {
      this.profile = this.profileForm.value;
      console.log(this.profile);
      this.http.post(this.baseUrl + 'api/SampleData', this.profile).subscribe(result => {
        //Rest form after posting 

      }, error => console.error(error));

      /* Any API call logic via services goes here */
    }
  }

}


