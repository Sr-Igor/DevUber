import theme from 'styles/theme';
import * as S from './styled';

type DefaultButtonProps = {
  label?: string;
  loading?: boolean;
};

const DefaultButton = (props: DefaultButtonProps) => {
  return (
    <S.Container onPress={() => alert('...')}>
      {props.loading && <S.Loading color={theme.colors.lightBg} size="small" />}
      {!props.loading && <S.LabelButton>{props.label}</S.LabelButton>}
    </S.Container>
  );
};

export default DefaultButton;
