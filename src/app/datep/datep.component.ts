import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, RequiredValidator, FormGroup, Validators } from '@angular/forms'
import { DateserService } from '../dateser.service';

@Component({
  selector: 'app-datep',
  templateUrl: './datep.component.html',
  styleUrls: ['./datep.component.css']
})
export class DatepComponent implements OnInit {
  myDatetime;
  constructor(private fb: FormBuilder, private ser: DateserService) { }
  myform: FormGroup;
  submitted = false;
  mytime: Date = new Date();
  disp;
  datemet() {
    this.myform = this.fb.group({ selectdate: [" ", Validators.required] })
  }
  onSubmit(ng: NgForm) {
    this.submitted = true;
    if (ng.valid) {
      this.ser.dates(ng.value).subscribe(x => {
        this.disp = x;
        console.log(this.disp)
      })
    }
  }

  ngOnInit() {
    this.datemet()
    this.myDatetime = new Date();
    this.myDatetime.getTime;
  }
}
