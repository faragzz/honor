export type UserInfo = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}
export type ShippingAddressFormData = {
  country: string;
  city: string;
  region: string;
  streetNumber: string;
  houseNumber: string;
  postalCode: string;
};
export type CardDetails = {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardType: 'mastercard'|'paypal';
}

// export {UserInfo,ShippingAddressFormData};
