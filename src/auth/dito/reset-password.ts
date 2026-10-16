
import {
  IsNotEmpty,
  MinLength,
} from "class-validator";

export class ResetPasswordDto {
  @IsNotEmpty({ message: "Token harus diisi" })
  token: string;

  @IsNotEmpty({ message: "Password baru harus diisi" })
  @MinLength(8, {
    message: "Password minimal 8 karakter",
  })
  newPassword: string;

  @IsNotEmpty({
    message: "Konfirmasi password harus diisi",
  })
  confirmPassword: string;
}
