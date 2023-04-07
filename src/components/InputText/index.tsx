import * as S from './styled';

type InputTextProps = {
  error?: string;
  placeholder?: string;
  value?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputText = ({
  error,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  label
}: InputTextProps) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.InputText
        hasError={!!error}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      <S.BoxError>{error && <S.ErrorText>{error}</S.ErrorText>}</S.BoxError>
    </S.Container>
  );
};
