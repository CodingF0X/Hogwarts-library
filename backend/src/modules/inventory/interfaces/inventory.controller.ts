import { Controller, Get, Inject, Patch, Query } from '@nestjs/common';
import { INVENTORY_TOKENS } from '../DI/injection.tokens';
import { ISetQTY } from '../applications/ports/set-qty.service.interface';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { User_Role } from 'src/modules/auth/roles.enum';
import { Inventory } from '../domain/entities/inventory.domain';
import { SetQTYDTO } from '../applications/DTO/set-qty.dto';
import { IGetQty } from '../applications/ports/get-qty.service.interface';
import { IGetInventoryService } from '../applications/ports/get-Inventory.service.interface';

@Controller('inventory')
export class InventoryController {
  constructor(
    @Inject(INVENTORY_TOKENS.SERVICES.SET_QTY) private readonly setQty: ISetQTY,
    @Inject(INVENTORY_TOKENS.SERVICES.GET_QTY) private readonly getQty: IGetQty,
    @Inject(INVENTORY_TOKENS.SERVICES.GET_INVENTORY)
    private readonly getInventory: IGetInventoryService,
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

  @Get('get/all')
  @Roles(User_Role.ADMIN)
  async getAll(): Promise<Inventory[]> {
    return await this.getInventory.getInventory();
  }

  @Get('get/query')
  @Roles(User_Role.ADMIN)
  async getInventoryByBookId(@Query('bookId') bookId: number): Promise<Inventory> {
    return await this.getInventory.getInventoryByBookId(bookId);
  }

}
