import { PartialType } from "@nestjs/mapped-types";
import { statussaladto } from "./status_salas.dto"

export class editstatussaladto extends PartialType(statussaladto){}