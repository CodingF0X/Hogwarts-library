import { IAddress } from './address.interface';

export class Address {
  private readonly addressProps: IAddress;

  constructor(private readonly props: IAddress) {
    this.addressProps = props;
  }

  public static create(props: IAddress): Address {
    return new Address(props);
  }

  public toString(): IAddress {
    return this.addressProps;
  }

  toJSON(): IAddress {
    return this.addressProps;
  }
}
