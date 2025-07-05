import { Controller, Get, Inject, Patch, Query } from '@nestjs/common';
import { INVENTORY_TOKENS } from '../DI/injection.tokens';
import { ISetQTY } from '../applications/ports/set-qty.service.interface';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { User_Role } from 'src/modules/auth/roles.enum';
import { Inventory } from '../domain/entities/inventory.domain';
import { SetQTYDTO } from '../applications/DTO/set-qty.dto';
import { IGetQty } from '../applications/ports/get-qty.service.interface';

@Controller('inventory')
export class InventoryController {
  constructor(
    @Inject(INVENTORY_TOKENS.SERVICES.SET_QTY) private readonly setQty: ISetQTY,
    @Inject(INVENTORY_TOKENS.SERVICES.GET_QTY) private readonly getQty: IGetQty,
  ) {}

  @Patch('/set')
  @Roles(User_Role.ADMIN)
  async patchQty(@Query() query: SetQTYDTO): Promise<Inventory> {
    return await this.setQty.setQuantity(query.bookId, query.qty);
  }

  @Get('get/qty')
  @Roles(User_Role.USER)
  async getQuantity(@Query('bookId') bookId: number): Promise<number> {
    return await this.getQty.getQuantity(bookId);
  }
}
