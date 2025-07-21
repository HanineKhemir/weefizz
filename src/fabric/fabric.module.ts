import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FabricService } from "./fabric.service";
import { Fabric } from "./fabric.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Fabric])],
  providers: [FabricService],
  exports: [FabricService],
})
export class FabricModule {}
