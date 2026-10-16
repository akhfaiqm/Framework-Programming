
import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsString,
} from "class-validator";

export class CreateAuthDto {
  @IsNotEmpty({ message: "Nama harus diisi" })
  @IsString({ message: "Nama harus berupa teks" })
  name: string;

  @IsNotEmpty({ message: "Email harus diisi" })
  @IsEmail({}, { message: "Format email tidak valid" })
  email: string;

  @IsNotEmpty({ message: "Password tidak boleh kosong" })
  @MinLength(8, {
    message: "Password minimal 8 karakter",
  })
  password: string;

  @IsNotEmpty({
    message: "Konfirmasi password harus diisi",
  })
  confirmPassword: string;
}
