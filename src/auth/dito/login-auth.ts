
import {
  IsNotEmpty,
  IsEmail,
  IsString,
} from "class-validator";

export class LoginAuthDto {
  @IsNotEmpty({ message: "Email harus diisi" })
  @IsEmail({}, { message: "Format email tidak valid" })
  email: string;

  @IsNotEmpty({ message: "Password tidak boleh kosong" })
  @IsString({ message: "Password harus berupa teks" })
  password: string;
}
