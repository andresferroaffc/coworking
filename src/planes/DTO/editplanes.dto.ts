import { PartialType } from "@nestjs/mapped-types";
import { planesdto } from "./planes.dto"

export class editplanesdto extends PartialType(planesdto){}