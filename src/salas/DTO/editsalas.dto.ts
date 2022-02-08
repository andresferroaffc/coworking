import { PartialType } from "@nestjs/mapped-types";
import { salasdto } from "./salas.dto"

export class editsalasdto extends PartialType(salasdto){}