import MediaMatch from 'components/MediaMatch'
import SocialLinks from 'components/SocialLinks'
import * as S from './styles'

export default function Hero() {
  return (
    <S.Header>
      <S.Heading>
        Front-end developer, focused on making <span>React</span>{' '}
        <span>and empowering users through web applications</span>
      </S.Heading>

      <S.Subtitle>Matheus Gabriel Klinkonsky</S.Subtitle>

      <S.Social>
        <MediaMatch greaterThan="medium">
          <SocialLinks hideLabel={false} />
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <SocialLinks />
        </MediaMatch>
      </S.Social>
    </S.Header>
  )
}
