export type CafeCactusData = {
    headerImage: HeaderImage;
  }
  
  export type HeaderImage = {
    src: string;
    category: ImageCategory;
  }
  
  export enum ImageCategory {
    Portrait = "portrait",
    Landscape = "landscape"
  }
