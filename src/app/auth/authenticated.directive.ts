import { Directive, ElementRef,HostBinding, Renderer2 ,OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[authenticated]'
})
//Better abroach
//As explained in that lecture, you should use the Renderer for any DOM manipulations.
//https://angular.io/api/core/Renderer2
export class AuthenticatedDirective implements OnInit {

  @HostBinding('disabled') disabled: boolean;

  constructor(private elRef: ElementRef, private renderer: Renderer2, private authService: AuthService) { }

  ngOnInit(){
     this.disabled=!this.authService.isAuthenticated();
  }

}
