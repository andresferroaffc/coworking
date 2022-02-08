import { PartialType } from "@nestjs/mapped-types";
import { reservasdto } from "./reservas.dto"

export class editreservasdto extends PartialType(reservasdto){}