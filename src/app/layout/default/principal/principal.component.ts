import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  Gender!: FormGroup;
  radioGender: FormControl = new FormControl('');

  constructor(public students:FormService, public fb:FormBuilder) { }

  ngOnInit(): void {
    this.Gender = this.fb.group({
      gdr: this.radioGender
    })

  }

}
