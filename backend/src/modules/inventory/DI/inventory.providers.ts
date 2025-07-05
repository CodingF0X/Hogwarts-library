import { GetQuantityService } from '../applications/services/get-qty.service';
import { SetQtyService } from '../applications/services/set-qty.service';
import { INVENTORY_TOKENS } from './injection.tokens';

export class InventoryProviders {
  static readonly SET_QTY_SVC = {
    provide: INVENTORY_TOKENS.SERVICES.SET_QTY,
    useClass: SetQtyService,
  };

  static readonly GET_QTY_SVC = {
    provide: INVENTORY_TOKENS.SERVICES.GET_QTY,
    useClass: GetQuantityService,
  };

  public static all = [
    InventoryProviders.SET_QTY_SVC,
    InventoryProviders.GET_QTY_SVC,
  ];
}
