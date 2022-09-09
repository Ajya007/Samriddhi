import { Input as InputField } from "@chakra-ui/react";

const Input = ({
  size,
  disabled,
  placeholder,
  variant,
  ...rest
}: InputProps) => {
  return (
    <InputField
      size={size}
      disabled={disabled}
      placeholder={placeholder}
      variant={variant}
      {...rest}
    />
  );
};

type Size = "xs" | "lg" | "md" | "sm";
type Variant = "outline" | "filled" | "flushed" | "unstyled";

interface InputProps {
  size?: Size;
  disabled?: boolean;
  placeholder?: string;
  variant?: Variant;
}

export default Input;
