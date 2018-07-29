import { Injectable } from '@angular/core';

@Injectable()
export class DetailService {
  public content: any;    
  constructor() {
      console.log('DetailService initted');
  }
}