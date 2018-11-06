import { Component, OnInit, Output, EventEmitter } from '@angular/core';

declare var M; 
@Component({
  selector: 'app-floating-action-btn',
  templateUrl: './floating-action-btn.component.html',
  styleUrls: ['./floating-action-btn.component.scss'],
})
export class FloatingActionBtnComponent implements OnInit {

  @Output() action = new EventEmitter(); 

  constructor() { }
  public roles: object; 
  ngOnInit() {
 
  }



  open(){
    let options = document.getElementById('options');
    options.classList.remove('close'); 
    options.classList.add('open');
  }

  close(){
    setTimeout(()=>{
      let options = document.getElementById('options');
      options.classList.remove('open');
      options.classList.add('close');      
    }, 500); 
    
  }
}
