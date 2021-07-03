import { Injectable } from '@angular/core';
import { FeeDetails } from './fee-details.model';
import { Fee } from './fee.model';

@Injectable({
  providedIn: 'root'
})
export class FeesService {
  formData!:Fee
  feePayment!:FeeDetails[];

  constructor() { }
}
