import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FileMetaData } from '../model/file-meta-data';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private fireStorage: AngularFireStorage, private fireStore: AngularFirestore) { }

  saveMetaDataofFile(fileObj: FileMetaData) {
    const fileMeta = {
      name: fileObj.name,
      url: fileObj.url,
      size: fileObj.size,
      id: ''
    }
    fileMeta.id = this.fireStore.createId();

    this.fireStore.collection('/Upload').add(fileMeta);
  }


  getAllFiles(){
    return this.fireStore.collection('/Upload').snapshotChanges();
  }

  deleteFile(fileMeta: FileMetaData){
    this.fireStore.collection('/Upload').doc(fileMeta.id).delete();
    this.fireStorage.ref('/Uploads/' + fileMeta.name).delete();
  }


}
