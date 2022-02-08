import { PartialType } from "@nestjs/mapped-types";
import { ciudad } from "./ciudades.entity"

export class editciudaddto extends PartialType(ciudad){}