import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserManagerService} from "../shared/user-manager.service";

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private userMngService: UserManagerService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userMngService.getUser(+route.paramMap.get('id'))){
      return true;
    }else{
      alert('Utente non presente in memoria, fai un fetch dei dati');
      return this.router.createUrlTree(['/']);
    }
  }
}
