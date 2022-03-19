import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi/index'
import * as S from './styles'

type SocialLinksProps = {
  hideLabel?: boolean
}

const links = [
  {
    icon: <FiGithub role="img" size={20} title="Github" />,
    href: 'https://github.com/klinkonskydev',
    label: 'github'
  },
  {
    icon: <FiLinkedin role="img" size={20} title="Linkedin" />,
    href: 'https://www.linkedin.com/in/klinkonsky/',
    label: 'linkedin'
  },
  {
    icon: <FiInstagram role="img" size={20} title="Instagram" />,
    href: 'https://www.instagram.com/klinkonsky.dev/',
    label: 'instagram'
  }
]

const SocialLinks = ({ hideLabel = true }: SocialLinksProps) => {
  return (
    <S.Wrapper>
      {links.map(({ icon, href, label }) => (
        <S.Link
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {icon}
          {!hideLabel && <span>{label}</span>}
        </S.Link>
      ))}
    </S.Wrapper>
  )
}

export default SocialLinks
