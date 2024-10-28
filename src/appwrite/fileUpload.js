import conf from "../conf/conf.js";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class BucketService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // file upload service

  async uploadFile(file) {
    try {
      return this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.log("Appwrite service :: uploadFile ::", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);

      return true;
    } catch (error) {
      console.log("Appwrite service:: deletFile :: ", error);
      return false;
    }
  }

  getImagePreview(fileId) {
    const url = this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    console.log(url);
    console.log(url.href);
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const bucketService = new BucketService();
export default bucketService;
