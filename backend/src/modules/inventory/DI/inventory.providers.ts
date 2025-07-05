import { SetQtyService } from '../applications/services/set-qty.service';
import { INVENTORY_TOKENS } from './injection.tokens';

export class InventoryProviders {
  static readonly SET_QTY_SVC = {
    provide: INVENTORY_TOKENS.SERVICES.SET_QTY,
    useClass: SetQtyService,
  };

  public static all = [InventoryProviders.SET_QTY_SVC];
}
