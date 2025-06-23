import { IAddress } from './address.interface';

export class Address {
  private readonly addressProps: IAddress;

  constructor(private readonly props: IAddress) {
    this.addressProps = props;
  }

  public static create(props: IAddress): IAddress {
    const sanitized = this.validate(props);
    return sanitized;
    // return new Address(sanitized);
  }

  public static validate(props: IAddress): IAddress {
    let { street, house_No, city, state, zipCode, country } = props;
    if (!street) {
      throw new Error('Street address cannot be empty');
    }
    street = street.trim().toLocaleLowerCase();

    if (typeof house_No !== 'number') {
      const num = Number(house_No);
      if (Number.isNaN(num)) {
        throw new Error('House number must be a valid number');
      }
      house_No = num;
    }

    if (!city) {
      throw new Error('City cannot be empty');
    }
    city = city.trim().toLocaleLowerCase();

    if (!state) {
      throw new Error('State cannot be empty');
    }
    state = state.trim().toLocaleLowerCase();

    if (typeof zipCode !== 'number') {
      const zc = Number(zipCode);
      if (Number.isNaN(zc)) {
        throw new Error('Zip code must be a valid number');
      }
      zipCode = zc;
    }

    if (!country) {
      throw new Error('Country cannot be empty');
    }
    country = country.trim().toLocaleLowerCase();

    return { street, house_No, city, state, zipCode, country };
  }

  public toString(): IAddress {
    return this.addressProps;
  }

  toJSON(): IAddress {
    return this.addressProps;
  }
}
