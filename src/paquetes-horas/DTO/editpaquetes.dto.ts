import { PartialType } from "@nestjs/mapped-types";
import { paquetedto } from "./paquetes.dto"

export class editpaquetedto extends PartialType(paquetedto){}