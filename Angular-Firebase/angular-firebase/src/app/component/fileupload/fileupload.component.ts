import { Component } from '@angular/core';
import { FileService } from '../../shared/file.service';
import { FileMetaData } from '../../model/file-meta-data';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgFor, NgStyle } from '@angular/common';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-fileupload',
  imports: [NgStyle, NgFor],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.css',
})
export class FileuploadComponent {
  selectedFiles!: FileList;
  currentFileUpload!: FileMetaData;
  percentage: number = 0;

  listOfFiles: FileMetaData[] = [];

  constructor(
    private fileService: FileService,
    private fireStorage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.getAllFiles();
  }

  uploadFile() {
    this.currentFileUpload = new FileMetaData(this.selectedFiles[0]);
    const path = 'Uploads/' + this.currentFileUpload.file.name;

    const storageRef = this.fireStorage.ref(path);
    const uploadTask = storageRef.put(this.selectedFiles[0]);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadLink) => {
            (this.currentFileUpload.url = downloadLink),
              (this.currentFileUpload.size = this.currentFileUpload.file.size),
              (this.currentFileUpload.name = this.currentFileUpload.file.name),
              this.fileService.saveMetaDataofFile(this.currentFileUpload);
          });
        })
      )
      .subscribe(
        (res: any) => {
          this.percentage = (res.bytesTransferred * 100) / res.totalBytes;
        },
        (err) => {
          console.log(err.message);
        }
      );
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  getAllFiles() {
    this.fileService.getAllFiles().subscribe(
      (res) => {
        this.listOfFiles = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  deleteFile(file: FileMetaData) {
    if (window.confirm('Are you sure you want to delete ' + file.name + '?')) {
      this.fileService.deleteFile(file);
      this.ngOnInit();
    }
  }
}
