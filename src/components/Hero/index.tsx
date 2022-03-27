import moment from 'moment'
import { useEffect, useState } from 'react'

import SocialLinks from 'components/SocialLinks'
import * as S from './styles'

export default function Hero() {
  const [data, setData] = useState('')

  useEffect(() => {
    const today = new Date().toISOString().replace(/-/g, '').split('T')[0]
    const diff = moment(today, 'YYYYMMDD').diff(moment('20210410', 'YYYYMMDD'))

    const formatYears = () => {
      const years = moment.duration(diff).asYears()
      return Math.floor(years) > 1
        ? `${Math.floor(years)} years`
        : `${Math.floor(years)} year`
    }

    const formatMonths = () => {
      const months = moment.duration(diff).asMonths()
      return Math.floor(months) > 1
        ? `${Math.floor(months)} months`
        : `${Math.floor(months)} month`
    }

    setData(`${formatYears()} and ${formatMonths()}`)
  }, [])

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

      <S.Description>
        I dedicate myself to be the best version of myself, I love to study
        programming always looking to keep myself updated! I love turning ideas
        into real projects and also applying all my knowledge to what I&apos;m
        doing. I have {data} of programming experience.
      </S.Description>
    </S.Header>
  )
}
