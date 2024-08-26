export type TBooking = {
  status: string;
  paymentStatus: string;
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  facility: TFacility;
  payableAmount: number;
  isBooked: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

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
