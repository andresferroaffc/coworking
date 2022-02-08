import { PartialType } from "@nestjs/mapped-types";
import { userdto } from "./user.dto"

export class edituserdto extends PartialType(userdto){}