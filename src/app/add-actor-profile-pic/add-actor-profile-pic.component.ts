import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActorService } from '../service/actor.service';

@Component({
  selector: 'app-add-actor-profile-pic',
  templateUrl: './add-actor-profile-pic.component.html',
  styleUrls: ['./add-actor-profile-pic.component.css']
})
export class AddActorProfilePicComponent implements OnInit {
  addActor?: FormGroup;
  fileName = '';
  imagePath: any;
  base64Output: string;
  constructor(private formBuilder: FormBuilder,
    private actorService: ActorService,
    private router: Router,
    private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.addActor = this.formBuilder.group({
      profilePic: [],
      actor_id: [0],
      firstName: [],
      lastName: [],
      gender: [],
      age: []
    });
  }
  saveActor() {
    console.log("Saving new actor");
    console.log(this.addActor.value);
    this.actorService.createActor(this.addActor.value)
      .subscribe((data) => {
        console.log('Actor data saved ', data)
        this.navhome();
      })
  }
  navhome() {
    this.router.navigate(['/actors']);
  }
  
  onFileSelected(event) {
    // this.imagePath = this._sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,'
    // + toReturnImage.base64string)
    const file: File = event.target.files[0];
    // const multipart = require('parse-multipart-data');
    // const body = "..the multipart raw body..";
    // const boundary = "----WebKitFormBoundaryDtbT5UpPj83kllfw";
    // const parts = multipart.parse(body, boundary);
    // for (let i = 0; i < parts.length; i++) {
    //   const part = parts[i];
    //   // will be: { filename: 'A.txt', type: 'text/plain', data: <Buffer 41 41 41 41 42 42 42 42> }
    // }
    // encode image to base64 string
    // file.arrayBuffer().then(buffer => {
    //   const arr = new Uint8Array(buffer);
    //   const toReturnImage = {
    //     base64string: btoa(String.fromCharCode.apply(null, arr))
    //   };
    // });
      // if (toReturnImage) {
      //   this.fileName = file.name;
      //   const formData = new FormData();
      //   formData.append("thumbnail", file);
      //   // const upload$ = this.http.post("/api/thumbnail-upload", formData);
      //   const upload$ = this.actorService.uploadActorProfilePic(toReturnImage);
      //   upload$.subscribe();

      //   console.log(upload$);
      // }
      if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("thumbnail", file);
        // const upload$ = this.http.post("/api/thumbnail-upload", formData);
        const upload$ = this.actorService.uploadActorProfilePic(file);
        upload$.subscribe();

        console.log(upload$);
      }

    }
}
