import { IsBoolean, IsInt, IsString, IsArray } from "class-validator";

export class GetNumberDto {
    @IsInt()
    number: number;

    @IsBoolean()
    is_perfect: boolean;

    @IsBoolean()
    is_prime: boolean;

    @IsArray()
    @IsString({ each: true })
    properties: string[];

    @IsInt()
    digit_sum: number;

    @IsString()
    fun_fact: string;
}