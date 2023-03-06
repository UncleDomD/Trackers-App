import { Component, OnInit } from '@angular/core';
import { Gun } from 'src/app/common/gun';
import { GunCategory } from 'src/app/common/gun-category';
import { GunService } from 'src/app/services/gun.service';

@Component({
  selector: 'app-gun-table',
  templateUrl: './gun-table.component.html',
  styleUrls: ['./gun-table.component.css']
})
export class GunTableComponent implements OnInit {

  constructor(private gunService: GunService) { }

  active = 0;
  
  guns: Gun[] = [];
  assaultRifles: Gun[] = [];
  submachineGuns: Gun[] = [];
  taticalRifles: Gun[] = [];
  lightmachineGuns: Gun[] = [];
  sniperRifles: Gun[] = [];
  pistols: Gun[] = [];
  shotguns: Gun[] = [];
  launchers: Gun[] = [];
  meleeSpecial: Gun[] = [];
  gunCategories!: GunCategory[];

  gun: Gun = new Gun;
  gunCategory: GunCategory = new GunCategory;
  updateGunToggle = false;
  updateGunCategoryToggle = false;
  currentGunId: any;
  currentGunCategoryId: any;

  ngOnInit(): void {
    //this.listGuns();
    this.listGunsByCategory();
    this.listGunCategories();
  }

  listGuns() {
    this.gunService.getGuns().subscribe(
      data => {
        this.guns = data;
      }
    )
  }

  listGunsByCategory() {
    this.gunService.getAssaultRifles().subscribe(
      data => {
        this.assaultRifles = data;
        console.log(this.assaultRifles);
      }
    );

    this.gunService.getSubmachineGuns().subscribe(
      data => {
        this.submachineGuns = data
      }
    );

    this.gunService.getTaticalRifles().subscribe(
      data => {
        this.taticalRifles = data
      }
    );

    this.gunService.getLightmachineGuns().subscribe(
      data => {
        this.lightmachineGuns = data
      }
    );

    this.gunService.getSniperRifles().subscribe(
      data => {
        this.sniperRifles = data
      }
    );

    this.gunService.getPistols().subscribe(
      data => {
        this.pistols = data
      }
    );

    this.gunService.getShotguns().subscribe(
      data => {
        this.shotguns = data
      }
    );

    this.gunService.getLaunchers().subscribe(
      data => {
        this.launchers = data
      }
    );

    this.gunService.getMeleeSpecial().subscribe(
      data => {
        this.meleeSpecial = data
      }
    );
    
  }

  listGunCategories() {
    this.gunService.getGunCategories().subscribe(
      data => {
        this.gunCategories = data;
        console.log(this.gunCategories);
      }
    );
  }

  updateGunToggler(gId: number) {
    console.log(gId);
    switch(this.updateGunToggle) {
      case false:
        this.updateGunToggle = true;
        this.gunService.getGunById(gId).subscribe((gun: any) => {
          this.gun = gun;
        })
        this.currentGunId = gId;
        break;
      default:
        this.updateGunToggle = false;
    }
  }

  updateGun(gId: number) {
    console.log(gId);
    this.gunService.updateGunById(gId, this.gun).subscribe({
      next: (gun) => {
        this.gun = gun;
        this.reloadPage();
      }
    })
  }

  updateGunCategoryToggler(gcId: number) {
    console.log(gcId);
    switch(this.updateGunCategoryToggle) {
      case false:
        this.updateGunCategoryToggle = true;
        this.gunService.getGunCategoryById(gcId).subscribe((gunCategory: any) => {
          this.gunCategory = gunCategory;
        })
        this.currentGunCategoryId = gcId;
        break;
      default:
        this.updateGunCategoryToggle = false;
    }
  }

  updateGunCategory(gcId: number) {
    this.gunService.updateGunCategoryById(gcId, this.gunCategory).subscribe({
      next: (gunCategory) => {
        this.gunCategory = gunCategory;
        this.reloadPage();
      }
    })
  }

  reloadPage(): void {
    window.location.reload();
  }

}
