// types/index.ts

export interface House {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    hostId: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface HouseFormData {
    title: string;
    description: string;
    price: string;
    location: string;
  }