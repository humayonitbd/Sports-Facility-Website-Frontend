export type TBooking = {
  status: string;
  paymentStatus: string;
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  user: TDBUser;
  facility: TFacility;
  payableAmount: number;
  isBooked: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type TTableBooking = {
  paymentStatus: string;
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  userName: string;
  payableAmount: number;
  isBooked: string;
  timeRange: string;
};

export type TFacility = {
  _id: string;
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  image: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type TDBUser = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  status:string;
  role: string;
  address: string;
  profileImg: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
