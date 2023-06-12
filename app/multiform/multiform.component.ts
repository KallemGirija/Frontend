import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from "@angular/forms"

@Component({
  selector: 'app-multiform',
  templateUrl: './multiform.component.html',
  styleUrls: ['./multiform.component.css']
})
export class MultiformComponent implements OnInit {

  constructor(private builder: FormBuilder) { }
  isLinear=true;

  ngOnInit(): void {
  }

  Multiform = this.builder.group({
    basic: this.builder.group({
      firstname:this.builder.control('',Validators.required),
      lastname:this.builder.control('',Validators.required)

    }),
    contact: this.builder.group({
      email:this.builder.control('',Validators.required),
      phone:this.builder.control('',Validators.required),
      fax:this.builder.control('',Validators.required)

    }),
    address: this.builder.group({
      street:this.builder.control('',Validators.required),
      city:this.builder.control('',Validators.required),
      pin:this.builder.control('',Validators.required)
    })
  });

  get Basicform(){
    return this.Multiform.get("basic") as FormGroup;
  }
  get contactform(){
    return this.Multiform.get("contact") as FormGroup;
  }
  get addressform(){
    return this.Multiform.get("address") as FormGroup;
  }
  HandleSubmit(){
    if(this.Multiform.valid){
      console.log(this.Multiform.value);
    }
  }

}
