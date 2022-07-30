import React from 'react'
import styled from 'styled-components'

type Props = {
  checked: boolean
}

export const Check: React.FC<Props> = props => {
  if (props.checked) {
    return (
      <WrapperChecked>
        <Circle />
      </WrapperChecked>
    )
  } else {
    return <Wrapper />
  }
}

const WrapperChecked = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.8rem;
  background-color: ${props => props.theme.colors.SECONDARY_DEFAULT};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Circle = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border: 0.1rem solid #fff;
  border-radius: 0.6rem;
`

const Wrapper = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.8rem;
  border: 0.2rem solid ${props => props.theme.colors.SECONDARY_DEFAULT};
`
