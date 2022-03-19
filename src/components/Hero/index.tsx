import SocialLinks from 'components/SocialLinks'
import * as S from './styles'

export default function Hero() {
  return (
    <S.Header>
      <S.Heading>
        Front-end develooper, focused on making React/Next products{' '}
        <span>and empowering users through web applications</span>
      </S.Heading>

      <S.Subtitle>Matheus Gabriel Klinkonsky</S.Subtitle>

      <S.Social>
        <SocialLinks hideLabel={false} />
      </S.Social>
    </S.Header>
  )
}
